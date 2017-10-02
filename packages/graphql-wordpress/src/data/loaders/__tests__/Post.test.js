import getPostLoaders from 'data/loaders/Post';

const Post = getPostLoaders();

describe('Test Post loader', () => {
  test('Load a post', async () => {
    const post = await Post.load(13);
    expect(post.getID()).toMatchSnapshot();
    expect(post).toMatchSnapshot();
  });

  test('Load a post by slug', async () => {
    const post = await Post.loadBySlug('whatever');
    expect(post).toMatchSnapshot();
  });
});
