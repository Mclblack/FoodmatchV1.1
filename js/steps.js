var selection = {
    western : "img/icons/western.svg",
    KJ : "img/icons/japan.svg",
    indian : "img/icons/indian.svg",
    veggie : "img/icons/%20veggie-icon.svg",
    meat : "img/icons/meat-icon.svg",
    noodles : "img/icons/noodles-icon.svg",
    rice : "img/icons/rice-icon.svg",
    soup : "img/icons/soup-icon.svg",
    spicy : "img/icons/spicy-icon.svg"
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
    
   
    document.querySelector("#app1").style.display = "none";
    document.querySelector("#app2").style.display = "grid";
    }



function Step2(el){
    
    ////INDIAN
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
    
    /////JAPANESE/KOREAN
    if(pkg.sel1 == selection.KJ && el.textContent == "Rice"){
        pkg.ctName3 = categories.rice1;
        pkg.ctName4 = categories.rice2;
        pkg.sel2 = selection.rice;
    }
    
      if(pkg.sel1 == selection.KJ && el.textContent == "No Rice"){
        pkg.ctName3 = categories.noRice1;
        pkg.ctName4 = categories.noRice2;
        pkg.sel2 = selection.noRice;
    }
    proxy.ctName3 = pkg.ctName3;
    proxy.ctName4 = pkg.ctName4;
    proxy.sel2 = pkg.sel2;
    
    /////WESTERN
    
       if(pkg.sel1 == selection.western && el.textContent == "Meat"){
        pkg.ctName3 = categories.westMeat1;
        pkg.ctName4 = categories.westMeat2;
        pkg.sel2 = selection.western;
    }
    
     if(pkg.sel1 == selection.western && el.textContent == "Meat"){
        pkg.ctName3 = categories.westMeat1;
        pkg.ctName4 = categories.westMeat2;
        pkg.sel2 = selection.western;
    }
    
      if(pkg.sel1 == selection.western && el.textContent == "Veggie"){
        pkg.ctName3 = categories.westVeg1;
        pkg.ctName4 = categories.westVeg2;
        pkg.sel2 = selection.western;
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
        pkg.sel3 = "";
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
        pkg.sel3 = "";
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

function ChangerTitleUI(val){
    document.querySelector("#foodname").innerText = val;
    document.querySelector(".match-title").innerText = val;
}

function ChangerDesUI(val){
    document.querySelector("#rDes").innerText = val;
}

