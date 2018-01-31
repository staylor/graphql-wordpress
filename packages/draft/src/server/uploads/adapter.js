import Storage from '@google-cloud/storage';
import credentials from './keyfile.json';

/* eslint-disable no-console */

const bucketName = process.env.GCS_BUCKET;

class StorageAdapter {
  uploadDir;
  bucket;

  constructor(uploadDir) {
    this.uploadDir = uploadDir;
    const storage = new Storage({
      credentials,
    });
    this.bucket = storage.bucket(bucketName);
  }

  async upload({ fileName, destination }) {
    const relativeFile = `${destination.replace(`${this.uploadDir}/`, '')}/${fileName}`;
    const filePath = `${this.uploadDir}/${relativeFile}`;
    try {
      await this.bucket.upload(filePath, { destination: relativeFile });
      console.log(`${relativeFile} uploaded to ${bucketName}.`);
      await this.bucket.file(relativeFile).makePublic();
    } catch (err) {
      throw err;
    }
  }

  run(files) {
    return Promise.all(files.map(this.upload, this));
  }
}

const adapter = uploadDir => new StorageAdapter(uploadDir);

export default adapter;
