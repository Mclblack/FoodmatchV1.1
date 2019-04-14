var dim = 130,
    z = 1;

function changeImg(el){
    dim += 170;
    z += 10;
    if(dim > 300){
        dim = 130;
        z = 1;
    }
    el.style.zIndex = z;
    el.style.width = dim + "px";
    el.style.height = dim + "px";
}

function BackToHome(){
    window.location.href = "index.html"
}

