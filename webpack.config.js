const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'wincool.dist.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'bower_components')
      ],
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react', 'es2016', 'stage-0']
      }
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },
  devtool: 'source-map'
};
