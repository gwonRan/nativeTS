module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
  };
};
