var webpack = require('webpack');

module.exports = {
  entry: './app',
  output: {
    path: __dirname + '/public',
    publicPath: 'http://localhost:8084/public/',
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: ['es2015'] }
	    }, 
	    {
	      test: /\.tag$/,
	      loader: 'tag'
	    }
	  ]
  }
};
