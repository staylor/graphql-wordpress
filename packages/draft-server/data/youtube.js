const { MongoClient } = require('mongodb');
const { URL } = require('url');
const fetch = require('node-fetch');

const uri = 'mongodb://127.0.0.1:27017/highforthis';

const API_KEY = 'AIzaSyAch46nW70rKFjPjkkqzdui76npzV6bLEQ';
const PLAYLIST_ID = 'PLsfCTX0EqVcv2t3KPBP9rbYxExJbrcc-1';

function getPlaylistUrl(playlistId) {
  const requestURL = new URL('/youtube/v3/playlistItems', 'https://www.googleapis.com');
  requestURL.searchParams.set('playlistId', playlistId);
  requestURL.searchParams.set('maxResults', 50);
  requestURL.searchParams.set('part', 'snippet,contentDetails');
  requestURL.searchParams.set('key', API_KEY);
  return requestURL.href;
}

let db;

function updateVideo({ contentDetails, snippet }) {
  const data = {
    dataId: contentDetails.videoId,
    dataType: 'youtube',
    dataPlaylistIds: [PLAYLIST_ID],
    publishedAt: contentDetails.videoPublishedAt,
    title: snippet.title,
    position: snippet.position,
    updatedAt: Date.now(),
  };

  data.thumbnails = Object.keys(snippet.thumbnails).map(thumb => snippet.thumbnails[thumb]);

  return new Promise((resolve, reject) => {
    db
      .collection('video')
      .update(
        { dataId: data.dataId },
        { $set: data, $setOnInsert: { createdAt: Date.now(), tags: [] } },
        { upsert: true },
        updateErr => {
          if (updateErr) {
            reject(updateErr);
            return;
          }
          resolve(data.dataId);
        }
      );
  });
}

(async () => {
  const playlistUrl = getPlaylistUrl(PLAYLIST_ID);
  console.log(playlistUrl);
  const result = await fetch(playlistUrl).then(response => response.json());

  MongoClient.connect(uri, (err, conn) => {
    db = conn;
    const cursor = db.collection('video').find({ dataPlaylistIds: PLAYLIST_ID }, { dataId: 1 });
    cursor
      .toArray()
      .then(ids => ids.map(({ dataId }) => dataId))
      .then(ids => {
        Promise.all(result.items.map(updateVideo)).then(dataIds => {
          const orphans = ids.filter(id => dataIds.indexOf(id) < 0);
          if (orphans.length) {
            console.log('Orphans', orphans);
            db.collection('video').remove({ dataId: { $in: orphans } });
          } else {
            console.log('Lists are the same.');
          }
          db.close();
        });
      });
  });
})();
