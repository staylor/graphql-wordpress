import Sidebar from 'data/Sidebar';

const backupEnv = Object.assign({}, process.env);

afterAll(() => {
  process.env = backupEnv;
});

describe('Test Sidebar data access', () => {
  test('Get endpoint', () => {
    expect(Sidebar.getEndpoint()).toMatchSnapshot();
  });

  test('Get backup endpoint', () => {
    delete process.env.WP_SIDEBARS_ENDPOINT;
    expect(Sidebar.getEndpoint()).toMatchSnapshot();
  });
});
