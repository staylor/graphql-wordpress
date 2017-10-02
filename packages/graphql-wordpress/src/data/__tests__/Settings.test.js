import Settings from 'data/Settings';

const backupEnv = Object.assign({}, process.env);

afterAll(() => {
  process.env = backupEnv;
});

describe('Test Settings data access', () => {
  test('Get endpoint', () => {
    expect(Settings.getEndpoint()).toMatchSnapshot();
  });

  test('Get backup endpoint', () => {
    delete process.env.WP_SETTINGS_ENDPOINT;
    expect(Settings.getEndpoint()).toMatchSnapshot();
  });
});
