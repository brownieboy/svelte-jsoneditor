const path = require('path');
module.exports = {
  "stories": [
    "../src/stories/react/*.stories.mdx",
    "../src/stories/react/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  }
}