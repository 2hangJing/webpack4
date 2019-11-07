
import clear from "./js/clear";

document.querySelector(".clear").addEventListener("click", function(){

    clear();
}, {once: false, capture: false, passive: true})
