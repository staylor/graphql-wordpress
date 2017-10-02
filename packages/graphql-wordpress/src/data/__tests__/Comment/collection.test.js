import Comment from 'data/Comment';

const backupEnv = Object.assign({}, process.env);

afterAll(() => {
  process.env = backupEnv;
});

jest.mock('../../utils', () =>
  jest.fn(() => ({
    data: {
      body: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
      headers: {
        'x-wp-total': 5,
      },
    },
  }))
);

describe('Test Comment data access', () => {
  test('Get endpoint', () => {
    expect(Comment.getEndpoint()).toMatchSnapshot();
  });

  test('Load Comment collection', async () => {
    const collection = await Comment.collection();
    expect(collection).toMatchSnapshot();
  });

  test('Get backup endpoint', () => {
    delete process.env.WP_COMMENTS_ENDPOINT;
    expect(Comment.getEndpoint()).toMatchSnapshot();
  });
});
