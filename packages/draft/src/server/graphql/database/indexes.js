export default function createIndexes(db) {
  const post = db.collection('post');
  post.createIndex({ title: 'text', summary: 'text' }, { background: true });
  post.createIndex({ slug: 1 }, { background: true });
  db.collection('media').createIndex({ title: 'text', originalName: 'text' }, { background: true });
  db.collection('show').createIndex({ title: 'text' }, { background: true });
  db
    .collection('taxonomy')
    .createIndex({ name: 'text', description: 'text' }, { background: true });
  const term = db.collection('term');
  term.createIndex({ name: 'text', description: 'text' }, { background: true });
  term.createIndex({ slug: 1 }, { background: true });
  db.collection('user').createIndex({ name: 'text', bio: 'text' }, { background: true });
  const video = db.collection('video');
  video.createIndex({ title: 'text' }, { background: true });
  video.createIndex({ year: -1 }, { background: true });
}
