const grabGameWindow = document.querySelector("#gameWindow");
const counterValue = document.querySelector("#points");
const createBombElement = document.createElement("img");
const createCatElement = document.createElement("img");
const loseWindow = document.querySelector("#lose");
const startWindow = document.querySelector("#startWindow");
let endPoints = document.querySelector("#yourPoints");
let scoreValue = 0;
let intervalTimeOne = 1000;
let intervalTimeTwo = 900;

function createBomb() {
  createBombElement.setAttribute("src", "images/bomb.png");
  createBombElement.classList.add("bomb");
  grabGameWindow.appendChild(createBombElement);
  giveBombTopAndLeftPositionValue();
}

function deleteBomb() {
  grabGameWindow.removeChild(createBombElement);
}

function createCat() {
  createCatElement.setAttribute("src", "images/cat.png");
  createCatElement.classList.add("cat");
  grabGameWindow.appendChild(createCatElement);
  giveCatTopAndLeftPositionValue();
}

function deleteCat() {
  grabGameWindow.removeChild(createCatElement);
}

function catAddEventListener() {
  createCatElement.addEventListener("click", addOneToCounter);
}
catAddEventListener();

function addOneToCounter() {
  scoreValue++;
  if (scoreValue == 5) {
    checkValueChangeInterval();
  }
  counterValue.textContent = "Points: " + scoreValue;
}

function bombAddEventListener() {
  createBombElement.addEventListener("click", showYouLoseDiv);
}
bombAddEventListener();

function showYouLoseDiv() {
  loseWindow.style.zIndex = "999";
  endPoints.textContent = "Twój wynik: " + scoreValue;
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
    createCatElement.style.display = "block";
    createCat();
    createBombElement.style.display = "none";
  } else {
    createBombElement.style.display = "block";
    createBomb();
    createCatElement.style.display = "none";
  }
}

function checkValueChangeInterval() {
  clearInterval(showBombOrCat, intervalTimeOne);
  setInterval(showBombOrCat, intervalTimeTwo);
}

function checkForScoresTableOrSaveData() {
  let playerName = document.querySelector("#input");
  let playerObject = {
    name: playerName.value,
    score: scoreValue
  };

  if (localStorage.getItem("scoresTable") == null) {
    //jezeli nie ma scoresTable
    let firstTimeSave = JSON.stringify([playerObject]);
    localStorage.setItem("scoresTable", firstTimeSave); //zrob pusty array
  } else {
    let scoresBeforeParse = localStorage.getItem("scoresTable"); //json pobrany
    let scoresToObject = JSON.parse(scoresBeforeParse); //konwersja w obiekt
    let objectsArray = Array.from(scoresToObject);
    objectsArray.push(playerObject); //dodanie obiektu playera do arraya
    let updatedArrayReadyToSet = JSON.stringify(objectsArray); //array do wyslania
    localStorage.setItem("scoresTable", updatedArrayReadyToSet); //wysyla array
  }
}

/* TODO LIST 

-ekran z wynikami, pobierajacy storage, sortujacy array wynikami
-ogarnac Z-indexy divów (ekranów)
-poprawić range aby bomba nie wychodziła za ekran
-cssy, tła ładne
->>> podpiac pod strone
*/

function startGame() {
  startWindow.style.zIndex = "-999";
  setInterval(showBombOrCat, intervalTimeOne);
  setInterval(stopIntervalShowGameOver, 60000);
}

function stopIntervalShowGameOver() {
  clearInterval(showBombOrCat, intervalTimeOne);
  clearInterval(showBombOrCat, intervalTimeTwo);
  showYouLoseDiv();
}
