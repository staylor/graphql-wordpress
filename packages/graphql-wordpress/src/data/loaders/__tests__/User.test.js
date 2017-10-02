import getUserLoaders from 'data/loaders/User';

const User = getUserLoaders();

describe('Test User loader', () => {
  test('Load a user', async () => {
    const user = await User.load(1);
    expect(user.getID()).toMatchSnapshot();
    expect(user).toMatchSnapshot();
  });

  test('Load a user by slug', async () => {
    const user = await User.loadBySlug('admin');
    expect(user).toMatchSnapshot();
  });
});
