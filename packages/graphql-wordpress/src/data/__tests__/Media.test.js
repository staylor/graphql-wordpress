import Media from 'data/Media';

const backupEnv = Object.assign({}, process.env);

afterAll(() => {
  process.env = backupEnv;
});

describe('Test Media data access', () => {
  test('Get endpoint', () => {
    expect(Media.getEndpoint()).toMatchSnapshot();
  });

  test('Get backup endpoint', () => {
    delete process.env.WP_MEDIA_ENDPOINT;
    expect(Media.getEndpoint()).toMatchSnapshot();
  });
});
