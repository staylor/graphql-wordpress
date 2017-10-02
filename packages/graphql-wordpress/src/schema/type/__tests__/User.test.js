import UserType from 'type/User';

// eslint-disable-next-line no-underscore-dangle
const fields = UserType._typeConfig.fields;

describe('Test User type', () => {
  test('Test name', () => {
    expect(UserType.name).toMatchSnapshot();
  });

  test('Test fields', () => {
    expect(Object.keys(UserType.getFields())).toMatchSnapshot();
  });

  test('Test resolve avatars', () => {
    const avatars = fields.avatarUrls.resolve({
      avatar_urls: {
        thumbnail: 'https://scott.com/avi.jpg',
      },
    });
    expect(avatars).toMatchSnapshot();
  });
});
