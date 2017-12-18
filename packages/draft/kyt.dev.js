const path = require('path');

module.exports = {
  reactHotLoader: true,
  debug: false,
  modifyWebpackConfig: baseConfig => {
    const config = Object.assign({}, baseConfig);
    if (config.target === 'web') {
      const adminConfig = [...config.entry.main];
      adminConfig[adminConfig.length - 1] = path.resolve('./src/client/admin.js');
      config.entry.admin = adminConfig;
      const loginConfig = [...config.entry.main];
      loginConfig[loginConfig.length - 1] = path.resolve('./src/client/login.js');
      config.entry.login = loginConfig;
    }
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    return config;
  },
};
