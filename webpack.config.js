const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
  module : {
    rules : [
      {
        test : /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader : 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000' }
    ]
    
  },


  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins : [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};