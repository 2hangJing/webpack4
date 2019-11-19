
import addInfo from "./js/content";
import loadsh from './js/loadsh';
import img from "./img/20191011 (33).png";
import css from "./css/index.scss";


document.querySelector(".add").addEventListener("click", function(){

    addInfo();

    let dom_img = document.createElement("img");
    dom_img.src = img;

    document.body.appendChild(dom_img);

    const element = document.createElement('div');

    //  异步引入
    loadsh().then(str=>{

        element.innerHTML = str;

        document.body.appendChild(element);
    });

}, {once: false, capture: false, passive: true});


// HMR
// if (module.hot) {
//     module.hot.accept('./js/content.js', function() {
//         addInfo()
//         console.log('Accepting the updated printMe module!');
//     })
// }