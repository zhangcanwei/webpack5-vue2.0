const baseConfig = require("./webpack.base.js");
const webpackMerge = require("webpack-merge");

const prodConfig = {
  mode: "production",
};
module.exports = webpackMerge.merge(baseConfig, prodConfig);
