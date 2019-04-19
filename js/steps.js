var step1 = document.querySelector("#app1"),
    step2 = document.querySelector("#app2"),
    step3 = document.querySelector("#app3"),
    result = document.querySelector("#app4"),
    step3_icon2 = document.querySelector(".sel32"),
    result_icon2 = document.querySelector(".sel42"),
    result_icon3 = document.querySelector(".sel43"),
    popUp = document.querySelector(".popup"),
    finalImg = document.querySelector(".final-img");

var selection = {
    western : "img/icons/western.svg",
    KJ : "img/icons/japan.svg",
    indian : "img/icons/indian.svg",
    veggie : "img/icons/%20veggie-icon.svg",
    meat : "img/icons/meat-icon.svg",
    noodles : "img/icons/noodles-icon.svg",
    rice : "img/icons/rice-icon.svg",
    soup : "img/icons/soup-icon.svg",
    spicy : "img/icons/spicy-icon.svg",
    bread : "img/icons/bread-icon.svg"
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
    KJ1 : "Rice",
    KJ2 : "No Rice",
    rice1 : "Soup",
    rice2 : "No Soup",
    noRice1: "Noodle",
    noRice2: "No Noodle",
    west1: "Meat",
    west2: "Veggie",
    westMeat1: "Bread",
    westMeat2: "No Bread",
    westVeg1: "Soup",
    westVeg2: "No Soup"
    
}


var resultTitle = {
    kolhapuri : "Kolhapuri",
    kozhicurry : "Kozhi Curry",
    paprichaat : "Papari Chaat",
    tandoorichicken : "Tandoori Chicken",
    spciylentilquinoacurry : "Spicy Lentil Quinoa Curry",
    indiandahl : "Indian Dahl",
    dalchaawal : "Dal Chaawal",
    rajma : "Rajma",
    kimchistew : "Kimchi Stew",
    misosoup : "Miso Soup",
    koreanbbq : "Korean BBQ",
    sushi : "Sushi",
    bibimbap : "bibimbap",
    ramen : "Ramen",
    udon : "Udon",
    sashimi : "Sashimi",
    mandu : "Mandu",
    cheeseburger : "CheeseBurger",
    pepperonipizza : "Pepperoni Pizza",
    salmongreeksalad : "Salmon with Greek Salad",
    steak : "Steak with Wedge Potatoes",
    minestronesoup : "Classic Minestrone Soup",
    squashsoup : "Roasted Butternut squash soup",
    quinoasalad : "Quinoa Salad",
    kalepesto : "Super Kale Pesto"
}

var imgs = {
    kolhapuri : "img/foodimgs/kolhapuri.jpg",
    kozhicurry : "img/foodimgs/kozhicurry.jpg",
    paprichaat : "img/foodimgs/paprichaat.jpg",
    tandoorichicken : "img/foodimgs/tandoorichicken.jpg",
    spciylentilquinoacurry : "img/foodimgs/lentilcurry.jpg",
    indiandahl : "img/foodimgs/dahl.jpg",
    dalchaawal : "img/foodimgs/dalchaawal.jpg",
    rajma : "img/foodimgs/rajma.JPG",
    kimchistew : "img/foodimgs/kimchistew.JPG",
    misosoup : "img/foodimgs/misosoup.jpg",
    koreanbbq : "img/foodimgs/koreanbbq.jpg",
    sushi : "img/foodimgs/sushi.jpg",
    bibimbap : "img/foodimgs/bibimbap.jpg",
    ramen : "img/foodimgs/ramen.jpg",
    udon : "img/foodimgs/udon.jpg",
    sashimi : "img/foodimgs/sashimi.jpg",
    mandu : "img/foodimgs/mandu.jpg",
    cheeseburger : "img/foodimgs/burger.jpg",
    pepperonipizza : "img/foodimgs/pizza.jpg",
    salmongreeksalad : "greeksalad.jpg",
    steak : "img/foodimgs/steak.jpg",
    minestronesoup : "img/foodimgs/minestrone.jpg",
    squashsoup : "img/foodimgs/butternut.jpg",
    quinoasalad : "img/foodimgs/quinoasalad.jpg",
    kalepesto : "img/foodimgs/kalepesto.jpg"
}

