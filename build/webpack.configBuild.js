//  CommonJS 语法
const path = require('path');
const merge = require('webpack-merge');
//  清空打包文件夹插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports= merge(require("./webpack.configBase.js"), {

    mode: "production",
    
    optimization: {
        minimize: true,

        //  tree shaking 只支持 ESmodule，bable中已配置使用 ES module导出
        //  usedExports 会标记无用代码，但是并不会删除，需要代码压缩工具删除无用代码，比如 webpack4 内置得 TerserPlugin 
        usedExports: true,

        //  开启 package.json 的 sideEffects 选项, 过滤不需要 tree shaking 文件
        // sideEffects: true
    },


    //  eval==>通过eval()执行，不能正确显示行数  | cheap==>只显示错误代码行位置 
    //  inline==>source map被记录到打包JS文件中 | module==>可以捕获loader的报错 
    //  可以自由的与 source-map 组合，比如如下常用，开发与构建的配置
    //  development: cheap-module-eval-source-map
    //  production:  cheap-module-source-map
    devtool: "cheap-module-source-map",
    plugins: [

        new CleanWebpackPlugin({
            //  删除日志写入控制台
            verbose: true
        })
    ]
})
