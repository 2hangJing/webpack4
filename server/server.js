const express = require("express");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const config = require("../webpack.config");
let compiler = webpack(config);

server = express();

let hotComplier = webpackHotMiddleware(compiler, { reload: true});

compiler.hooks.compilation.tap('html-webpack-plugin-after-emit', () => {  
    hotComplier.publish({ action: 'reload' });  
});

server.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    logLevel: "info",
    logTime: true
}));

server.use(hotComplier);


server.listen(3000, ()=>{console.log("listen port: 3000");})