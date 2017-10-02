import Taxonomy from 'data/Taxonomy';

const backupEnv = Object.assign({}, process.env);

afterAll(() => {
  process.env = backupEnv;
});

describe('Test Taxonomy data access', () => {
  test('Get endpoint', () => {
    expect(Taxonomy.getEndpoint()).toMatchSnapshot();
  });

  test('Get backup endpoint', () => {
    delete process.env.WP_TAXONOMIES_ENDPOINT;
    expect(Taxonomy.getEndpoint()).toMatchSnapshot();
  });
});
