import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import mm from 'musicmetadata';
import Upload from './Upload';
import type { FileUpload, Callback } from '../Storage';

export default class Audio extends Upload {
  images = [];

  extractCovers(metadata: any) {
    return Promise.all(
      metadata.picture.map(
        ({ data, format }, i) =>
          new Promise((resolve, reject) => {
            const coverName = `${this.basename}-cover-${i}.${format}`;
            const coverPath = path.join(this.destination, coverName);
            sharp(data).toFile(coverPath, (err, info) => {
              if (err) {
                reject(err);
              } else {
                resolve({
                  fileName: coverName,
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

  async save(file: FileUpload, cb: Callback) {
    const callback = async (error, data) => {
      const readMetadata = () =>
        new Promise((resolve, reject) => {
          const finalPath = path.join(this.destination, this.fileName);
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
      if (metadata.picture && metadata.picture.length > 0) {
        this.images = await this.extractCovers(metadata);
      }

      cb(error, {
        ...data,
        title: metadata.title,
        artist: metadata.artist || [],
        albumArtist: metadata.albumartist || [],
        genre: metadata.genre || [],
        year: metadata.year ? parseInt(metadata.year, 10) : null,
        album: metadata.album,
        duration: metadata.duration,
        description: '',
        type: 'audio',
        images: this.images,
      });
    };
    super.save(file, callback);
  }

  toArray() {
    return super.toArray().concat(
      this.images.map(image => ({
        destination: this.destination,
        fileName: image.fileName,
      }))
    );
  }
}
