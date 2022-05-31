// 导入path模块
const path = require("path");

// 引入vue-loader 的插件
const { VueLoaderPlugin } = require("vue-loader");

// 引入html-webpack-plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");

// 引入clean-webpack-plugin-打包自动清除旧的dist
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",
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
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    static: path.resolve(__dirname, "dist"),
    compress: true, // 是否在服务端进行代码压缩
    open:true,//自动打开浏览器
    host:'local-ip',//本机ip
    hot:true,//热模块-默认选项
    // port: 3000, //端口号
    // headers:{
    //   'X-Access-Token':"abc123"
    // },
    // proxy: {//代理
    //   "/api": {
    //     target: "http://192.168.110.117:9000",
    //   },
    // },
    // https: true,//请求路径为https，如果需要配置证书 就需要 https:{}进行配置
    // http2: true,//请求路径为https, 自带证书 想要配置自己的证书 也可以
    // onListening:function(devServer){//回调
    //   console.log("运行地址：",devServer.server.address())
    // }
  },
  devtool: "cheap-module-eval-source-map",
};
