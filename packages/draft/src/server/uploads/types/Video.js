import path from 'path';
import ffprobe from 'ffprobe';
import ffprobeStatic from 'ffprobe-static';
import Upload from './Upload';
import type { FileUpload, Callback } from '../Storage';

export default class Video extends Upload {
  async save(file: FileUpload, cb: Callback) {
    const callback = async (err, data) => {
      const finalPath = path.join(this.destination, this.fileName);
      const metadata = await ffprobe(finalPath, { path: ffprobeStatic.path });
      const [video] = metadata.streams;
      cb(err, {
        ...data,
        width: video.width,
        height: video.height,
        duration: parseFloat(video.duration),
        description: '',
        type: 'video',
      });
    };
    super.save(file, callback);
  }
}
