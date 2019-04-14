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
    meat2 : "No Spicy",
    veggie1 : "Spicy",
    veggie2 : "No Spicy",
    koreanJapenese1 : "Rice",
    koreanJapenese2 : "No Rice"
}


var resultTitle = {
    kolhapuri : "Kolhapuri",
    kozhicurry : "Kozhi Curry",
    paprichaat : "Papari Chaat",
    tandoorichicken : "Tandoori Chicken",
    spciylentilquinoacurry : "Spicy Lentil Quinoa Curry",
    indiandahl : "Indian Dahl",
    dalchaawal : "Dal Chaawal",
    rajma : "Rajma"
}

var resultDes = {
    kolhapuri : "Congratulations!  Based off your selections we'd recommend Kolhapuri Chicken! This is a very spicy and full flavoured dish, with unique flavors that comes from the fresh ground spices and grated coconut.  You can find this dish at the restaurents listed below.  Enjoy!",
    kozhicurry : "Kozhi Curry is a flavorful, thick curry from Southern India.  This curry mouthwatering flavour laregly comes the coconut oil, coconut milk and unique blend of spices used.  This is a deliciously spicy curry, we recommend the restaurents below for the best verisons of the delicatable dish!",
    paprichaat : "Papri chaat is a popular traditional street food from India. This dish is typically a sweet, sour and tangy with a creamy & crunchy texture.  Based off your selections we think that this dish is a perfect fit for you!  You can find this dish locally at the restaurents listed below.",
    tandoorichicken : "Tandoori Chicken is a chicken dish prepared by roasting chicken marinated in yoghurt and spices.  The dish originated from the Indian subcontinent and is popular in many parts of the world.  You can find many version of this popular dish in Vancouver but we recommend the spots listed below.  Enjoy!",
    spciylentilquinoacurry : "This lentil curry is a so delicious due to the use of coconut milk late in the cooking process.  Try this amazing dish at one of the restaurents we've recommended below.  Many people try to make this dish but few do it as well as the restaurants below.  Enjoy!",
    indiandahl : "Dahl is a popular lentil dish, full of flavour!  It's a popular dish all over the world and is commonly flavoured with many spicy's.  It is commonly served on rice and can be made to be as spicy as you prefer.  Check out the restaurents listed below to try this delicious dish!",
    dalchaawal : "Dal Chaawal is a very popular dish in the South Eastern region of India.  It's a mix of rice and lentil soup (Dal) and is a staple in certain parts of India. This dish is commonly, difficult to find in Canada but don't worry, FoodMatch has got you covered!  Check out the restaurents below to give Dahl Chaawal a try.",
    rajma : "This popular vegetarian dish consists of red kidney beans and a thick gravy made of many Indian spices.  It is usually served on a bed of rice and commonly consists of chopped onions, tomatoes, ginger, garlic and many fresh spices.  Try Rajma today at a restaurent near you!"
}

/*=======   PKG  ==============*/

