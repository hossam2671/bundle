const path = require('path');

module.exports = {
  mode: 'development',
  entry: './assets/js/signup.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'sign.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'signup.js'),
    },
    compress: true,
    port: 9000,
  },
};