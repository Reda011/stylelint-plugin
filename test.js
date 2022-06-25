const SelectorParser = require('postcss-selector-parser');

const transform = selectors => {
  selectors.walk(node => {
    console.log(node);
  })
}

SelectorParser(transform).processSync('#app');