var pkg = {
    ctName1 : "",
    ctName2 : "",
    ctName3 : "",
    ctName4 : "",
    sel1 : "",
    sel2 : "",
    sel3 : "",
    bgPt1 : "",
    bgPt1 : "",
    rTitle : "",
    rDes : ""
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
        
        if(props == "ctName3"){
            ChangeCtNameUI3(value);
        }
        
        if(props == "ctName4"){
            ChangeCtNameUI4(value);
        }
        
        if(props == "sel1"){
            ChangeSel1IconUI(value);
        }
        
        if(props == "sel2"){
            ChangeSel2IconUI(value);
        }
        
        if (props == "sel3"){
            ChangeSel3IconUI(value);
        }
        
        if (props == "rTitle"){
            ChangerTitleUI(value);
        }
        
        if(props == "rDes"){
            ChangerDesUI(value);
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
    
     if(el.textContent == "Korean/Japenese"){
        pkg.ctName1 = categories.koreanJapenese1;
        pkg.ctName2 = categories.koreanJapenese2;
        pkg.sel1 = selection.KJ;
    }
    
    proxy.ctName1 = pkg.ctName1;
    proxy.ctName2 = pkg.ctName2;
    proxy.sel1 = pkg.sel1;
    
    document.querySelector("#app1").style.display = "none";
    document.querySelector("#app2").style.display = "grid";
    }

function Step2(el){
    if(pkg.sel1 == selection.indian && el.textContent == "Meat"){
        pkg.ctName3 =  categories.meat1;
        pkg.ctName4 = categories.meat2;
        pkg.sel2 = selection.meat;
    }
    
    if(pkg.sel1 == selection.indian && el.textContent == "Veggie"){
        pkg.ctName3 =  categories.veggie1;
        pkg.ctName4 = categories.veggie2;
        pkg.sel2 = selection.veggie;
    }
    
    proxy.ctName3 = pkg.ctName3;
    proxy.ctName4 = pkg.ctName4;
    proxy.sel2 = pkg.sel2;
    
    
    document.querySelector("#app2").style.display = "none";
    document.querySelector("#app3").style.display = "grid";
}

function Step3(el){
    if(pkg.sel1 == selection.indian && pkg.sel2 == selection.meat && el.textContent == "Spicy"){
        pkg.sel3 = selection.spicy;
        var num1 = Math.random(),
            num2 = Math.random();
        if(num1 < num2){
            pkg.rTitle = resultTitle.kolhapuri;
            pkg.rDes = resultDes.kolhapuri;
        } else {
            pkg.rTitle = resultTitle.kozhicurry;
            pkg.rDes = resultDes.kozhicurry;
        }
        
    }
    
    if(pkg.sel1 == selection.indian && pkg.sel2 == selection.meat && el.textContent == "No Spicy"){
        pkg.sel3 = "none";
        var num1 = Math.random(),
            num2 = Math.random();
        if(num1 < num2){
            pkg.rTitle = resultTitle.paprichaat;
            pkg.rDes = resultDes.paprichaat;
        } else {
            pkg.rTitle = resultTitle.tandoorichicken;
            pkg.rDes = resultDes.tandoorichicken;
        }
        
    }
    
    if(pkg.sel1 == selection.indian && pkg.sel2 == selection.veggie && el.textContent == "Spicy"){
        pkg.sel3 = selection.spicy;
        var num1 = Math.random(),
            num2 = Math.random();
        if(num1 < num2){
            pkg.rTitle = resultTitle.spciylentilquinoacurry;
            pkg.rDes = resultDes.spciylentilquinoacurry;
        } else {
            pkg.rTitle = resultTitle.indiandahl;
            pkg.rDes = resultDes.indiandahl;
        }
        
    }
    
    if(pkg.sel1 == selection.indian && pkg.sel2 == selection.veggie && el.textContent == "No Spicy"){
        pkg.sel3 = "none";
        var num1 = Math.random(),
            num2 = Math.random();
        if(num1 < num2){
            pkg.rTitle = resultTitle.dalchaawal;
            pkg.rDes = resultDes.dalchaawal;
        } else {
            pkg.rTitle = resultTitle.rajma;
            pkg.rDes = resultDes.rajma;
        }
        
    }
    
    proxy.sel3 = pkg.sel3;
    proxy.rTitle = pkg.rTitle;
    proxy.rDes = pkg.rDes;
    
    document.querySelector("#app3").style.display = "none";
    document.querySelector("#app4").style.display = "grid";
}



/*=======   UI FUNCTIONS     ==========*/

function ChangeCtNameUI1(val){
    document.querySelector(".ca1").innerText = val;
}

function ChangeCtNameUI2(val){
    document.querySelector(".ca2").innerText = val;
}

function ChangeCtNameUI3(val){
    document.querySelector(".ca3").innerText = val;
}

function ChangeCtNameUI4(val){
    document.querySelector(".ca4").innerText = val;
}

function ChangeSel1IconUI(val){
    document.querySelector(".sel1").src = val;
}


function ChangeSel2IconUI(val){
    document.querySelector(".sel2").src = val;
}

function ChangeSel3IconUI(val){
    document.querySelector(".sel3").src = val;
}

function ChangerTitleUI(val){
    document.querySelector("#foodname").innerText = val;
    document.querySelector(".match-title").innerText = val;
}

function ChangerDesUI(val){
    document.querySelector("#rDes").innerText = val;
}

