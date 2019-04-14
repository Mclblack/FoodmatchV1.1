 function startBut(){
     document.querySelector("#get-started").style.fontSize = 30 + "pt";
     setTimeout(function(){
         window.location.href = "steps.html";
     },2000);

 }

var welcomePop = document.querySelector("#popUp");

function ClseBtn(){
    welcomePop.style.display = "none";
    sessionStorage.setItem("EnterNum",1);
}

function BtnAbout(){
    window.location.href = "about.html";
}

window.addEventListener("load", function(){
    if(sessionStorage.getItem("EnterNum") == 1){
        welcomePop.style.display = "none";
    }
})