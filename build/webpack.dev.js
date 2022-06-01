const path = require("path");
const baseConfig = require("./webpack.base.js");
const webpackMerge = require("webpack-merge");

const devConfig = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    // 指定服务器根目录
    static: path.resolve(__dirname, "dist"),
    // 是否在服务端进行代码压缩
    compress: true,
    //自动打开浏览器
    open: true,
    //本机ip
    host: "local-ip",
    // 启用热模块替换-默认开启
    hot: true,
    //端口号
    // port: 3000,
    // headers:{
    //   'X-Access-Token':"abc123"
    // },
    //代理配置
    // proxy: {
    //   "/api": {
    //     target: "http://192.168.110.117:9000",
    //   },
    // },
    //请求路径为https，如果需要配置证书 就需要 https:{}进行配置
    // https: true,
    //请求路径为https, 自带证书 想要配置自己的证书 也可以
    // http2: true,
    //回调函数
    // onListening:function(devServer){
    //   console.log("运行地址：",devServer.server.address())
    // }
  },
};

module.exports = webpackMerge.merge(baseConfig, devConfig);