var resultDes = {
    kolhapuri : "Congratulations!  Based off your selections we'd recommend Kolhapuri Chicken! This is a very spicy and full flavoured dish, with unique flavors that comes from the fresh ground spices and grated coconut.  You can find this dish at the restaurents listed below.  Enjoy!",
    kozhicurry : "Kozhi Curry is a flavorful, thick curry from Southern India.  This curry mouthwatering flavour laregly comes the coconut oil, coconut milk and unique blend of spices used.  This is a deliciously spicy curry, we recommend the restaurents below for the best verisons of the delicatable dish!",
    paprichaat : "Papri chaat is a popular traditional street food from India. This dish is typically a sweet, sour and tangy with a creamy &amp; crunchy texture.  Based off your selections we think that this dish is a perfect fit for you!  You can find this dish locally at the restaurents listed below.",
    tandoorichicken : "Tandoori Chicken is a chicken dish prepared by roasting chicken marinated in yoghurt and spices.  The dish originated from the Indian subcontinent and is popular in many parts of the world.  You can find many version of this popular dish in Vancouver but we recommend the spots listed below.  Enjoy!",
    spciylentilquinoacurry : "This lentil curry is a so delicious due to the use of coconut milk late in the cooking process.  Try this amazing dish at one of the restaurents we've recommended below.  Many people try to make this dish but few do it as well as the restaurants below.  Enjoy!",
    indiandahl : "Dahl is a popular lentil dish, full of flavour!  It's a popular dish all over the world and is commonly flavoured with many spicy's.  It is commonly served on rice and can be made to be as spicy as you prefer.  Check out the restaurents listed below to try this delicious dish!",
    dalchaawal : "Dal Chaawal is a very popular dish in the South Eastern region of India.  It's a mix of rice and lentil soup (Dal) and is a staple in certain parts of India. This dish is commonly, difficult to find in Canada but don't worry, FoodMatch has got you covered!  Check out the restaurents below to give Dahl Chaawal a try.",
    rajma : "This popular vegetarian dish consists of red kidney beans and a thick gravy made of many Indian spices.  It is usually served on a bed of rice and commonly consists of chopped onions, tomatoes, ginger, garlic and many fresh spices.  Try Rajma today at a restaurent near you!",
    kimchistew: "Woah, congratulations! You've selected Kimchi Stew. This beloved Korean dish is warm, hearty, spicy and very delicious. Check out our recommendations to find this foreign dish across Vancouver. You won't regret it!",
    misosoup: "This is a traditional Japanese soup, usually served with a bowl of steaming hot rice. The ingredients are basic but the flavour is divine. Many restaurents make Miso soup but we hunted down the best spots in Vancouver for a truly authentic verison of this delicious soup. Check out our recommendations below and enjoy!",
    koreanbbq: "Lucky you! You have chosen Korean BBQ and you should be very excited. This popular Korean style dish usually consists of several different kinds of meat grilled to perfection on a gas or charcoal grill. These slices of meat are usually marinated in a variety of different Korean sauces to really bring out the flavour in the meats. Check out our recommendations below for a delicious Korean BBQ joint near you!",
    sushi: "Congratulations, you'll be eating Sushi tonight! Sushi is popular dish in this region but not many restaurents do it as well as the restaurents listed below. Get the freshest cuts of fish, vegetables and rice at these spots today and experience what real Sushi is all about!",
    Bibimbap:"No way! You're eating Bibimbap for dinner! This Korean dish is commonly served on a bed of wam white rice and topped with namul, gochujang (spicy sauce), soy sauce and doenjang. Check out our restaurent listings below for the best versions of this delicious meal.",
    ramen: "Lucky you! You've selected Ramen. This popular Japanese dish is typically served on a bed of wheat noodles with your chose of meat and veggies. Ramen is also excellent as a vegetarian option if that's more your style. Ramen was first introduced in Japan in the 1660s, so you can bet this dish is packed with masterful and ancient flavours. Check out our recommendations below for the best Ramen spots in Vancouver",
    udon: "Congrats! You've selection Udon! This famous Japanese cuisine is often served hot as a noodle soup in it's simplest form. You can get many types of Udon with varying flavours and textures. Oh and don't forget, Udon is usually paired with other delicious Japanese foods like tempura. Check out our recommendations below for the best restaurents in town!",
    sashimi: "Sashimi is a dish consisting of very fresh raw fish and meat sliced into thin peices and often eaten with soy sauce. This dish can be found in many Japanese restaurents in Vancouver but none better then our recommendations below. Try this deliciousy, simple dish today and experience the magical flavours of Japan.",
    mandu: "Mandu is korean dish consisting of delicious dumplings filled with savoury meats. Mandu is a long standing cuisine of the Korean royal court and available widely throughout Korean. Unfortunately it's a little bit more difficult to find in Vancouver...but lucky for you, FoodMatch has got your back! Check out our restaruent recommendations to find this delicious dish today!",
    cheesburger: "This classic western dish can be found in all different types of delicious forms in Vancouver but to find a really great cheesburger and fries you must search high and low. Thankfully, FoodMatch has done the searching for you! Check out the restaurent recommendation section below and discover how delicious a Cheesburger with Fries can really be!",
    pepperoniPizza: "Congratulations! You've selection Pepperoni Pizze! A classic western food, this dish can be found commonly in Vancouver. Unfortunately the overwhelming amount of restaurents making this dish means it's tough to find a exceptional version. Try out our restaurent recommendations today and experience just how great Pepperoni Pizza can really be!",
    salmonGreek: "Congrats! You've selected Salmon with greek salad. This dish is not only delicious but a healthy alternative. Salmon is jammed backed with protein and the greek salad will help you reach your daily intact of vegetables in a flash. Try the restaurent recommendations now for the most delicious plate of this food now!",
    steakWedge: "Is there anything better then a perfectly cooked steak? How about a perfectly cooked steak with a stack of everyones favourite wedge fries? This simple and classic dish is one of the most satisifying dishes you are likly to find but unfortunately finding the best quality potatoes and steak can be a challenge. Once again, FoodMatch has got you covered! Check out our restaurent recommendations below for the best Steak and Wedge Fries you've ever tried!",
    minstrone: "Minestrone is a thick soup with Italien origins. This soup is made with a variet of different vegetables and often contains rice or paste. This soup also commonly contains beans, onions, celery and carrots. You can find this soup widely in Vancouver but try our recommendations below for the very best Minestrone you've ever had!",
    butternut: "This thick soup, rich soup is a serious flavour bommb! Made with roasted Butternut squash and a variet of vegetables this soup is perfect for a cool, wet Vancouver day. Try this soup today and experience the warmth and comfort of this delicious dish. We've searched high and low for the best Butternut Squash Soup in Vancouver, check out t]he restaurent recommendations best version of this soup now!",
    quinoa: "Quinoa is an ancient grain, with amazing health benefits. This grain can be combined into many dishes but it is largely considered best amongst some fresh vegetables in salad form. Find the most delicious Quinoa Salad's in Vancouver in our restaurent recommendation section listed below. Enjoy!",
    kalePesto: "Made with kale, omega 3 rich hemp seeds and flaxseed oil, this deliciously healthy pasta is an amazing dish. It is far from your typical pasta and that departure is welcomed here at FoodMatch. Give this unqiue and lovely recipe a try today and find out what all the talk is all about. Check out our restaurent reocomendations below and enjoy!"
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
    rDes : "",
    foodimg : "",
    popupImg : "",
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
            ChangeTitleUI(value);
        }
        
        if(props == "rDes"){
            ChangeDesUI(value);
        }
        
        if(props == "foodimg"){
            ChangeFoodImgUI(value);
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
    
     if(el.textContent == "Korean/Japanese"){
        pkg.ctName1 = categories.KJ1;
        pkg.ctName2 = categories.KJ2;
        pkg.sel1 = selection.KJ;
    }
    
     if(el.textContent == "Western"){
        pkg.ctName1 = categories.west1;
        pkg.ctName2 = categories.west2;
        pkg.sel1 = selection.western;
    }
    
    console.log(el.textContent);
    proxy.ctName1 = pkg.ctName1;
    proxy.ctName2 = pkg.ctName2;
    proxy.sel1 = pkg.sel1;
    
   
    step1.style.display = "none";
    step2.style.display = "grid";
    }



