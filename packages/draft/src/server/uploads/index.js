import multer from 'multer';
import mediaStorage from './storage';

export default function addUploads(app, db, passport, publicDir) {
  const storage = mediaStorage({ publicDir });

  const upload = multer({ storage });
  app.post(
    '/upload',
    passport.authenticate('jwt', {
      session: false,
    }),
    upload.array('uploads'),
    (req, res) => {
      const files = req.files.map(f => ({
        original: f.original,
        destination: f.destination,
        filename: f.filename,
        size: f.size,
        encoding: f.encoding,
        mimetype: f.mimetype,
        crop: f.crops,
      }));
      res.json(files);
    }
  );
}
