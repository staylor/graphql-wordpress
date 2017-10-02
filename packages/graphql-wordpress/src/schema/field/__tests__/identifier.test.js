import { toGlobalId } from 'graphql-relay';
import { globalIdField, name, id, slug, guid, link } from 'field/identifier';

function MockData(mockID) {
  this.id = mockID;
  this.getID = () => toGlobalId('MockData', this.id);
}

describe('Test schema type field definition', () => {
  test('Test globalIdField field', () => {
    const field = globalIdField();
    expect(field.type).toMatchSnapshot();
    const data = new MockData(867539);
    expect(field.resolve(data)).toMatchSnapshot();
  });

  test('Test name field', () => {
    const { name: field } = name;
    expect(field.type).toMatchSnapshot();
  });

  test('Test id field', () => {
    const { id: field } = id;
    expect(field.type).toMatchSnapshot();
  });

  test('Test slug field', () => {
    const { slug: field } = slug;
    expect(field.type).toMatchSnapshot();
  });

  test('Test guid field', () => {
    const { guid: field } = guid;
    expect(field.type).toMatchSnapshot();
  });

  test('Test link field', () => {
    const { link: field } = link;
    expect(field.type).toMatchSnapshot();
  });
});
