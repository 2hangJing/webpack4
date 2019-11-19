const express = require("express");
const path = require('path');
server = express();

server.use("/test", express.static( path.resolve(__dirname, "../dist") ));

server.listen(5000, ()=>{console.log("listen port: 5000");})



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