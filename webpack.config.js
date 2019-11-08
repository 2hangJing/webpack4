//  CommonJS 语法
const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin");
//  清空打包文件夹插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require('webpack');

module.exports= {
    mode: "none",
    entry: {
        add: ["./src/index.js", "webpack-hot-middleware/client"],
        clear: ["./src/reset.js", "webpack-hot-middleware/client"]
    },
    output: {
        //  输出文件名称，对应 entry 的 key
        filename: '[name].js',
        publicPath: "/",
        path: path.resolve(__dirname, "dist")
    },
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
        // hotOnly: true
    },

    module: {
        rules: [
            {
                test: /\.(svg|woff|woff2|eot|ttf|otf)$/,
                use:[{
                    loader: "file-loader",
                    options: {
                        outputPath: "font",
                        name: "[name].[ext]"
                    }
                }]
            },{
                test: /\.(png|jpg|gif|)$/,
                use:[{
                    loader: "url-loader",
                    options: {
                        //  图片输出到文件夹的路径，默认在 output.path 为根目录
                        outputPath: "img",

                        //  图片输出路径字符串，默认是 outputPath 的路径加图片名称
                        publicPath: path.resolve(__dirname, "dist", "img"),

                        name: "[name].[ext]",
                        limit: 50*1024
                    }
                }]
            },{
                test: /\.scss$/,
                use:[
                    {loader: "style-loader", options:{ injectType: 'styleTag' }},
                    {
                        loader: "css-loader", 
                        //  代表scss 解析到内置 @import 的其他scss时会再从头走一遍 loader
                        options:{ importLoaders: 2 } 
                    },
                    //  postcss 需要在 cssloader 之前嗲调用
                    {loader: "postcss-loader"},
                    {loader: "sass-loader"},
                    
                ]
            },{
                test: /\.css$/,
                use:[
                    {loader: "style-loader",options:{ injectType: 'linkTag' }},
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "css",
                            name: "[name].[ext]",
                            // publicPath: path.resolve(__dirname, "dist", "css"),
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            verbose: true
        }),
        //  具体参数链接： https://juejin.im/post/5ce96ad7e51d455a2f2201e1
        new htmlWebpackPlugin({
            title: "webpack4",
            template: "./src/index.html",
            inject: "body",
            favicon: "./src/img/favicon.ico",
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
                'theme-color': "#2ebaae"
            },
            minify: true
        }),
        // HMR
        new webpack.HotModuleReplacementPlugin()
    ]
}

//  ES6 模块语法
// import path from "path";

// export default {
//     entry: "./js/index.js",
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, "dist")
//     }
// }