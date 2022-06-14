
var menu1 = document.querySelector(".menu1");
    
menu1.addEventListener("click", function(){
    document.querySelector(".submenu").classList.toggle("menu-open");
    var img = document.querySelector(".ad").src;
    if (img.indexOf("/images/icon-arrow-down.svg")!=-1) {
        document.querySelector(".ad").src  = "/images/icon-arrow-up.svg";
    }
     else {
        document.querySelector(".ad").src = "/images/icon-arrow-down.svg";
   }
})

document.querySelector(".menu2").addEventListener("click", function(){
    document.querySelector(".submenu2").classList.toggle("menu-open");
    var img2 = document.querySelector(".ad2").src;
    if (img2.indexOf("/images/icon-arrow-down.svg")!=-1) {
        document.querySelector(".ad2").src  = "/images/icon-arrow-up.svg";
    }
     else {
        document.querySelector(".ad2").src = "/images/icon-arrow-down.svg";
   } ;
})

var menuBar = document.querySelector(".mB");

function showmenu() {
    document.querySelector(".nav_items").style.display = "block";
    document.querySelector(".mB").style.display = "none";
    document.querySelector(".cB").style.display = "block";

    document.querySelector("#mainHead").style.marginTop = "170px"; 
}
function hidemenu() {
    document.querySelector(".nav_items").style.display = "none";
    document.querySelector(".cB").style.display = "none";
    document.querySelector(".mB").style.display = "block";

    document.querySelector("#mainHead").style.marginTop = "0px"; 
}

