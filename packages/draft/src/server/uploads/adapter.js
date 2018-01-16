import Storage from '@google-cloud/storage';
import credentials from './keyfile.json';

const bucketName = process.env.GCS_BUCKET;

const adapter = uploadDir => async ({ fileName, destination }) => {
  const storage = new Storage({
    credentials,
  });
  const bucket = storage.bucket(bucketName);
  const relativeFile = `${destination}/${fileName}`;
  const filePath = `${uploadDir}/${relativeFile}`;
  try {
    await bucket.upload(filePath, { destination: relativeFile });
    // eslint-disable-next-line no-console
    console.log(`${relativeFile} uploaded to ${bucketName}.`);
    await bucket.file(relativeFile).makePublic();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('ERROR:', err);
  }
};

export default adapter;
