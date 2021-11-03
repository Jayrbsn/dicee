// alert("Working!");

// create random number between 1-6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// insert that random number into the img name to select the img
var randomDiceNumber = "dice" + randomNumber1 + ".png";

// add the file path to the above
var randomImageSource = randomDiceNumber;

// use dom to select the the first image
var image1 = document.querySelectorAll("img")[0];

// use .setAttribute method and concattination to randomly select which img
// is displayed
image1.setAttribute("src", randomImageSource);


// do the same for the second dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceNumber2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = randomDiceNumber2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);


// use if statement to manipulate the header to announce winner based on
// results above
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else {
  document.querySelector("h1").innerHTML = "🚩Draw!🚩";
}
