import Page from 'data/Page';

const backupEnv = Object.assign({}, process.env);

afterAll(() => {
  process.env = backupEnv;
});

describe('Test Page data access', () => {
  test('Get endpoint', () => {
    expect(Page.getEndpoint()).toMatchSnapshot();
  });

  test('Get backup endpoint', () => {
    delete process.env.WP_PAGES_ENDPOINT;
    expect(Page.getEndpoint()).toMatchSnapshot();
  });
});
