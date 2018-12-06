const config = require('./config');

module.exports = {
  modules: [
    `${config.rootDir}/dist`,
    'node_modules',
  ],
  extensions: ['.js', '.jsx'],
};
