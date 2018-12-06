module.exports = {
  test: /\.jsx$/,
  loader: 'eslint-loader',
  exclude: /node-modules/,
  enforce: 'pre',
  options: {
    emitWarning: true,
  },
};
