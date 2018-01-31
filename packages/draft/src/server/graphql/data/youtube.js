// @flow
import 'dotenv/config';
import { URL } from 'url';
import fetch from 'node-fetch';
import { slugify } from 'server/graphql/models/utils';

const API_HOST = 'https://www.googleapis.com';
const API_PATH = '/youtube/v3/playlistItems';
const API_KEY = 'AIzaSyAch46nW70rKFjPjkkqzdui76npzV6bLEQ';
const PER_PAGE = '50';

/* eslint-disable */
const PLAYLISTS = {
  '2001': 'PLsfCTX0EqVcuH1w88lovS2eJQILp5u5Pn',
  '2002': 'PLsfCTX0EqVctQbNSkN0FPp69E-yqS4aku',
  '2003': 'PLsfCTX0EqVcs9O5E1bRwOyRPofShAtMiq',
  '2004': 'PLsfCTX0EqVcth93WL7EnEVWtuY84247FX',
  '2005': 'PLsfCTX0EqVcvqAbZTEZklzZTS-ClYv5K8',
  '2006': 'PLsfCTX0EqVcv6Ho87sX0U3jntxTPox7Ze',
  '2007': 'PLsfCTX0EqVctvkpywF3w5NP4fqqwGoP3c',
  '2008': 'PLsfCTX0EqVcug5unsFGXDep18EPSZRjKg',
  '2009': 'PLsfCTX0EqVcvI3uMJrW3aY0lDUl_4XJcj',
  '2010': 'PLsfCTX0EqVcvrjKQOtwr8YSJVMaYMUGLx',
  '2011': 'PLsfCTX0EqVcu_PEsjNwXS7UyZW3IT3NcK',
  '2012': 'PLsfCTX0EqVcunx1XmBWLoDp-ehtvHx7Eo',
  '2013': 'PLsfCTX0EqVcv4hx7p0BmxW7_wgLYw1Y8z',
  '2014': 'PLsfCTX0EqVcvb_W59xx-MUrgqTOi_IZ2R',
  '2015': 'PLsfCTX0EqVcuZ8pz_IPXI1fzwwX9h3-AR',
  '2016': 'PLsfCTX0EqVcv1fJg5nlLYbguhqUnDSs-K',
  '2017': 'PLsfCTX0EqVcv2t3KPBP9rbYxExJbrcc-1',
  '2018': 'PLsfCTX0EqVctVu9qhZdQFNdL1cDgsjQQS',
};
/* eslint-enable */
/* eslint-disable no-console */

const playlistMap = Object.keys(PLAYLISTS).reduce((memo, year) => {
  memo[PLAYLISTS[year]] = parseInt(year, 10);
  return memo;
}, {});

function getPlaylistUrl(playlistId: string, pageToken?: string) {
  const requestURL = new URL(API_PATH, API_HOST);
  requestURL.searchParams.set('playlistId', playlistId);
  requestURL.searchParams.set('maxResults', PER_PAGE);
  requestURL.searchParams.set('part', 'snippet,contentDetails');
  requestURL.searchParams.set('key', API_KEY);
  if (pageToken) {
    requestURL.searchParams.set('pageToken', pageToken);
  }
  return requestURL.href;
}

async function fetchPlaylistItems(playlistId: string) {
  return new Promise((resolve, reject) => {
    let items = [];

    const fetchPage = (pageToken?: string) => {
      const playlistUrl = getPlaylistUrl(playlistId, pageToken);
      // console.log(playlistUrl);
      fetch(playlistUrl)
        .catch(e => {
          if (items.length) {
            resolve(items);
          } else {
            reject(e);
          }
        })
        .then(response => response.json())
        .then(result => {
          items = items.concat(result.items);
          if (result.nextPageToken) {
            fetchPage(result.nextPageToken);
          } else {
            resolve(items);
          }
        });
    };

    fetchPage();
  });
}

function updateVideo(db: any, { contentDetails, snippet }, playlistId: string) {
  const data = {
    dataId: contentDetails.videoId,
    dataType: 'youtube',
    dataPlaylistIds: [playlistId],
    year: playlistMap[playlistId],
    publishedISO: contentDetails.videoPublishedAt,
    publishedAt: new Date(contentDetails.videoPublishedAt).getTime(),
    title: snippet.title,
    position: snippet.position,
    updatedAt: Date.now(),
    thumbnails: Object.keys(snippet.thumbnails).map(thumb => snippet.thumbnails[thumb]),
  };

  return new Promise((resolve, reject) => {
    db.collection('video').update(
      { dataId: data.dataId },
      {
        $set: data,
        $setOnInsert: {
          createdAt: Date.now(),
          slug: slugify(snippet.title),
        },
      },
      { upsert: true },
      updateErr => {
        if (updateErr) {
          reject(updateErr);
        } else {
          resolve(data.dataId);
        }
      }
    );
  });
}

async function fetchPlaylist(db: any, playlistId: string) {
  const items = await fetchPlaylistItems(playlistId);
  const cursor = db.collection('video').find({ dataPlaylistIds: playlistId }, { dataId: 1 });
  const year = playlistMap[playlistId];
  return cursor
    .toArray()
    .then(ids => ids.map(({ dataId }) => dataId))
    .then(ids =>
      Promise.all(items.map(item => updateVideo(db, item, playlistId))).then(dataIds => {
        if (ids.length) {
          const orphans = ids.filter(id => dataIds.indexOf(id) < 0);
          if (orphans.length) {
            console.log('Orphans in:', year, '-', orphans);
            db.collection('video').remove({ dataId: { $in: orphans }, playlistIds: playlistId });
          } else if (dataIds.length > ids.length) {
            console.log('Added', dataIds.length - ids.length, 'items to', year);
          } else {
            console.log('No changes to:', year);
          }
        } else {
          console.log('Imported', items.length, 'items from', year);
        }
        return dataIds;
      })
    );
}

export default async (db: any) =>
  Promise.all(Object.keys(playlistMap).map(p => fetchPlaylist(db, p)));
