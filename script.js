"use-strict";
console.log("hello JS");

window.addEventListener("load", start);

let points = 0;
let lives = 0;
// let time = 120;

function start() {
  console.log("start is starting");

  points = 0;
  lives = 3;

  // events for clicking
  document
    .querySelector("#beer_container")
    .addEventListener("click", clickBeer);
  document
    .querySelector("#drink_container")
    .addEventListener("click", clickDrink);
  document
    .querySelector("#shot_container")
    .addEventListener("click", clickShot);
  document
    .querySelector("#water_container")
    .addEventListener("click", clickWater);
  document
    .querySelector("#coffee_container")
    .addEventListener("click", clickCoffee);
}

// Adding animations to the clicking

function clickBeer() {
  console.log("beer clicked");

  // remove event so you can only click once at a time
  document
    .querySelector("#beer_container")
    .removeEventListener("click", clickBeer);

  // pausing the beer
  document.querySelector("#beer_container").classList.add("paused");

  // adding the clickBad animation to beer
  document.querySelector("#beer_sprite").classList.add("clickBad");

  // when animation clickBad done, restart falling animation
  document
    .querySelector("#beer_container")
    .addEventListener("animationend", restartBeer);

  // losing a life
  minusLife();
}

function clickDrink() {
  console.log("drink clicked");

  // remove event so you can only click once at a time
  document
    .querySelector("#drink_container")
    .removeEventListener("click", clickDrink);

  // pausing the drink
  document.querySelector("#drink_container").classList.add("paused");

  // adding the clickBad animation to drink
  document.querySelector("#pinkDrink_sprite").classList.add("clickBad");

  // when animation clickBad done, restart falling animation
  document
    .querySelector("#drink_container")
    .addEventListener("animationend", restartDrink);

  // losing a life
  minusLife();
}

function clickShot() {
  console.log("shot clicked");

  // remove event so you can only click once at a time
  document
    .querySelector("#shot_container")
    .removeEventListener("click", clickShot);

  // pausing the shot
  document.querySelector("#shot_container").classList.add("paused");

  // adding the clickBad animation to shot
  document.querySelector("#shot_sprite").classList.add("clickBad");

  // when animation clickBad done, restart falling animation
  document
    .querySelector("#shot_container")
    .addEventListener("animationend", restartShot);

  // losing a life x2?
  minusLife();
  minusLife();
}

function clickWater() {
  console.log("water clicked");

  // remove event so you can only click once at a time
  document
    .querySelector("#water_container")
    .removeEventListener("click", clickWater);

  // pausing the water
  document.querySelector("#water_container").classList.add("paused");

  // adding the clickGood animation to water
  document.querySelector("#water_sprite").classList.add("clickGood");

  // when animation clickGood done, restart falling animation
  document
    .querySelector("#water_container")
    .addEventListener("animationend", restartWater);

  // getting 2 points
  getPoints();
  getPoints();
}

function clickCoffee() {
  console.log("coffee clicked");

  // remove event so you can only click once at a time
  document
    .querySelector("#coffee_container")
    .removeEventListener("click", clickCoffee);

  // pausing the coffee
  document.querySelector("#coffee_container").classList.add("paused");

  // adding the clickBad animation to coffee
  document.querySelector("#coffee_sprite").classList.add("clickGood");

  // when animation clickGood done, restart falling animation
  document
    .querySelector("#coffee_container")
    .addEventListener("animationend", restartCoffee);

  // getting 3 points + 1 life
  getPoints();
  getPoints();
  getPoints();
  plusLife();
}

// Restarting animations

function restartBeer() {
  console.log("restarting beer animation");

  //removing the restart event
  document
    .querySelector("#beer_container")
    .removeEventListener("animationend", restartBeer);

  // removing the clickBad animation class
  document.querySelector("#beer_sprite").classList.remove("clickBad");

  // removing the pause animation class
  document.querySelector("#beer_container").classList.remove("paused");

  // restarting the falling animation
  document.querySelector("#beer_container").classList.remove("falling");
  document.querySelector("#beer_container").offsetLeft;
  document.querySelector("#beer_container").classList.add("falling");

  // restarting the event looking for clicks on the beer
  document
    .querySelector("#beer_container")
    .addEventListener("click", clickBeer);
}