function Step2(el){
    
    ////INDIAN
    if(pkg.sel1 == selection.indian && el.textContent == "Meat"){
        pkg.ctName3 =  categories.meat1;
        pkg.ctName4 = categories.meat2;
        pkg.sel2 = selection.meat;
        step3_icon2.style.display = "inline-block";
        result_icon2.style.display = "inline-block"; 
    }
    
    if(pkg.sel1 == selection.indian && el.textContent == "Veggie"){
        pkg.ctName3 =  categories.veggie1;
        pkg.ctName4 = categories.veggie2;
        pkg.sel2 = selection.veggie;
        step3_icon2.style.display = "inline-block";
        result_icon2.style.display = "inline-block"; 
    }
 
    
    /////JAPANESE/KOREAN
    if(pkg.sel1 == selection.KJ && el.textContent == "Rice"){
        pkg.ctName3 = categories.rice1;
        pkg.ctName4 = categories.rice2;
        pkg.sel2 = selection.rice;
        step3_icon2.style.display = "inline-block";
        result_icon2.style.display = "inline-block"; 
    }
    
      if(pkg.sel1 == selection.KJ && el.textContent == "No Rice"){
        pkg.ctName3 = categories.noRice1;
        pkg.ctName4 = categories.noRice2;
        pkg.sel2 = "";
        step3_icon2.style.display = "none";
        result_icon2.style.display = "none";  
          
    }
    
    /////WESTERN
    
       if(pkg.sel1 == selection.western && el.textContent == "Meat"){
        pkg.ctName3 = categories.westMeat1;
        pkg.ctName4 = categories.westMeat2;
        pkg.sel2 = selection.meat;
        step3_icon2.style.display = "inline-block";
        result_icon2.style.display = "inline-block"; 
    }
         
      if(pkg.sel1 == selection.western && el.textContent == "Veggie"){
        pkg.ctName3 = categories.westVeg1;
        pkg.ctName4 = categories.westVeg2;
        pkg.sel2 = selection.veggie;
        step3_icon2.style.display = "inline-block";
        result_icon2.style.display = "inline-block"; 
    }
        
    proxy.ctName3 = pkg.ctName3;
    proxy.ctName4 = pkg.ctName4;
    proxy.sel2 = pkg.sel2;
    
    step2.style.display = "none";
    step3.style.display = "grid";
}

