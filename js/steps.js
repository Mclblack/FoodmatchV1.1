var selection = {
    western : "img/icons/western.svg",
    KJ : "img/icons/japan.svg",
    indian : "img/icons/indian.svg",
    veggie : "img/icons/%20veggie-icon.svg",
    meat : "img/icons/meat-icon.svg",
    noodles : "img/icons/noodles-icon.svg",
    rice : "img/icons/rice-icon.svg",
    soup : "img/icons/soup-icon.svg",
    spciy : "img/icons/spicy-icon.svg"
}

var patterns = {
    pt1 : "img/ct-patterns/pattern-1.svg",
    pt2 : "img/ct-patterns/pattern-2.svg",
    pt3 : "img/ct-patterns/pattern-3.svg",
    pt4 : "img/ct-patterns/pattern-4.svg",
    pt5 : "img/ct-patterns/pattern-5.svg",
    pt6 : "img/ct-patterns/pattern-6.svg",
    pt7 : "img/ct-patterns/pattern-7.svg",
}

var categories = {
    indian1 : "Meat",
    indian2 : "Veggie",
    meat1 : "Spicy",
    meat2 : "No Spicy"
}

/*=======   PKG  ==============*/

var pkg = {
    ctName1 : "",
    ctName2 : "",
    sel1 : "",
    sel2 : "",
    bgPt1 : "",
    bgPt1 : ""
}

/*=======   HANDLER  =========*/

var handler = {
    set:function(obj, props, value){
        if(props == "ctName1"){
            ChangeCtNameUI1(value);
        }
        
        if(props == "ctName2"){
            ChangeCtNameUI2(value);
        }
        
        if(props == "sel1"){
            ChangeSel1IconUI(value);
        }
        
        if(props == "sel2"){
            ChangeSel2IconUI(value);
        }
    }
}

var proxy = new Proxy(pkg, handler);

/*=======  STATE FUNCTIONS   ========*/

function Step1(el){
    if(el.textContent == "Indian"){
        pkg.ctName1 = categories.indian1;
        pkg.ctName2 = categories.indian2;
        pkg.sel1 = selection.indian;
    }
    
    proxy.ctName1 = pkg.ctName1;
    proxy.ctName2 = pkg.ctName2;
    proxy.sel1 = pkg.sel1;
    
    document.querySelector("#app1").style.display = "none";
    document.querySelector("#app2").style.display = "grid";
}

function Step2(el){
    if(el.textContent == "Meat"){
        pkg.ctName1 =  categories.meat1;
        pkg.ctName2 = categories.meat2;
        pkg.sel2 = selection.meat;
    }
    
    proxy.ctName1 = pkg.ctName1;
    proxy.ctName2 = pkg.ctName2;
    proxy.sel2 = pkg.sel2;
    
    
}

/*=======   UI FUNCTIONS     ==========*/

function ChangeCtNameUI1(val){
    document.querySelector(".ca1").innerText = val;
}

function ChangeCtNameUI2(val){
    document.querySelector(".ca2").innerText = val;
}

function ChangeSel1IconUI(val){
    document.querySelector(".sel1").src = val;
}
<<<<<<< HEAD

function ChangeSel2IconUI(val){
    document.querySelector(".sel2").src = val;
}
=======
>>>>>>> 9a7406aa696571e1886a4f765bb7af18c9b2d85b