function restartDrink() {
  console.log("restarting drink animation");

  //removing the restart event
  document
    .querySelector("#drink_container")
    .removeEventListener("animationend", restartDrink);

  // removing the clickBad animation class
  document.querySelector("#pinkDrink_sprite").classList.remove("clickBad");

  // removing the pause animation class
  document.querySelector("#drink_container").classList.remove("paused");

  // restarting the falling animation
  document.querySelector("#drink_container").classList.remove("falling");
  document.querySelector("#drink_container").offsetLeft;
  document.querySelector("#drink_container").classList.add("falling");

  // restarting the event looking for clicks on the drink
  document
    .querySelector("#drink_container")
    .addEventListener("click", clickDrink);
}

function restartShot() {
  console.log("restarting shot animation");

  //removing the restart event
  document
    .querySelector("#shot_container")
    .removeEventListener("animationend", restartShot);

  // removing the clickBad animation class
  document.querySelector("#shot_sprite").classList.remove("clickBad");

  // removing the pause animation class
  document.querySelector("#shot_container").classList.remove("paused");

  // restarting the falling animation
  document.querySelector("#shot_container").classList.remove("falling");
  document.querySelector("#shot_container").offsetLeft;
  document.querySelector("#shot_container").classList.add("falling");

  // restarting the event looking for clicks on the shot
  document
    .querySelector("#shot_container")
    .addEventListener("click", clickShot);
}

function restartWater() {
  console.log("restarting water animation");

  //removing the restart event
  document
    .querySelector("#water_container")
    .removeEventListener("animationend", restartWater);

  // removing the clickGood animation class
  document.querySelector("#water_sprite").classList.remove("clickGood");

  // removing the pause animation class
  document.querySelector("#water_container").classList.remove("paused");

  // restarting the falling animation
  document.querySelector("#water_container").classList.remove("falling");
  document.querySelector("#water_container").offsetLeft;
  document.querySelector("#water_container").classList.add("falling");

  // restarting the event looking for clicks on the water
  document
    .querySelector("#water_container")
    .addEventListener("click", clickWater);
}

function restartCoffee() {
  console.log("restarting coffee animation");

  //removing the restart event
  document
    .querySelector("#coffee_container")
    .removeEventListener("animationend", restartCoffee);

  // removing the clickGood animation class
  document.querySelector("#coffee_sprite").classList.remove("clickGood");

  // removing the pause animation class
  document.querySelector("#coffee_container").classList.remove("paused");

  // restarting the falling animation
  document.querySelector("#coffee_container").classList.remove("falling");
  document.querySelector("#coffee_container").offsetLeft;
  document.querySelector("#coffee_container").classList.add("falling");

  // restarting the event looking for clicks on the coffee
  document
    .querySelector("#coffee_container")
    .addEventListener("click", clickCoffee);
}

// Getting points

function getPoints() {
  console.log("you're getting points");

  //adding one point
  points++;
  console.log("you have " + points + " points");

  // calling the displayPoints function
  displayPoints();
}

function displayPoints() {
  console.log("display points:" + points);

  // showing the points on the game screen
  document.querySelector("#score").textContent = "Points: " + points;
}

// Losing and gaining lives

function minusLife() {
  console.log("you lost a life");

  // removing the life
  console.log("you have " + lives + " lives left");

  //calling the displayMinusLife function
  displayMinusLife();
  lives--;
}

function displayMinusLife() {
  console.log("display lost lives:" + lives);

  document.querySelector("#heart" + lives).classList.remove("addLife");
  document.querySelector("#heart" + lives).classList.add("loseLife");
}

function plusLife() {
  console.log("you've got a new life");

  lives++;
  displayPlusLife();
  console.log("you have " + lives + " lives left");
}

function displayPlusLife() {
  document.querySelector("#heart" + lives).classList.remove("loseLife");
  document.querySelector("#heart" + lives).classList.add("addLife");
}

// End of game

function level_complete() {
  console.log("You win!");
}

function game_over() {
  console.log("You lose :'(");
}
