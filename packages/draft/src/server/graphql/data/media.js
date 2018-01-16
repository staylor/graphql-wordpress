import 'dotenv/config';
import path from 'path';
import { MongoClient } from 'mongodb';
import Media from 'server/graphql/models/Media';
import mediaAdapter from 'server/uploads/adapter';

/* eslint-disable no-console */

const { MONGO_URL, MONGO_DB } = process.env;
const uploadDir = path.join(process.cwd(), 'src/uploads');

(async () => {
  const client = await MongoClient.connect(MONGO_URL);
  const db = client.db(MONGO_DB);
  const media = new Media({ db });
  const adapter = mediaAdapter(uploadDir);

  const uploads = [];
  const items = await media.collection.find({}).toArray();
  items.forEach(item => {
    uploads.push({ destination: item.destination, fileName: item.fileName });
    if (item.type === 'image') {
      item.crops.forEach(crop => {
        uploads.push({ destination: item.destination, fileName: crop.fileName });
      });
    } else if (item.type === 'audio') {
      item.images.forEach(crop => {
        uploads.push({ destination: item.destination, fileName: crop.fileName });
      });
    }
  });

  console.log(`Uploading ${uploads.length} files`);
  Promise.all(uploads.map(adapter)).then(() => {
    client.close();
    console.log('All done!');
  });
})();
