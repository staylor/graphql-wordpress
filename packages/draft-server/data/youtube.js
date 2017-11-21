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

(async () => {
  const playlistUrl = getPlaylistUrl(PLAYLIST_ID);
  console.log(playlistUrl);
  const result = await fetch(playlistUrl).then(response => response.json());

  MongoClient.connect(uri, (err, db) => {
    result.items.forEach(({ snippet, contentDetails }, i) => {
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

      db
        .collection('video')
        .update(
          { dataId: contentDetails.videoId },
          { $set: data, $setOnInsert: { createdAt: Date.now(), tags: [] } },
          { upsert: true },
          updateErr => {
            if (updateErr) {
              console.log(updateErr);
            }
            console.log(i);
          }
        );
    });

    db.close();
  });
})();
