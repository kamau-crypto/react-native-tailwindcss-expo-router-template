module.exports = function (api) {
  api.cache(true)
  return {
    presets: [['babel-preset-expo', { jsxImportSource: 'nativewind' }], 'nativewind/babel'],
    plugins: [
      'react-native-paper/babel',
      'react-native-reanimated/plugin', // THIS HAS TO BE LISTED LAST else a :visitor undefined error pops up.
    ],
  }
}
