import Media from 'server/graphql/models/Media';

const uploadFields = ['fieldname', 'originalname', 'encoding', 'mimetype'];

export default db => async (req, res) => {
  const files = req.files.map(file => {
    const fileCopy = Object.assign({}, file);
    uploadFields.forEach(field => {
      delete fileCopy[field];
    });
    return fileCopy;
  });

  const media = new Media({ db });
  const ids = await Promise.all(files.map(file => media.insert(file)));
  res.json(ids);
};
