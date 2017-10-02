import Post from 'data/Post';

const backupEnv = Object.assign({}, process.env);

afterAll(() => {
  process.env = backupEnv;
});

jest.mock('../utils', () =>
  jest.fn(() => ({
    data: {
      body: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
      headers: {
        'x-wp-total': 5,
      },
    },
  }))
);

describe('Test Post data access', () => {
  test('Get endpoint', () => {
    expect(Post.getEndpoint()).toMatchSnapshot();
  });

  test('Get backup endpoint', () => {
    delete process.env.WP_POSTS_ENDPOINT;
    expect(Post.getEndpoint()).toMatchSnapshot();
  });

  test('Load Post collection', async () => {
    const collection = await Post.collection();
    expect(collection).toMatchSnapshot();
  });
});
