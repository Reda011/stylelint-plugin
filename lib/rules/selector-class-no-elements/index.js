/*
 * @Desc: class选择器不能以"elements-" 开头
 * @Author: 前端卡卡西
 * @Date: 2022-06-25 17:10:14
*/

const { nameSpace, newMessage, validateOptions, report } = require('../../utils');
const parseSelector = require("../../utils/parseSelector");

const ruleName = nameSpace('selector-class-no-elements');
const messages = newMessage(ruleName, {
  expected: (selector => `Expected CLASS selector ".${selector}" not to contain "elements-"`)
})

const rule = primary => {

  return (postcssRoot, postcssResult) => {
    const validOptions = validateOptions(postcssRoot, postcssResult, {
      actual: primary
    })

    if (!validOptions) return;

    // walkRules 为遍历所有 Rule类型节点
    postcssRoot.walkRules(ruleNode => {

      const selector = ruleNode.selector;

      parseSelector(selector, postcssResult, ruleNode, (fullSelector) => {
        // walk为遍历，同forEach
        fullSelector.walk(selectorNode => {
          // 筛选class选择器
          if (selectorNode.type !== 'class') return;

          const {value, sourceIndex} = selectorNode;

          // 筛选以 "elements-" 开头的选择器
          if (value.indexOf('elements') !== 0) return;

          // 标记提示结束为止
          const endIndex = sourceIndex + value.length;

          // 提示用户信息
          report({
            result: postcssResult,
            ruleName,
            message: messages.expected(value),
            node: ruleNode,
            index: sourceIndex,
            endIndex
          })
        })
      })
    })
  }
}

rule.ruleName = ruleName;
rule.messages = messages;

module.exports = rule;
