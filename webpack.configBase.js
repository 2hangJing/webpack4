//  CommonJS 语法
const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin");


module.exports= {
    mode: "none",
    entry: {
        add: ["./src/index.js"],
        reset: ["./src/reset.js"]
    },
    output: {
        //  输出文件名称，对应 entry 的 key
        filename: '[name].js',
        publicPath: "/",
        path: path.resolve(__dirname, "dist")
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
                    {loader: "style-loader",options:{ injectType: 'styleTag' }},
                    {loader: "css-loader"}
                ]
            },{ 
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: [{
                    loader: "babel-loader"
                }]
            }
        ]
    },
    plugins: [
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
        })
    ]
}