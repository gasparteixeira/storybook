const path = require("path");

const rootConfig = require("../webpack.config.js");

module.exports = async (baseConfig, env, defaultConfig) => {
  console.log(env);

  const merged = {
    // keep storybook's defaults
    ...defaultConfig,

    module: {
      rules: [...baseConfig.module.rules, ...rootConfig.module.rules]
    },

    plugins: [...baseConfig.plugins, ...rootConfig.plugins],

    resolve: { ...baseConfig.resolve, ...rootConfig.resolve }
  };

  return merged;
};
