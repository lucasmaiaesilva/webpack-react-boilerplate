var HtmlWebPackPlugin = require('html-webpack-plugin')
var DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.js$/,
        loaders: ['react-hot-loader', 'babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)/,
        loaders: ['url', 'img']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/template.html'
    }),
    new DashboardPlugin()
  ]
}
