const grabGameWindow = document.querySelector("#gameWindow");
const counterValue = document.querySelector("#points");
const createBombElement = document.createElement("img");
const createCatElement = document.createElement("img");
const loseWindow = document.querySelector("#lose");
let scoreValue = 0;

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
  scoreValue++;
  counterValue.textContent = "Points: " + scoreValue;
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
    createCatElement.style.display = "block";
    createCat();
    createBombElement.style.display = "none";
  } else {
    createBombElement.style.display = "block";
    createBomb();
    createCatElement.style.display = "none";
  }
  checkValueChangeInterval();
}
let intervalTimeOne = 1000;
let intervalTimeTwo = 300;

setInterval(showBombOrCat, intervalTimeOne);

function checkValueChangeInterval() {
  if (scoreValue == 3) {
    clearInterval(showBombOrCat, intervalTimeOne);
    setTimeout(showBombOrCat, intervalTimeTwo);
  }
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

-ekran startowy, instrukcja i guzik start
-ekran z wynikami, pobierajacy storage, sortujacy array wynikami
-interval po nacisnieciu start, 60 sekund gry potem wywala ekran koniec gry,
stopuje pojawianie sie kotow i bomb
-ogarnac Z-indexy divów (ekranów)
-poprawić range aby bomba nie wychodziła za ekran
-ogarnac aby na koniec gry sie score pojawiał też
-cssy, tła ładne
->>> podpiac pod strone
*/
