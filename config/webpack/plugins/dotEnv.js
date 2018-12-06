const DotenvPlugin = require('webpack-dotenv-plugin');

module.exports = new DotenvPlugin({
  sample: `./.env`,
  path: `./.env`
});
