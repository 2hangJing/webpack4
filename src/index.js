
import addInfo from "./js/content";
import img from "./img/20191011 (33).png";
import css from "./css/index.scss";


document.querySelector(".add").addEventListener("click", function(){

    addInfo();

    let dom_img = document.createElement("img");
    dom_img.src = img;

    document.body.appendChild(dom_img);

}, {once: false, capture: false, passive: true});

async function getLoadsh(){

    const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');

    let s = _.join(['Hello', 'webpack'], ' ');

    return s;
}

//  异步引入
getLoadsh().then( str =>{

    const element = document.createElement('div');

    element.innerHTML = str;

    document.body.appendChild(element);
})


// HMR
// if (module.hot) {
//     module.hot.accept('./js/content.js', function() {
//         addInfo()
//         console.log('Accepting the updated printMe module!');
//     })
// }