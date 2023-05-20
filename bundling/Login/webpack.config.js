const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './assets/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin(
    {
        template:'./login.html',
        inject:'body',
        filename: 'dist/index.html'
    }
  )],
  devServer: {
    static: {
      directory: path.join(__dirname, 'index.js'),
    },
    compress: true,
    port: 9000,
  },
};