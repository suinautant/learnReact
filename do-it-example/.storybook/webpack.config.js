const path = require('path');

module.exportfs = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ['sass-loader'],
        include: path.resolve(__dirname, '../'),
      },
    ],
  },
};
