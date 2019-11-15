//  CommonJS 语法
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackReload = require("../server/server-reload-websocket");

module.exports= merge( require('./webpack.configBase.js'),{
    mode: "none",
    //  eval==>通过eval()执行，不能正确显示行数  | cheap==>只显示错误代码行位置 
    //  inline==>source map被记录到打包JS文件中 | module==>可以捕获loader的报错 
    //  可以自由的与 source-map 组合，比如如下常用，开发与构建的配置
    //  development: cheap-module-eval-source-map
    //  production:  cheap-module-source-map
    devtool: "cheap-module-eval-source-map",

    // watch 原理：https://segmentfault.com/a/1190000008111793
    watch: false,
    watchOptions: {
        ignored: /node_modules/
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        //  控制台输出日志控制
        clientLogLevel: "none",
        port: 8000,
        open: false,
        publicPath: "/",
        host: '0.0.0.0',

        //  开启 HMR
        //  HRM 链接 https://juejin.im/post/5c86ec276fb9a04a10301f5b#heading-5
        // hot: true,

        //  hotOnly:true 会取消代码变更后浏览器自动刷新
        // hotOnly: true
    },
    plugins: [
        // eventSource 浏览器刷新 自定义插件
        // new webpackReload(),

        // HMR
        // new webpack.HotModuleReplacementPlugin()
    ]
})