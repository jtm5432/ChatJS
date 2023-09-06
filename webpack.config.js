const path = require('path');

module.exports = {
  entry: './src/app.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.resolve(__dirname),
    open: true,
  },
  
  resolve: {
    extensions: ['.ts', '.js']  // 웹팩이 해당 확장자를 해석할 수 있도록 합니다.
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
}

};
