import fs from 'fs';
import Settings from 'server/graphql/models/Settings';
import Upload from './types/Upload';
import Image from './types/Image';
import Audio from './types/Audio';
import Video from './types/Video';

/* eslint-disable class-methods-use-this, consistent-return */

export type Callback = (err: any, value?: any) => any;

export type FileUpload = {
  destination: string,
  path: string,
  originalname: string,
  mimetype: string,
  encoding: string,
  filename: string,
  stream: ReadableStream,
};

export type UploadOpts = {
  uploadDir: string,
  settings: any,
};

type FileInfo = {
  fileName: string,
  destination: string,
};

type StorageOpts = {
  db: any,
  uploadDir: string,
  adapter: (fileInfo: FileInfo) => Promise<void>,
};

class Storage {
  opts: StorageOpts;

  constructor(opts: StorageOpts) {
    this.opts = opts;
  }

  async getSettings() {
    const settings = new Settings({ db: this.opts.db });
    return settings.findOneById('media');
  }

  async _handleFile(req, file: FileUpload, cb: Callback) {
    const settings = await this.getSettings();

    let upload;
    const uploadOpts = { uploadDir: this.opts.uploadDir, settings };
    if (file.mimetype.indexOf('image/') === 0) {
      upload = new Image(uploadOpts);
    } else if (file.mimetype.indexOf('audio/') === 0) {
      upload = new Audio(uploadOpts);
    } else if (file.mimetype.indexOf('video/') === 0) {
      upload = new Video(uploadOpts);
    } else {
      upload = new Upload(uploadOpts);
    }
    upload.save(file, async (err, fileData) => {
      if (this.opts.adapter) {
        await upload.runAdapter(this.opts.adapter);
      }
      cb(err, fileData);
    });
  }

  _removeFile(req, file: FileUpload, cb: Callback) {
    const { path: filePath } = file;

    delete file.destination;
    delete file.filename;
    delete file.path;

    fs.unlink(filePath, cb);
  }
}

export default (opts: StorageOpts): Storage => new Storage(opts);
