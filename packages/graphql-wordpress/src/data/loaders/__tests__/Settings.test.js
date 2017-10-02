import getSettingsLoaders from 'data/loaders/Settings';

const Settings = getSettingsLoaders();

describe('Test Settings loader', () => {
  test('Load settings', async () => {
    const settings = await Settings.load();
    expect(settings.getID()).toMatchSnapshot();
    expect(settings).toMatchSnapshot();
  });
});
