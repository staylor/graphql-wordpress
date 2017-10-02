import { commentStatus, pingStatus } from 'field/status';

describe('Test schema type field definition', () => {
  test('Test commentStatus field', () => {
    const { commentStatus: field } = commentStatus;
    expect(field.type.name).toMatchSnapshot();
  });

  test('Test pingStatus field', () => {
    const { pingStatus: field } = pingStatus;
    expect(field.type.name).toMatchSnapshot();
  });
});
