const path = require('path');
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const tsLoader = require('ts-loader');

const SKETCH_ENTRYPOINT = process.env['SKETCH_ENTRYPOINT'];

if (!SKETCH_ENTRYPOINT) {
  throw new Error(`Environment variable SKETCH_ENTRYPOINT was not defined`);
}

console.log(path.resolve(path.dirname(SKETCH_ENTRYPOINT), 'dist'));

module.exports = {
  context: __dirname,
  entry: path.resolve(SKETCH_ENTRYPOINT),
  output: {
    path: path.resolve(path.dirname(SKETCH_ENTRYPOINT), 'dist'),
    filename: 'bundle.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader'
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new DefinePlugin({
      __CREATION_DATE__: Date.now().toString()
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(path.dirname(SKETCH_ENTRYPOINT), 'public/index.html'),
      inject: 'body',
      publicPath: './'
    })
  ]
};
