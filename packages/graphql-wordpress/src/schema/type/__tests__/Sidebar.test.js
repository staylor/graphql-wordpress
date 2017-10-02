import SidebarType from 'type/Sidebar';

// eslint-disable-next-line no-underscore-dangle
const fields = SidebarType._typeConfig.fields;

describe('Test Sidebar type', () => {
  test('Test name', () => {
    expect(SidebarType.name).toMatchSnapshot();
  });

  test('Test fields', () => {
    expect(Object.keys(SidebarType.getFields())).toMatchSnapshot();
  });

  test('Test resolve name', () => {
    const classname = fields.classname.resolve({ class: 'cool-widget' });
    expect(classname).toMatchSnapshot();
  });
});
