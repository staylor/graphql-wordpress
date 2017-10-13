module.exports = {
  serverURL: 'http://localhost:3004',
  modifyWebpackConfig(kytConfig) {
    const config = Object.assign({}, kytConfig);
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    return config;
  },
};
