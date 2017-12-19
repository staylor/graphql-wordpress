import multer from 'multer';
import Media from 'models/Media';
import mediaStorage from './storage';

const mediaFields = ['originalName', 'destination', 'fileName', 'mimeType', 'fileSize'];

export default function addUploads(app, db, passport, uploadDir) {
  const storage = mediaStorage({ uploadDir, db });

  const upload = multer({ storage });
  app.post(
    '/upload',
    passport.authenticate('jwt', {
      session: false,
    }),
    upload.array('uploads'),
    async (req, res) => {
      const filesToSave = [];
      const files = req.files.map(file => {
        const baseProps = {};
        mediaFields.forEach(field => {
          baseProps[field] = file[field];
        });

        const typeProps = {};
        if (file.mimetype.indexOf('image/') === 0) {
          typeProps.type = 'image';
          typeProps.width = file.width;
          typeProps.height = file.height;
          typeProps.crops = file.crops;
          return Object.assign({}, baseProps, typeProps);
        } else if (file.mimetype.indexOf('audio/') === 0) {
          typeProps.type = 'audio';
          typeProps.title = file.title;
          typeProps.artist = file.artist;
          typeProps.albumArtist = file.albumArtist;
          typeProps.genre = file.genre;
          typeProps.year = file.year;
          typeProps.album = file.album;
          typeProps.duration = file.duration;
          typeProps.images = file.images;
          const fileProps = Object.assign({}, baseProps, typeProps);
          filesToSave.push(fileProps);
          return fileProps;
        } else if (file.mimetype.indexOf('video/') === 0) {
          typeProps.type = 'video';
          typeProps.width = file.width;
          typeProps.height = file.height;
          return Object.assign({}, baseProps, typeProps);
        }
        return Object.assign({}, baseProps, typeProps);
      });

      if (filesToSave.length > 0) {
        const media = new Media({ db });
        await Promise.all(filesToSave.map(file => media.insert(file)));
      }
      res.json(files);
    }
  );
}
