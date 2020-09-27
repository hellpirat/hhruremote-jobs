const path = require('path')
const CracoLessPlugin = require('craco-less')

module.exports = function ({ env }) {
  return {
    plugins: [
      {
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: {
              javascriptEnabled: true,
            },
          },
        },
      },
    ],
    webpack: {
      alias: {
        '@src': path.resolve(__dirname, './src'),
        '@api': path.resolve(__dirname, './src/api'),
        '@lib': path.resolve(__dirname, './src/lib'),
        '@modules': path.resolve(__dirname, './src/modules'),
        '@ui': path.resolve(__dirname, './src/ui/'),
      },
    },
  }
}
