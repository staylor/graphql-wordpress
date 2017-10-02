import WidgetType from 'type/Widget';

describe('Test Widget type', () => {
  test('Test name', () => {
    expect(WidgetType.name).toMatchSnapshot();
  });

  test('Test fields', () => {
    expect(Object.keys(WidgetType.getFields())).toMatchSnapshot();
  });
});
