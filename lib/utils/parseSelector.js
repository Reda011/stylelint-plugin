const SelectorParser = require("postcss-selector-parser");

module.exports = function parseSelector(selector, result, node, callback) {
  try {
    return SelectorParser(callback).processSync(selector);
  } catch(err) {
    result.warn(`Cannot parse selector (${err})`, { node, stylelintType: 'parseError' });

    return undefined;
  }
}