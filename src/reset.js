
import { fun } from "./js/reset.js";

var a = new Promise((resolve, reject)=>{

    console.log(1111);
});

console.log([1, 2, 3].includes(1))


document.querySelector(".clear").addEventListener("click", function(){

    fun();

}, {once: false, capture: false, passive: true})

