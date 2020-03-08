var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
// alert(randomDiceImage);
// var randomImageSource = "C:/Users/prajanag/Desktop/Dicee Challenge - Starting Files/images/" + randomDiceImage;
// alert(randomImageSource);

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice" + randomNumber2 + ".png";
// alert(randomDiceImage);
// var randomImageSource = "C:/Users/prajanag/Desktop/Dicee Challenge - Starting Files/images/" + randomDiceImage;
// alert(randomImageSource);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage1);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player1 Wins";
}
else if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "It is a draw";
}
else {
  document.querySelector("h1").innerHTML = "Player2 Wins";
}
