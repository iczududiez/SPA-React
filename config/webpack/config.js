const merge = require('webpack-merge');

const CommonConfig = require('./environments/common');
const EnvironmentConfig = require(`./environments/${process.env.NODE_ENV }`);

module.exports = merge(CommonConfig, EnvironmentConfig);