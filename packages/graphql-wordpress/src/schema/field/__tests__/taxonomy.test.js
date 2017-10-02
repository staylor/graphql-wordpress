import fields from 'field/taxonomy';
import getLoaders from 'data/loaders';

const args = {};
const context = {};
const info = {
  rootValue: {
    loaders: getLoaders(),
  },
};

describe('Test schema type field definition', () => {
  test('Test taxonomy field', () => {
    expect(fields.taxonomy.type.name).toMatchSnapshot();
  });

  test('Test taxonomy field resolver', async () => {
    const taxonomy = await fields.taxonomy.resolve({ taxonomy: 'tag' }, args, context, info);
    expect(taxonomy).toMatchSnapshot();
  });

  test('Test count field', () => {
    expect(fields.count.type).toMatchSnapshot();
  });
});
