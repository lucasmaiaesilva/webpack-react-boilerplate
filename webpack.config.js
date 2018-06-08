var HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'stylus-loader' },
        ]
      },
      {
        test: /\.js$/,
        use: [
          { loader: 'react-hot-loader'},
          { loader: 'babel-loader'},
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)/,
        use: [
          { loader: 'url' },
          { loader: 'img' }
        ]
      }
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/template.html'
    })
  ]
}
