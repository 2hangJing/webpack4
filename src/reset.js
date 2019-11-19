
//  同步引入，测试代码分割
// import _ from "lodash";
// console.log("同步代码测试", _.join(['Hello', 'webpack'], ' '));


import { fun } from "./js/reset.js";

var a = new Promise((resolve, reject)=>{

    console.log(1111);
});

console.log([1, 2, 3].includes(1))


document.querySelector(".clear").addEventListener("click", function(){

    fun();

}, {once: false, capture: false, passive: true})

