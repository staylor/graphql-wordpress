import NavMenuType from 'type/NavMenu';

describe('Test NavMenu type', () => {
  test('Test name', () => {
    expect(NavMenuType.name).toMatchSnapshot();
  });

  test('Test fields', () => {
    expect(Object.keys(NavMenuType.getFields())).toMatchSnapshot();
  });
});
