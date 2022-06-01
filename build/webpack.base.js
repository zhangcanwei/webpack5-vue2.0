// 导入path模块
const path = require("path");

// 引入vue-loader 的插件
const { VueLoaderPlugin } = require("vue-loader");

// 引入html-webpack-plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");

// 引入clean-webpack-plugin-打包自动清除旧的dist
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // 打包入口
  entry: "./src/main.js",
  // 打包出口
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist"),
  },
  //打包规则
  module: {
    rules: [
      {
        test: /.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.s[ca]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        type: "asset/resource",
      },
    ],
  },
  // 插件
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    alias: {
      // vue: "vue/dist/vue.js",
      "@": path.resolve(__dirname, "../src"),
      styles: path.resolve(__dirname, "../src/assets/styles"),
      images: path.resolve(__dirname, "../src/assets/images"),
    },
  },
};
