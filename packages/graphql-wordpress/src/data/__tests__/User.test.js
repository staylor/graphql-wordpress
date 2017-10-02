import User from 'data/User';

const backupEnv = Object.assign({}, process.env);

afterAll(() => {
  process.env = backupEnv;
});

describe('Test User data access', () => {
  test('Get endpoint', () => {
    expect(User.getEndpoint()).toMatchSnapshot();
  });

  test('Get backup endpoint', () => {
    delete process.env.WP_USERS_ENDPOINT;
    expect(User.getEndpoint()).toMatchSnapshot();
  });
});
