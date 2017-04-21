const path = require('path');

const PATHS = {
  src: path.join(__dirname, '/src'),
  dist: path.join(__dirname, '/dist/')
};

module.exports = {
  entry: path.join(PATHS.src, '/index.js'),
  output: {
    filename: 'bundle.js',
    path: PATHS.dist,
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{loader: 'babel-loader'}]
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: PATHS.dist,
    publicPath: '/'
  }
};