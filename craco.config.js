const path = require('path')

module.exports = function ({ env }) {
  return {
    webpack: {
      alias: {
        '@src': path.resolve(__dirname, './src'),
        '@lib': path.resolve(__dirname, './src/lib'),
        '@modules': path.resolve(__dirname, './src/modules'),
        '@ui': path.resolve(__dirname, './src/ui/'),
      },
    },
  }
}
