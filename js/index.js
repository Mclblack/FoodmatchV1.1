var popCont = document.querySelector("#popUp");

function closeBtn(){
    popCont.style.display = "none";
}

function startBut(){
     document.querySelector("#get-started").style.fontSize = 30 + "pt";
     setTimeout(function(){
         window.location.href = "steps.html";
     },800);

 }

var welcomePop = document.querySelector("#popUp");


function BtnAbout(){
    window.location.href = "about.html";
}

window.addEventListener("load", function(){
    if(sessionStorage.getItem("EnterNum") == 1){
        popCont.style.display = "none";
    }
})