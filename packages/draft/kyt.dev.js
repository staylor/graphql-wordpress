const path = require('path');

module.exports = {
  reactHotLoader: true,
  debug: false,
  modifyWebpackConfig: baseConfig => {
    const config = Object.assign({}, baseConfig);
    if (config.target === 'web') {
      const adminConfig = [...config.entry.main];
      adminConfig[adminConfig.length - 1] = path.resolve('./src/admin/index.js');
      config.entry.admin = adminConfig;
    }
    return config;
  },
};
