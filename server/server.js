const express = require("express");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const config = require("../webpack.config");
const path = require('path');

server = express();

//  webpackHotMiddleware 实现浏览器刷新
for(let i in config.entry){
    config.entry[i].push(path.resolve(__dirname, "./server-hot-reload.js"))
}


let compiler = webpack(config);

let hotComplier = webpackHotMiddleware(compiler, { reload: true});

// webpackHotMiddleware 浏览器刷新配置 
compiler.hooks.compilation.tap('html-webpack-plugin-after-emit', () => {  
    hotComplier.publish({ action: 'reload' });  
});

server.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    logLevel: "error",
    logTime: true
}));

// webpackHotMiddleware 浏览器刷新配置
server.use(hotComplier);

server.listen(3000, ()=>{console.log("listen port: 3000");})



// eventSource 浏览器刷新
// let isReload = false;
// compiler.hooks.emit.tap("Reload", (compilation) => {

//     isReload = true;
// })

// eventSource 浏览器刷新
// server.get('/webpackReload', (req, res)=>{

//     let timerId;

//     res.set({
//         'Connection': 'keep-alive',
//         'Content-Type': 'text/event-stream',
//         'Cache-Control': 'no-cache'
//     })

//     res.write('event: open\n');
//     res.write('data: reload connact!');
//     res.flushHeaders();

//     timerId = setInterval(()=>{

//         res.write('event: message\n');
//         res.write(`data: ${isReload}\n\n`);
//         res.flushHeaders();
//         isReload && (isReload = false)
//     }, 1000)

//     req.connection.on('close', function () {

//         clearInterval(timerId);
//     });
// });