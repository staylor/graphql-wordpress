import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import Upload from './Upload';
import type { FileUpload, Callback } from '../Storage';

type CropInfo = {
  fileName: string,
  fileSize: number,
  width: number,
  height: number,
};

export default class Image extends Upload {
  crops = [];

  handleCrop(src: string, size: [number, number]): Promise<CropInfo> {
    return new Promise((resolve, reject) => {
      const [width = null, height = null] = size;
      const cropName = `${this.basename}-${width || 0}x${height || 0}${this.ext}`;
      const cropPath = path.join(this.destination, cropName);

      return sharp(src)
        .resize(size[0] || null, size[1] || null)
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

  async save(file: FileUpload, cb: Callback) {
    await this.setFileProps(file);

    const finalPath = path.join(this.destination, this.fileName);
    const original = { fileName: this.fileName, width: 0, height: 0, fileSize: 0 };
    const imageMeta = sharp().on('info', info => {
      original.width = info.width;
      original.height = info.height;
      original.fileSize = info.size;
    });

    const outStream = fs.createWriteStream(finalPath);
    outStream.on('error', cb);
    outStream.on('finish', async () => {
      const sizes = this.settings.crops.map(({ width, height }) => {
        if (width < original.width && height > original.height) {
          return [width];
        } else if (height < original.height && width > original.width) {
          return [null, height];
        }
        return [width, height];
      });
      this.crops = await Promise.all(sizes.map(size => this.handleCrop(finalPath, size)));

      cb(null, {
        ...original,
        mimeType: file.mimetype,
        originalName: file.originalname,
        destination: this.destination.replace(`${this.uploadDir}/`, ''),
        title: '',
        caption: '',
        altText: '',
        type: 'image',
        crops: this.crops,
      });
    });
    // $FlowFixMe
    file.stream.pipe(imageMeta).pipe(outStream);
  }

  toArray() {
    return super.toArray().concat(
      this.crops.map(image => ({
        destination: this.destination,
        fileName: image.fileName,
      }))
    );
  }
}
