import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';
import crypto from 'crypto';
import sharp from 'sharp';
import mm from 'musicmetadata';
import Settings from 'models/Settings';

/* eslint-disable class-methods-use-this, consistent-return */

class MediaStorage {
  settings = null;

  constructor(opts) {
    this.opts = opts;
  }

  async getSettings() {
    if (this.settings === null) {
      const settings = new Settings({ db: this.opts.db });
      this.settings = await settings.findOneById('media');
    }
    return this.settings;
  }

  getDestination() {
    const d = new Date();
    const month = d.getMonth() + 1;
    const monthStr = month < 10 ? `0${month}` : `${month}`;
    const uploadsFolder = path.join(this.opts.uploadDir, `${d.getFullYear()}`, monthStr);
    mkdirp.sync(uploadsFolder);
    return uploadsFolder;
  }

  getFilename() {
    return new Promise((resolve, reject) => {
      crypto.pseudoRandomBytes(8, (err, raw) => {
        if (err) {
          reject(err);
        } else {
          const filename = raw.toString('hex');
          resolve(filename);
        }
      });
    });
  }

  handleCrop(src, size, { destination, ext, basename }) {
    return new Promise((resolve, reject) => {
      const [width, height] = size;
      const cropName = `${basename}-${width}x${height}${ext}`;
      const cropPath = path.join(destination, cropName);

      return sharp(src)
        .resize(size[0], size[1])
        .withoutEnlargement()
        .toFile(cropPath, (err, info) => {
          if (err) {
            reject(err);
          } else {
            resolve({
              fileName: cropName,
              fileSize: info.size,
              width: info.width,
              height: info.height,
            });
          }
        });
    });
  }

  async handleImage(file, { destination, ext, basename }, cb) {
    const fileName = `${basename}${ext}`;
    const finalPath = path.join(destination, fileName);
    const original = { fileName };
    const imageMeta = sharp().on('info', info => {
      original.width = info.width;
      original.height = info.height;
      original.fileSize = info.size;
    });

    const outStream = fs.createWriteStream(finalPath);
    outStream.on('error', cb);
    outStream.on('finish', async () => {
      const settings = await this.getSettings();
      const sizes = settings.crops
        .filter(crop => crop.width <= original.width && crop.height <= original.height)
        .map(({ width, height }) => [width, height]);
      const crops = await Promise.all(
        sizes.map(size => this.handleCrop(finalPath, size, { destination, ext, basename }))
      );

      cb(null, {
        ...original,
        mimeType: file.mimetype,
        originalName: file.originalname,
        destination: destination.replace(`${this.opts.uploadDir}/`, ''),
        crops,
      });
    });
    file.stream.pipe(imageMeta).pipe(outStream);
  }

  async handleAudio(file, { destination, ext, basename }, cb) {
    const fileName = `${basename}${ext}`;
    const finalPath = path.join(destination, fileName);

    const outStream = fs.createWriteStream(finalPath);
    outStream.on('error', cb);
    outStream.on('finish', async () => {
      const readMetadata = () =>
        new Promise((resolve, reject) => {
          const audioStream = fs.createReadStream(finalPath);
          mm(audioStream, { duration: true }, (err, metadata) => {
            if (err) {
              reject(err);
            } else {
              resolve(metadata);
            }
          });
        });
      const metadata = await readMetadata();
      let images = [];
      if (metadata.picture && metadata.picture.length > 0) {
        images = await Promise.all(
          metadata.picture.map(
            ({ data, format }, i) =>
              new Promise((resolve, reject) => {
                const coverName = `${basename}-cover-${i}.${format}`;
                const coverPath = path.join(destination, coverName);
                sharp(data).toFile(coverPath, (err, info) => {
                  if (err) {
                    reject(err);
                  } else {
                    resolve({
                      fileName,
                      fileSize: info.size,
                      width: info.width,
                      height: info.height,
                    });
                  }
                });
              })
          )
        );
      }

      cb(null, {
        title: metadata.title,
        artist: metadata.artist || [],
        albumArtist: metadata.albumartist || [],
        genre: metadata.genre || [],
        year: metadata.year ? parseInt(metadata.year, 10) : null,
        album: metadata.album,
        duration: metadata.duration,
        images,
        mimeType: file.mimetype,
        originalName: file.originalname,
        destination: destination.replace(`${this.opts.uploadDir}/`, ''),
        fileName,
        fileSize: outStream.bytesWritten,
      });
    });
    file.stream.pipe(outStream);
  }

  async _handleFile(req, file, cb) {
    const destination = this.getDestination();
    const name = file.originalname;
    const ext = name.substring(name.lastIndexOf('.'));
    const basename = await this.getFilename();

    if (file.mimetype.indexOf('image/') === 0) {
      this.handleImage(file, { destination, ext, basename }, cb);
    } else if (file.mimetype.indexOf('audio/') === 0) {
      this.handleAudio(file, { destination, ext, basename }, cb);
    } else {
      const fileName = `${basename}${ext}`;
      const finalPath = path.join(destination, fileName);
      const outStream = fs.createWriteStream(finalPath);
      outStream.on('error', cb);
      outStream.on('finish', () => {
        cb(null, {
          mimeType: file.mimetype,
          originalName: file.originalname,
          destination: destination.replace(`${this.opts.uploadDir}/`, ''),
          fileName,
          fileSize: outStream.bytesWritten,
        });
      });
      file.stream.pipe(outStream);
    }
  }

  _removeFile(req, file, cb) {
    const { path: filePath } = file;

    delete file.destination;
    delete file.filename;
    delete file.path;

    fs.unlink(filePath, cb);
  }
}

export default opts => new MediaStorage(opts);
