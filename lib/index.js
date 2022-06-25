const { createPlugin } = require("stylelint");
const { nameSpace } = require("./utils");

const rules = require("./rules");

// 通过createPlugin 创建 plugin
const rulesPlugins = Object.keys(rules).map(ruleName => {
  return createPlugin(nameSpace(ruleName), rules[ruleName])
})

module.exports = rulesPlugins;