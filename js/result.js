var popUp = document.querySelector(".popup");
var finalImg = document.querySelector(".final-img");

function TriggerPopUp(){

  finalImg.style.opacity= "0";
  popUp.style.opacity = "1";
  popUp.style.zIndex = "2";

}

function closeBtn(){
  popUp.style.opacity = "0";
  popUp.style.zIndex = "0";
  finalImg.style.opacity = "1";
}

function tryAgain(){
  window.location.href = "../Step1/step1.html";
}

 