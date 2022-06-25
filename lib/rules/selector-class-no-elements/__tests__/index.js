const { messages, ruleName} = require("..");

testRule({
  ruleName,
  config: true,

  // 可通过用例
  accept: [
    { code: '.app {}' }
  ],
  // 不可通过用例
  reject: [
    { code: '.elements-app {}',
      message: messages.expected('elements-app'),
      line: 1, // 提示开始行
      column: 1, // 提示开始位置
      endLine: 1, // 提示结束行
      endColumn: 13 // 提示结束位置
    }
  ]
})