import multer from 'multer';
import mediaStorage from './storage';

const mediaFields = ['originalName', 'destination', 'fileName', 'mimeType', 'fileSize'];

export default function addUploads(app, db, passport, uploadDir) {
  const storage = mediaStorage({ uploadDir });

  const upload = multer({ storage });
  app.post(
    '/upload',
    passport.authenticate('jwt', {
      session: false,
    }),
    upload.array('uploads'),
    (req, res) => {
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
        } else if (file.mimetype.indexOf('video/') === 0) {
          typeProps.type = 'video';
          typeProps.width = file.width;
          typeProps.height = file.height;
        }
        return Object.assign({}, baseProps, typeProps);
      });
      res.json(files);
    }
  );
}
