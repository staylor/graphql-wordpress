import fields from 'field/author';
import getLoaders from 'data/loaders';

const args = {};
const context = {};
const info = {
  rootValue: {
    loaders: getLoaders(),
  },
};

describe('Test schema type field definition', () => {
  test('Test author field', () => {
    expect(fields.author.type.name).toMatchSnapshot();
  });

  test('Test resolve author field', async () => {
    const author = await fields.author.resolve({ author: 1 }, args, context, info);
    return expect(author).toMatchSnapshot();
  });

  test('Test resolve author field null', () => {
    expect(fields.author.resolve({ author: 0 }, args, context, info)).toBeNull();
  });
});
