import "../css/cssLinkTag.css"

export default function(){
    
    let dom_name = document.querySelector(".name");
    let dom_age = document.querySelector(".age");
    let dom_sex = document.querySelector(".sex");

    dom_name.innerText = "姓名111";
    dom_age.innerText = "15";
    dom_sex.innerText = "男";
}