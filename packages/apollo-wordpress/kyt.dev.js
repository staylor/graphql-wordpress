module.exports = {
  reactHotLoader: false,
  debug: false,

  modifyWebpackConfig(kytConfig, opts) {
    const config = Object.assign({}, kytConfig);
    if (opts.type === 'client' && !opts.reactHotLoader) {
      config.plugins.shift();
      config.entry.main = [config.entry.main[0]];
    }

    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    return config;
  },
};
