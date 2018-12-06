const BaseEntry = require('../base/entry');
const BaseOutput = require('../base/output');
const BaseResolve = require('../base/resolve');

const RuleCSS = require('../rules/css');
const RuleSCSS = require('../rules/scss');
const RuleJS = require('../rules/js');
const RuleJSX = require('../rules/jsx');
const RuleURLLoader = require('../rules/urlLoader');

const PluginClean = require('../plugins/clean');
const PluginHTML = require('../plugins/html');
const PluginChunk = require('../plugins/commonsChunk');
const PluginStyleLint = require('../plugins/styleLint');

module.exports = {
  entry: BaseEntry,
  output: BaseOutput,
  resolve: BaseResolve,
  module: {
    rules: [
      RuleCSS,
      RuleSCSS,
      RuleJS,
      RuleJSX,
      RuleURLLoader,
    ],
  },
  plugins: [
    PluginClean,
    PluginHTML,
    PluginChunk,
    PluginStyleLint,
  ],
};
