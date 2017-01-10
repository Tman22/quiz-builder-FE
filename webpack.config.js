const path = require('path');

module.exports = {
  entry: {
    main: "./lib/index.js",
    test: "mocha!./test/index.js"
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$/, loader: "style!css!sass" },
      { test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
         presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
   extensions: ['', '.js', '.jsx', '.json', '.scss', '.css']
  }
}
