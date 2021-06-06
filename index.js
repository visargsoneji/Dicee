function simulate() {
    randomNumber1 = Math.floor((Math.random() * 6) + 1);
    randomNumber2 = Math.floor((Math.random() * 6) + 1);

    console.log("Random Number1", randomNumber1);
    console.log("Random Number2", randomNumber2);

    document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");
    document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");

    if(randomNumber1 > randomNumber2) {
        document.querySelector("h1").textContent = "🚩Player1 Wins!";
    }
    else if(randomNumber1 < randomNumber2) {
        document.querySelector("h1").textContent = "Player2 Wins!🚩";
    }
    else {
        document.querySelector("h1").textContent = "Draw!";
    }
}
