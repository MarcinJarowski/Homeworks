const grabGameWindow = document.querySelector("#gameWindow");
const counterValue = document.querySelector("#points");
const createBombElement = document.createElement("img");
const createCatElement = document.createElement("img");
const loseWindow = document.querySelector("#lose");
let value = 0;

function createBomb() {
  createBombElement.setAttribute("src", "images/bomb.png");
  createBombElement.classList.add("bomb");
  grabGameWindow.appendChild(createBombElement);
  giveBombTopAndLeftPositionValue();
}
// createBomb();

function deleteBomb() {
  grabGameWindow.removeChild(createBombElement);
}
// deleteBomb();

function createCat() {
  createCatElement.setAttribute("src", "images/cat.png");
  createCatElement.classList.add("cat");
  grabGameWindow.appendChild(createCatElement);
  giveCatTopAndLeftPositionValue();
}
// createCat();

function deleteCat() {
  grabGameWindow.removeChild(createCatElement);
}
// deleteCat();

// function showHideCat() {
//     createCatElement.animate([    TODO: obejrzec net ninja i zrobiv animacje ktora pokaze i zniknie element w 1 sec, i bombe
//         {transform: }
//     ])
// }

function catAddEventListener() {
  createCatElement.addEventListener("click", addOneToCounter);
}
catAddEventListener();

function addOneToCounter() {
  value++;
  counterValue.textContent = "Points: " + value;
}

function bombAddEventListener() {
  createBombElement.addEventListener("click", showYouLoseDiv);
}
bombAddEventListener();

function showYouLoseDiv() {
  loseWindow.style.zIndex = "2";
}

function giveCatTopAndLeftPositionValue() {
  let cat = document.querySelector(".cat");
  cat.style.top = Math.floor(Math.random() * 480) + 80 + "px";
  cat.style.left = Math.floor(Math.random() * 800) + 50 + "px";
}
function giveBombTopAndLeftPositionValue() {
  let bomb = document.querySelector(".bomb");
  bomb.style.top = Math.floor(Math.random() * 480) + 80 + "px";
  bomb.style.left = Math.floor(Math.random() * 800) + 50 + "px";
}
function showBombOrCat() {
  let oneOrZero = Math.round(Math.random());
  if (oneOrZero == 0) {
    createCat();
    deleteBomb();
  } else {
    createBomb();
    deleteCat();
  }
  checkValueChangeInterval();
}
let intervalTimeOne = 1000;
let intervalTimeTwo = 300;

setInterval(showBombOrCat, intervalTimeOne);

function checkValueChangeInterval() {
  if (value == 3) {
    clearInterval(showBombOrCat, intervalTimeOne);
    setTimeout(showBombOrCat, intervalTimeTwo);
  }
}

// TODO w fucking looser zrobic input na imie, wziac value z countera i zapisac
// w localsie imie i pkt, pokazac wyniki
function displayScore() {
  let score = document.querySelector(".yourPoints");
}
function submitName() {
  const nameValue = document.querySelector(".input").value;
  console.log(nameValue);
  console.log(value);
}
