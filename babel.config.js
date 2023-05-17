module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          '@components': './src/app/components',
          '@layouts': './src/app/layouts',
          '@pages': './src/app/pages',
          '@globalStyle': './src/styles',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
