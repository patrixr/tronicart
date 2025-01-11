const path = require('path');

module.exports = {
  entry: {
    main: './dist/index.js'
  },
  output: {
    library: 'cc',
    libraryTarget: 'umd',
    filename: 'cc.umd.js',
    path: path.resolve(__dirname, 'dist')
  }
};
