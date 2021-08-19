let randomNumber1 = Math.round(Math.random() * 5 + 1);
let randomNumber2 = Math.round(Math.random() * 5 + 1);
console.log(randomNumber1);

document.querySelector(".dicee__image1").setAttribute("src", "img/dice" + randomNumber1 + ".png");
document.querySelector(".dicee__image2").setAttribute("src", "img/dice" + randomNumber2 + ".png");

function gameProcces(){
    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").textContent = "Winner Player 1";
    }
    else if (randomNumber1 < randomNumber2){
        document.querySelector("h1").textContent = "Winner Player 2";
    }
    else if (randomNumber1 == randomNumber2){
        document.querySelector("h1").textContent = "It's a Draw, try again";
    }
} 

gameProcces();