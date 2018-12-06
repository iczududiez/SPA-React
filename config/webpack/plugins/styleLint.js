const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = new StyleLintPlugin({
  emitErrors: false,
  quiet: false,
});
