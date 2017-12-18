module.exports = {
  serverURL: 'http://localhost:3006',
  modifyWebpackConfig: baseConfig => {
    const config = Object.assign({}, baseConfig);
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    return config;
  },
};
