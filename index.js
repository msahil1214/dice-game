    //d1
    var number1;
    number1 = Math.floor(Math.random(1,6)*6)+1;
    var randomName = "dice" + number1 + ".png";
    var randomPath = "./images/" + randomName;

    console.log(number1);
    console.log(randomName);
    console.log(randomPath);
     
    var D1 = document.querySelectorAll("img")[0];
    D1.setAttribute("src", randomPath); 
    //d2
    var number2;
    number2 = Math.floor(Math.random(1,6)*6)+1;
    var randomName2 = "dice" + number2 + ".png";
    var randomPath2 = "./images/" + randomName2;

    console.log(number2);
    console.log(randomName2);
    console.log(randomPath2);
     
    var D2 = document.querySelectorAll("img")[1];
    D2.setAttribute("src", randomPath2); 


    if(number1>number2){
        document.querySelector("h1").innerHTML="Player 1 Wins"
    }else{
        document.querySelector("h1").innerHTML="Player 2 Wins"

    }

