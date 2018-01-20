import Storage from '@google-cloud/storage';
import credentials from './keyfile.json';

/* eslint-disable no-console */

const bucketName = process.env.GCS_BUCKET;

class StorageAdapter {
  uploadDir;
  bucket;
  uploads = [];

  constructor(uploadDir) {
    this.uploadDir = uploadDir;
    const storage = new Storage({
      credentials,
    });
    this.bucket = storage.bucket(bucketName);
  }

  queue(file) {
    this.uploads.push(file);
  }

  clear() {
    this.uploads = [];
  }

  async upload({ fileName, destination }) {
    const relativeFile = `${destination}/${fileName}`;
    const filePath = `${this.uploadDir}/${relativeFile}`;
    try {
      await this.bucket.upload(filePath, { destination: relativeFile });
      console.log(`${relativeFile} uploaded to ${bucketName}.`);
      await this.bucket.file(relativeFile).makePublic();
    } catch (err) {
      throw err;
    }
  }

  run() {
    return Promise.all(this.queue.map(this.upload, this)).then(() => this.clear());
  }
}

const adapter = uploadDir => new StorageAdapter(uploadDir);

export default adapter;
