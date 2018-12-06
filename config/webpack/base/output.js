const config = require('./config');

require('dotenv').config({path: `./.env`});

const settings = {
  production: {
    path: config.outputDir,
    chunkFilename: '[name].[chunkhash:8].js',
    filename: '[name].[chunkhash:8].bundle.js',
  },
  development: {
    path: config.outputDir,
    chunkFilename: '[name].js',
    filename: '[name].bundle.js',
  }
}

module.exports = settings[process.env.NODE_ENV]
