const { clientSrcPath } = require('kyt-utils/paths')();

module.exports = {
  serverURL: 'http://localhost:3006',
  modifyWebpackConfig: baseConfig => {
    const config = Object.assign({}, baseConfig);
    if (config.target === 'web') {
      config.entry.main = `${clientSrcPath}/index.js`;
      config.entry.admin = `${clientSrcPath}/admin.js`;
      config.entry.login = `${clientSrcPath}/login.js`;
    }
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    return config;
  },
};
