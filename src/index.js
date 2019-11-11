import addInfo from "./js/content";
import img from "./img/20191011 (33).png";
import css from "./css/index.scss";


document.querySelector(".add").addEventListener("click", function(){

    addInfo();

    let dom_img = document.createElement("img");
    dom_img.src = img;

    document.body.appendChild(dom_img);

}, {once: false, capture: false, passive: true})

// HMR
// if (module.hot) {
//     module.hot.accept('./js/content.js', function() {
//         addInfo()
//         console.log('Accepting the updated printMe module!');
//     })
// }