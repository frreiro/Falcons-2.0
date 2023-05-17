module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          '@components': './src/app/components',
          '@globalStyle': './src/styles',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
