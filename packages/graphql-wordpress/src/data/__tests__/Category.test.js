import Category from 'data/Category';

const backupEnv = Object.assign({}, process.env);

afterAll(() => {
  process.env = backupEnv;
});

describe('Test Category data access', () => {
  test('Get endpoint', () => {
    expect(Category.getEndpoint()).toMatchSnapshot();
  });

  test('Get backup endpoint', () => {
    delete process.env.WP_CATEGORIES_ENDPOINT;
    expect(Category.getEndpoint()).toMatchSnapshot();
  });
});
