import NavMenuItemType from 'type/NavMenuItem';

// eslint-disable-next-line no-underscore-dangle
const fields = NavMenuItemType._typeConfig.fields;

describe('Test NavMenuItem type', () => {
  test('Test name', () => {
    expect(NavMenuItemType.name).toMatchSnapshot();
  });

  test('Test fields', () => {
    expect(Object.keys(NavMenuItemType.getFields())).toMatchSnapshot();
  });

  test('Test resolve id', () => {
    const id = fields.id.resolve({ id: 13 });
    expect(id).toMatchSnapshot();
  });

  test('Test resolve parent', () => {
    const parent = fields.parent.resolve({ parent: 13 });
    expect(parent).toMatchSnapshot();
  });

  test('Test resolve parent null', () => {
    const parent = fields.parent.resolve({ parent: 0 });
    expect(parent).toMatchSnapshot();
  });

  test('Test resolve typeName', () => {
    const typeName = fields.typeName.resolve({ type_name: 'category' });
    expect(typeName).toMatchSnapshot();
  });

  test('Test resolve typeSlug', () => {
    const typeSlug = fields.typeSlug.resolve({ type_slug: 'music' });
    expect(typeSlug).toMatchSnapshot();
  });

  test('Test resolve dataSlug', () => {
    const dataSlug = fields.dataSlug.resolve({ object_slug: 'watch-this' });
    expect(dataSlug).toMatchSnapshot();
  });

  test('Test resolve dataID', () => {
    const dataID = fields.dataID.resolve({ object_id: 4 });
    expect(dataID).toMatchSnapshot();
  });

  test('Test resolve dataID null', () => {
    const dataID = fields.dataID.resolve({ object_id: 0 });
    expect(dataID).toMatchSnapshot();
  });
});
