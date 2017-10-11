module.exports = {
  reactHotLoader: false,
  debug: false,

  modifyWebpackConfig(kytConfig, opts) {
    const config = Object.assign({}, kytConfig);
    if (opts.type === 'client' && !opts.reactHotLoader) {
      config.plugins.shift();
      config.entry.main = [config.entry.main[0], config.entry.main[2]];
    }
    return config;
  },
};
