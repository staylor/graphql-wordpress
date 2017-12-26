import { ObjectId } from 'mongodb';
import multer from 'multer';
import Media from 'server/graphql/models/Media';
import Video from 'server/graphql/models/Video';
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
          typeProps.title = '';
          typeProps.width = file.width;
          typeProps.height = file.height;
          typeProps.crops = file.crops;
          typeProps.caption = '';
          typeProps.altText = '';
          const fileProps = Object.assign({}, baseProps, typeProps);
          filesToSave.push(fileProps);
          return fileProps;
        } else if (file.mimetype.indexOf('audio/') === 0) {
          typeProps.type = 'audio';
          typeProps.description = '';
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
          typeProps.description = '';
          typeProps.width = file.width;
          typeProps.height = file.height;
          typeProps.duration = file.duration;
          const fileProps = Object.assign({}, baseProps, typeProps);
          filesToSave.push(fileProps);
          return fileProps;
        }
        return Object.assign({}, baseProps, typeProps);
      });

      if (filesToSave.length > 0) {
        const media = new Media({ db });
        const ids = await Promise.all(filesToSave.map(file => media.insert(file)));
        res.json(ids);
      } else {
        res.json(files);
      }
    }
  );
  app.use(
    '/preview/media/:id',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
      const media = new Media({ db });
      const model = await media.findOneById(ObjectId(req.params.id));
      res.json(model);
    }
  );
  app.use(
    '/preview/video/:id',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
      const media = new Video({ db });
      const model = await media.findOneById(ObjectId(req.params.id));
      res.json(model);
    }
  );
}
