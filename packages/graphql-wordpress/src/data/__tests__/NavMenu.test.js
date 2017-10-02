import NavMenu from 'data/NavMenu';

const backupEnv = Object.assign({}, process.env);

afterAll(() => {
  process.env = backupEnv;
});

describe('Test NavMenu data access', () => {
  test('Get endpoint', () => {
    expect(NavMenu.getEndpoint()).toMatchSnapshot();
  });

  test('Get backup endpoint', () => {
    delete process.env.WP_NAV_MENUS_ENDPOINT;
    expect(NavMenu.getEndpoint()).toMatchSnapshot();
  });
});
