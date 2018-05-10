var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: "./client/index.js",
  output: {
    path: __dirname + "/htdocs/client",
    filename: "jean9.js"
  },
  resolve: {
    modulesDirectories: ['node_modules', 'client']
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.css?$/,
        loader: 'css-loader'
      },
      {
        test: /\.styl?$/,
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  },
  devtool: "source-map",
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['htdocs'] }
    })
  ]
}