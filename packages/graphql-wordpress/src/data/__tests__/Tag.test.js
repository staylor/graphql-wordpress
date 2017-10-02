import Tag from 'data/Tag';

const backupEnv = Object.assign({}, process.env);

afterAll(() => {
  process.env = backupEnv;
});

describe('Test Tag data access', () => {
  test('Get endpoint', () => {
    expect(Tag.getEndpoint()).toMatchSnapshot();
  });

  test('Get backup endpoint', () => {
    delete process.env.WP_TAGS_ENDPOINT;
    expect(Tag.getEndpoint()).toMatchSnapshot();
  });
});
