//  CommonJS 语法
const path = require('path');

module.exports= {
    mode: "none",
    entry: "./src/index.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use:[{
                    loader: "file-loader",
                    options: {
                        outputPath: "img",
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
                    {loader: "style-loader",options:{ injectType: 'styleTag' }},
                    {loader: "css-loader"},
                    {loader: "sass-loader"},
                    {loader: "postcss-loader"},
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
                            publicPath: path.resolve(__dirname, "dist", "css"),
                        }
                    }
                ]
            }
        ]
    }
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