/*=========================   STEP 3   ================================*/


function Step3(el){
    
    /*==================  IDIAN  ========================*/
    
    if(pkg.sel1 == selection.indian && pkg.sel2 == selection.meat && el.textContent == "Spicy"){
        pkg.sel3 = selection.spicy;
        var num1 = Math.random(),
            num2 = Math.random();
        if(num1 < num2){
            pkg.rTitle = resultTitle.kolhapuri;
            pkg.rDes = resultDes.kolhapuri;
            pkg.foodimg = imgs.kolhapuri;
            pkg.popupImg = imgs.kolhapuri;
        } else {
            pkg.rTitle = resultTitle.kozhicurry;
            pkg.rDes = resultDes.kozhicurry;
            pkg.foodimg = imgs.kozhicurry;
            pkg.popupImg = imgs.kozhicurry;
        }
        result_icon3.style.display = "inline-block";
    }
    
    if(pkg.sel1 == selection.indian && pkg.sel2 == selection.meat && el.textContent == "No Spicy"){
        pkg.sel3 = "";
        var num1 = Math.random(),
            num2 = Math.random();
        if(num1 < num2){
            pkg.rTitle = resultTitle.paprichaat;
            pkg.rDes = resultDes.paprichaat;
            pkg.foodimg = imgs.paprichaat;
            pkg.popupImg = imgs.paprichaat;
        } else {
            pkg.rTitle = resultTitle.tandoorichicken;
            pkg.rDes = resultDes.tandoorichicken;
            pkg.foodimg = imgs.tandoorichicken;
            pkg.fpopupImg = imgs.tandoorichicken;
        }
        result_icon3.style.display = "none";
    }
    
    if(pkg.sel1 == selection.indian && pkg.sel2 == selection.veggie && el.textContent == "Spicy"){
        pkg.sel3 = selection.spicy;
        var num1 = Math.random(),
            num2 = Math.random();
        if(num1 < num2){
            pkg.rTitle = resultTitle.spciylentilquinoacurry;
            pkg.rDes = resultDes.spciylentilquinoacurry;
            pkg.foodimg = imgs.spciylentilquinoacurry;
            pkg.popupImg = imgs.spciylentilquinoacurry;
        } else {
            pkg.rTitle = resultTitle.indiandahl;
            pkg.rDes = resultDes.indiandahl;
            pkg.foodimg = imgs.indiandahl;
            pkg.popupImg = imgs.indiandahl;
        }
        result_icon3.style.display = "inline-block";
    }
    
    if(pkg.sel1 == selection.indian && pkg.sel2 == selection.veggie && el.textContent == "No Spicy"){
        pkg.sel3 = "";
        var num1 = Math.random(),
            num2 = Math.random();
        if(num1 < num2){
            pkg.rTitle = resultTitle.dalchaawal;
            pkg.rDes = resultDes.dalchaawal;
            pkg.foodimg = imgs.dalchaawal;
            pkg.popupImg = imgs.dalchaawal;
        } else {
            pkg.rTitle = resultTitle.rajma;
            pkg.rDes = resultDes.rajma;
            pkg.foodimg = imgs.rajma;
            pkg.popupImg = imgs.rajma;
        }
        result_icon3.style.display = "none";
    }
    
    /*=====================    KJ    ======================*/
    
    if(pkg.sel1 == selection.KJ && pkg.sel2 == selection.rice && el.textContent == "Soup"){
        pkg.sel3 = selection.soup;
        var num1 = Math.random(),
            num2 = Math.random();
        if(num1 < num2){
            pkg.rTitle = resultTitle.kimchistew;
            pkg.rDes = resultDes.kimchistew;
            pkg.foodimg = imgs.kimchistew;
            pkg.popupImg = imgs.kimchistew;
        } else {
            pkg.rTitle = resultTitle.misosoup;
            pkg.rDes = resultDes.misosoup;
            pkg.foodimg = imgs.misosoup;
            pkg.popupImg = imgs.misosoup;
        }
        result_icon3.style.display = "inline-block";
    }
    
    if(pkg.sel1 == selection.KJ && pkg.sel2 == selection.rice && el.textContent == "No Soup"){
        pkg.sel3 = "";
        var num1 = Math.random(),
            num2 = Math.random(),
            num3 = Math.random();
        if(Math.max(num1, num2, num3) == num1){
            pkg.rTitle = resultTitle.koreanbbq;
            pkg.rDes = resultDes.koreanbbq;
            pkg.foodimg = imgs.koreanbbq;
            pkg.popupImg = imgs.koreanbbq;
            
        } else if(Math.max(num1, num2, num3) == num2){
            pkg.rTitle = resultTitle.sushi;
            pkg.rDes = resultDes.sushi;
            pkg.foodimg = imgs.sushi;
            pkg.popupImg = imgs.sushi;
            
        } else if(Math.max(num1, num2, num3) == num3){
            pkg.rTitle = resultTitle.bibimbap;
            pkg.rDes = resultDes.Bibimbap;
            pkg.foodimg = imgs.bibimbap;
            pkg.popupImg = imgs.bibimbap;
            
        }
        result_icon3.style.display = "none";
    }
    
    if(pkg.sel1 == selection.KJ && pkg.sel2 == "" && el.textContent == "Noodle"){
        pkg.sel3 = selection.noodles;
        var num1 = Math.random(),
            num2 = Math.random();
        if(num1 < num2){
            pkg.rTitle = resultTitle.ramen;
            pkg.rDes = resultDes.ramen;
            pkg.foodimg = imgs.ramen;
            pkg.popupImg = imgs.ramen;
            
        } else {
            pkg.rTitle = resultTitle.udon;
            pkg.rDes = resultDes.udon;
            pkg.foodimg = imgs.udon;
            pkg.popupImg = imgs.udon;
            
        }
        result_icon3.style.display = "inline-block";
    }
    
    if(pkg.sel1 == selection.KJ && pkg.sel2 == "" && el.textContent == "No Noodle"){
        pkg.sel3 = "";
        var num1 = Math.random(),
            num2 = Math.random();
        if(num1 < num2){
            pkg.rTitle = resultTitle.sashimi;
            pkg.rDes = resultDes.sashimi;
            pkg.foodimg = imgs.sashimi;
            pkg.popupImg = imgs.sashimi;
            
        } else {
            pkg.rTitle = resultTitle.mandu;
            pkg.rDes = resultDes.mandu;
            pkg.foodimg = imgs.mandu;
            pkg.popupImg = imgs.mandu;
            
        }
        result_icon3.style.display = "none";
    }
    
    /*=========================  WESTERN  ==================================*/
    
    if(pkg.sel1 == selection.western && pkg.sel2 == selection.meat && el.textContent == "Bread"){
        pkg.sel3 = selection.bread;
        var num1 = Math.random(),
            num2 = Math.random();
        if(num1 < num2){
            pkg.rTitle = resultTitle.cheeseburger;
            pkg.rDes = resultDes.cheesburger;
            pkg.foodimg = imgs.cheeseburger;
            pkg.popupImg = imgs.cheeseburger;
            
        } else {
            pkg.rTitle = resultTitle.pepperonipizza;
            pkg.rDes = resultDes.pepperoniPizza;
            pkg.foodimg = imgs.pepperonipizza;
            pkg.popupImg = imgs.pepperonipizza
        }
        result_icon3.style.display = "inline-block";
    }
    
    if(pkg.sel1 == selection.western && pkg.sel2 == selection.meat && el.textContent == "No Bread"){
        pkg.sel3 = "";
        var num1 = Math.random(),
            num2 = Math.random();
        if(num1 < num2){
            pkg.rTitle = resultTitle.salmongreeksalad;
            pkg.rDes = resultDes.salmonGreek;
            pkg.foodimg = imgs.salmongreeksalad;
            pkg.popupImg = imgs.salmongreeksalad;
            
        } else {
            pkg.rTitle = resultTitle.steak;
            pkg.rDes = resultDes.steakWedge;
            pkg.foodimg = imgs.steak;
            pkg.popupImg = imgs.steak;
            
        }
        result_icon3.style.display = "none";
    }
    
    if(pkg.sel1 == selection.western && pkg.sel2 == selection.veggie && el.textContent == "Soup"){
        pkg.sel3 = selection.soup;
        var num1 = Math.random(),
            num2 = Math.random();
        if(num1 < num2){
            pkg.rTitle = resultTitle.minestronesoup;
            pkg.rDes = resultDes.minstrone;
            pkg.foodimg = imgs.minestronesoup;
            pkg.popupImg = imgs.minestronesoup;
            
        } else {
            pkg.rTitle = resultTitle.squashsoup;
            pkg.rDes = resultDes.butternut;
            pkg.foodimg = imgs.squashsoup;
            pkg.popupImg = imgs.squashsoup;
            
        }
        result_icon3.style.display = "inline-block";
    }
    
    if(pkg.sel1 == selection.western && pkg.sel2 == selection.veggie && el.textContent == "No Soup"){
        pkg.sel3 = "";
        var num1 = Math.random(),
            num2 = Math.random();
        if(num1 < num2){
            pkg.rTitle = resultTitle.quinoasalad;
            pkg.rDes = resultDes.quinoa;
            pkg.foodimg = imgs.quinoasalad;
            pkg.popupImg = imgs.quinoasalad;

        } else {
            pkg.rTitle = resultTitle.kalepesto;
            pkg.rDes = resultDes.kalePesto;
            pkg.foodimg = imgs.kalepesto;
            pkg.popupImg = imgs.kalepesto;
            
        }
        result_icon3.style.display = "none";
    }
    
    
    
    
    proxy.sel3 = pkg.sel3;
    proxy.rTitle = pkg.rTitle;
    proxy.rDes = pkg.rDes;
    proxy.foodimg = pkg.foodimg;
    proxy.popupImg = pkg.popupImg;
    
    step3.style.display = "none";
    result.style.display = "grid";
}

/*=================  BACK BUTTONS =========================*/

function BackToHome(){
    window.location.href = "index.html";
}

function BackToStep1(){
    step1.style.display = "grid";
    step2.style.display = "none";
}

function BackToStep2(){
    step2.style.display = "grid";
    step3.style.display = "none";
}

function TryAgainBut(){
    result.style.display = "none";
    step1.style.display = "grid";
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
    document.querySelector(".sel21").src = val;
    document.querySelector(".sel31").src = val;
    document.querySelector(".sel41").src = val;
}


function ChangeSel2IconUI(val){
    document.querySelector(".sel32").src = val;
    document.querySelector(".sel42").src = val;
}

function ChangeSel3IconUI(val){
    document.querySelector(".sel43").src = val;
}

function ChangeTitleUI(val){
    document.querySelector("#foodname").innerText = val;
    document.querySelector(".match-title").innerText = val;
}

function ChangeDesUI(val){
    document.querySelector("#rDes").innerText = val;
}

function ChangeFoodImgUI(val){
    document.querySelector(".final-img").style.backgroundImage = "url(" + val + ")";
    document.querySelector(".popup-img").src = val;
}

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

function BackToHome(){
    window.location.href = "index.html"
}
