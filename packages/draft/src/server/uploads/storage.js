import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';
import crypto from 'crypto';
import sharp from 'sharp';
import mm from 'musicmetadata';

/* eslint-disable class-methods-use-this, consistent-return */

class MediaStorage {
  constructor(opts) {
    this.opts = opts;
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

  handleCrop = ({ dimensions = null, destination, basename, ext }, resolve, reject) => {
    let fileName = `${basename}${ext}`;
    if (dimensions) {
      const [width, height] = dimensions;
      fileName = `${basename}-${width}x${height}${ext}`;
    }
    const finalPath = path.join(destination, fileName);
    let transform = sharp();
    if (dimensions) {
      transform = transform.resize(dimensions[0], dimensions[1]);
    }

    return transform.toFile(finalPath, (err, info) => {
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
  };

  async handleImage(file, { destination, ext, basename }, cb) {
    const sizes = [null, [300, 300], [150, 150]];
    const crops = await Promise.all(
      sizes.map(
        dimensions =>
          new Promise((resolve, reject) => {
            file.stream.pipe(
              this.handleCrop({ dimensions, destination, basename, ext }, resolve, reject)
            );
          })
      )
    );

    const original = crops.shift();

    cb(null, {
      ...original,
      mimeType: file.mimetype,
      originalName: file.originalname,
      destination: destination.replace(`${this.opts.uploadDir}/`, ''),
      crops,
    });
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
