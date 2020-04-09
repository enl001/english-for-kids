const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry : {
    main : './index.js',
    analytics : './js/analytics.js',
  },
  output : {
    filename : '[name].[contenthash].js',
    path : path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js','.png','.svg'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@models': path.resolve(__dirname, 'src/models'),
    },
  },
  devServer : {
    port: 4200
  },

  plugins : [
    new HTMLWebpackPlugin({
      template: './index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  module : {
    rules : [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test : /\.(ttf|woff|woff2|eof)$/,
        use : ['file-loader']
      }
    ]
  } 
  
}