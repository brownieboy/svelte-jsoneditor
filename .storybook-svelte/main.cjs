const path = require("path");

const config = {
  "stories": [
    "../src/stories/svelte/*.stories.mdx",
    "../src/stories/svelte/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/svelte-vite",
    "options": {}
  },
  async viteFinal(config, { configType }) {
    config.resolve.alias = {
      "$lib": [path.resolve(__dirname, "../src/lib")],
      "$lib/*": [path.resolve(__dirname, "../src/lib/*")],
      "svelte-jsoneditor": [path.resolve(__dirname, "../src/lib",)]
    };
    console.log("TCL ~ file: main.cjs ~ line 23 ~ viteFinal ~ config", config)

    return config;
  },
}
console.log("TCL ~ file: main.cjs ~ line 27 ~ config", config);


module.exports = config;