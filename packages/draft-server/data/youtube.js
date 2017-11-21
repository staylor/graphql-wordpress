const MongoClient = require('mongodb').MongoClient;
const { URL } = require('url');
const fetch = require('isomorphic-fetch');

var uri =
  'mongodb://wonderboymusic:Pizza1979#@127.0.0.1:27017/highforthis?authSource=admin';

const API_KEY = 'AIzaSyAch46nW70rKFjPjkkqzdui76npzV6bLEQ';
const PLAYLIST_ID = 'PLsfCTX0EqVcv2t3KPBP9rbYxExJbrcc-1';
const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/playlistItems?';

(async () => {
  const requestURL = new URL(
    '/youtube/v3/playlistItems',
    'https://www.googleapis.com'
  );
  requestURL.searchParams.set('playlistId', PLAYLIST_ID);
  requestURL.searchParams.set('maxResults', 50);
  requestURL.searchParams.set('part', 'snippet,contentDetails');
  requestURL.searchParams.set('key', API_KEY);
  const result = await fetch(requestURL.href).then(response => response.json());

  MongoClient.connect(uri, function(err, db) {
    const results = Promise.all(
      result.items.map(({ id, snippet }) => {
        const data = {
          videoId: id,
          publishedAt: snippet.publishedAt,
          title: snippet.title,
          thumbnails: snippet.thumbnails,
          position: snippet.position
        };
        return db
          .collection('youTubeVideo')
          .update({ videoId: id }, data, { upsert: true });
      })
    );
    console.log(results);
  });
})();
