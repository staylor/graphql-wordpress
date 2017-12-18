import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';
import crypto from 'crypto';
import sharp from 'sharp';

/* eslint-disable class-methods-use-this, consistent-return */

class MediaStorage {
  constructor(opts) {
    this.opts = opts;
  }

  getDestination() {
    const d = new Date();
    const month = d.getMonth() + 1;
    const monthStr = month < 10 ? `0${month}` : `${month}`;
    const uploadsFolder = path.join(this.opts.publicDir, 'uploads', `${d.getFullYear()}`, monthStr);
    mkdirp.sync(uploadsFolder);
    return uploadsFolder;
  }

  getFilename(name, crop = null) {
    return new Promise((resolve, reject) => {
      const ext = name.substring(name.lastIndexOf('.'));
      crypto.pseudoRandomBytes(8, (err, raw) => {
        if (err) {
          reject(err);
        } else {
          const hex = raw.toString('hex');
          let filename = `${hex}${ext}`;
          if (crop) {
            const [width, height] = crop;
            filename = `${hex}-${width}x${height}${ext}`;
          }
          resolve(filename);
        }
      });
    });
  }

  handleCrop = (ext, size, originalFile, destination) =>
    new Promise(async (resolve, reject) => {
      const filename = await this.getFilename(ext, size);
      const finalPath = path.join(destination, filename);

      sharp(originalFile)
        .resize(size[0], size[1])
        .toFile(finalPath, (err, info) => {
          if (err) {
            reject(err);
          } else {
            resolve({
              filename,
              path: finalPath,
              size: info.size,
              width: info.width,
              height: info.height,
            });
          }
        });
    });

  async _handleFile(req, file, cb) {
    const destination = this.getDestination();
    const name = file.originalname;
    const ext = name.substring(name.lastIndexOf('.'));
    const filename = await this.getFilename(ext);

    const finalPath = path.join(destination, filename);
    const outStream = fs.createWriteStream(finalPath);
    outStream.on('error', cb);

    file.stream.pipe(outStream);
    file.stream.on('end', async () => {
      const sizes = [[300, 300], [150, 150]];
      const crops = await sizes.map(size => this.handleCrop(ext, size, finalPath, destination));

      cb(null, {
        original: file.originalname,
        destination: destination.replace(`${this.opts.publicDir}/`, ''),
        filename,
        path: finalPath,
        size: outStream.bytesWritten,
        crops,
      });
    });
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
