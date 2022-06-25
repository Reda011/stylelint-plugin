const stylelint = require("stylelint")

function nameSpace(ruleName) {
  // 前缀视个人情况而定
  return `stylelint-plugin/${ruleName}`;
}

function newMessage(ruleName, options) {
  return stylelint.utils.ruleMessages(ruleName, options);
}

function validateOptions(result, ruleName, options) {
  return stylelint.utils.validateOptions(result, ruleName, options);
}

function report(problem) {
  console.log({problem});
  return stylelint.utils.report(problem);
}

module.exports = {
  nameSpace,
  newMessage,
  validateOptions,
  report
}
