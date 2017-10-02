import PING_STATUS from 'enum/PingStatus';

describe('Test enum values', () => {
  test('PING_STATUS values', () => {
    expect(PING_STATUS.getValues()).toMatchSnapshot();
  });
});
