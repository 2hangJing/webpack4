export function fun(){
    
    let dom_name = document.querySelector(".name");
    let dom_age = document.querySelector(".age");
    let dom_sex = document.querySelector(".sex");

    dom_name.innerText = "清空";
    dom_age.innerText = "清空";
    dom_sex.innerText = "清空";
}

export function funB(){
    
    let dom_name = document.querySelector(".name");
    let dom_age = document.querySelector(".age");
    let dom_sex = document.querySelector(".sex");

    dom_name.innerText = "特殊标记";
    dom_age.innerText = "清空";
    dom_sex.innerText = "清空";
};
