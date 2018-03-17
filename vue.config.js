var path = require('path');

var output = {
  path: path.resolve(__dirname, './dist'),
};

if (process.env.NODE_ENV === 'production') {
  output.publicPath = '/5for15/';
}

module.exports = {
  configureWebpack: {
    output: output,
  },
};
