/* eslint-disable @typescript-eslint/no-var-requires */
/*
Purpose of this file for Jetbrains IDE only
*/
const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@ui': path.resolve(__dirname, './src/ui/'),
    },
  },
}
