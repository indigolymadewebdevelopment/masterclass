let btns = document.querySelector(".btns")
let classcard = document.querySelectorAll(".classcard")

let cbox = document.querySelectorAll(".cbox")
let bcb = document.querySelector(".bcb")
let nav = document.getElementsByTagName("nav")[0]
let nava = document.querySelectorAll(".nava")
let heading = document.querySelectorAll(".heading")
let heading2 = document.querySelectorAll(".heading2")


function dropdown(num){
switch (num){

    case 1:classcard[0].classList.toggle("addclasscard");
    cbox[0].classList.toggle("addcbox");
    heading[0].classList.toggle("addheading");
    heading2[0].classList.toggle("addheading2");

   

    break;
    case 2:classcard[1].classList.toggle("addclasscard");
    cbox[1].classList.toggle("addcbox");
    heading[1].classList.toggle("addheading");
    heading2[1].classList.toggle("addheading2");


    break;

    case 3:classcard[2].classList.toggle("addclasscard");
    cbox[2].classList.toggle("addcbox");
    heading[2].classList.toggle("addheading");
    heading2[2].classList.toggle("addheading2");

    break;


}
    

}

function hamburger(){
    nav.classList.toggle("addnav")
    nava.forEach(element=>{
        element.classList.toggle("adda")
    })
}