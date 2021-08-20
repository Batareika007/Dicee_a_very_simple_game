document.querySelector("h1").onclick = gameProcces;

function gameProcces(){
let randomNumber1 = Math.round(Math.random() * 5 + 1);
let randomNumber2 = Math.round(Math.random() * 5 + 1);
console.log(randomNumber1);

document.querySelector(".dicee__image1").setAttribute("src", "img/dice" + randomNumber1 + ".png");
document.querySelector(".dicee__image2").setAttribute("src", "img/dice" + randomNumber2 + ".png");

    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").textContent = "Player 1 Wins!";
    }
    else if (randomNumber1 < randomNumber2){
        document.querySelector("h1").textContent = "Player 2 Wins!";
    }
    else if (randomNumber1 == randomNumber2){
        document.querySelector("h1").textContent = "Draw";
    }
} 

// setTimeout(() => {gameProcces() 
    
// }, 5000)
// gameProcces();