import multer from 'multer';
import mediaStorage from './Storage';
import mediaAdapter from './adapter';
import mediaHandler from './handler';

export default function addUploads(app, db, passport, uploadDir) {
  const adapter = mediaAdapter(uploadDir);
  const storage = mediaStorage({ uploadDir, db, adapter });

  const upload = multer({ storage });
  app.post(
    '/upload',
    passport.authenticate('jwt', {
      session: false,
    }),
    upload.array('uploads'),
    mediaHandler(db)
  );
}
