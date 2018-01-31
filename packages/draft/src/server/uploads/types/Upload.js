import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';
import type { FileUpload, Callback, UploadOpts } from '../Storage';

/* eslint-disable class-methods-use-this, consistent-return */

export default class Upload {
  uploadDir: string;
  settings: any;
  destination: string;
  basename: string;
  ext: string;
  fileName: string;

  constructor(opts: UploadOpts) {
    this.uploadDir = opts.uploadDir;
    this.settings = opts.settings;
  }

  setDestination() {
    const d = new Date();
    const month = d.getMonth() + 1;
    const monthStr = month < 10 ? `0${month}` : `${month}`;
    const uploadsFolder = path.join(this.uploadDir, `${d.getFullYear()}`, monthStr);
    mkdirp.sync(uploadsFolder);
    this.destination = uploadsFolder;
  }

  setFileProps(file: FileUpload): Promise<void> {
    this.setDestination();
    this.ext = file.originalname.substring(file.originalname.lastIndexOf('.'));
    return new Promise((resolve, reject) => {
      crypto.pseudoRandomBytes(8, (err, raw) => {
        if (err) {
          reject(err);
        } else {
          const filename = raw.toString('hex');
          this.basename = filename;
          this.fileName = `${this.basename}${this.ext}`;
          resolve();
        }
      });
    });
  }

  async save(file: FileUpload, cb: Callback) {
    await this.setFileProps(file);

    const finalPath = path.join(this.destination, this.fileName);
    const outStream = fs.createWriteStream(finalPath);
    outStream.on('error', cb);
    outStream.on('finish', () => {
      cb(null, {
        fileName: this.fileName,
        destination: this.destination.replace(`${this.uploadDir}/`, ''),
        mimeType: file.mimetype,
        originalName: file.originalname,
        // $FlowFixMe
        fileSize: outStream.bytesWritten,
      });
    });
    // $FlowFixMe
    file.stream.pipe(outStream);
  }

  toArray() {
    return [{ destination: this.destination, fileName: this.fileName }];
  }

  async runAdapter(adapter = null) {
    if (!adapter) {
      return Promise.resolve();
    }

    const files = this.toArray();
    if (!files || !files.length) {
      return Promise.resolve();
    }

    return adapter.run(files);
  }
}
