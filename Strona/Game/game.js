const grabGameWindow = document.querySelector("#gameWindow");
const counterValue = document.querySelector("#points");
const createBombElement = document.createElement("img");
const createCatElement = document.createElement("img");
const loseWindow = document.querySelector("#lose");
const startWindow = document.querySelector("#startWindow");
const scoresTable = document.querySelector("#scoresTable");
let endPoints = document.querySelector("#yourPoints");
let scoreValue = 0;
let intervalTimeOne = 1000;
let intervalTimeTwo = 960;

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
  counterValue.textContent = "Punkty: " + scoreValue;
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
  bomb.style.top = Math.floor(Math.random() * 440) + 80 + "px";
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
function startGame() {
  startWindow.style.zIndex = "-999";
  setInterval(showBombOrCat, intervalTimeOne);
  setTimeout(changeDifficultyOne, 10000);
  setTimeout(stopIntervalShowGameOver, 60000);
}
function changeDifficultyOne() {
  console.log("dupa");
  clearInterval(showBombOrCat, intervalTimeOne);
  setInterval(showBombOrCat, intervalTimeTwo);
}
function stopIntervalShowGameOver() {
  clearInterval(showBombOrCat, intervalTimeOne);
  clearInterval(showBombOrCat, intervalTimeTwo);
  showYouLoseDiv();
}

function saveScore() {
  let playerName = document.querySelector("#nameInput").value;
  let playerScore = {
    name: playerName,
    score: scoreValue
  };

  const scoreboard = JSON.parse(localStorage.getItem("scoreboard")) || []; // jak jest w localStorage 'scoreboard' to weź, a jak nie to pusta tablica
  const duplicateRecord = scoreboard.find(score => score.name === playerName); // szukamy czy jest duplikat

  const updatedScoreboard = duplicateRecord
    ? updateScoreboard(scoreboard, duplicateRecord, scoreValue) // jak jest duplikat to robimy brzydką podmiankę, funkcja jest niżej
    : [...scoreboard, playerScore]; // jak nie ma to bierzemy wszystko co było i dorzucamy nasz wynik

  localStorage.setItem("scoreboard", JSON.stringify(updatedScoreboard)); // ładujemy do localstorage
  scoresTable.style.zIndex = "999";
  listRanking();
}

const updateScoreboard = (scoreboard, record, newScore) => {
  record.score = newScore;
  return scoreboard;
};

const listRanking = () => {
  const rankingBoard = document.querySelector("#ranking");
  const scoreboard = JSON.parse(localStorage.getItem("scoreboard"));
  let n = 0;
  let sortArray = scoreboard.sort(
    (a, b) => parseFloat(b.score) - parseFloat(a.score)
  );
  console.log(sortArray);
  let firstTen = sortArray.slice(0, 10);
  console.log(firstTen);
  firstTen
    .map(object => {
      n = n + 1;
      let newLi = document.createElement("li");
      let place = document.createElement("p");
      let name = document.createElement("p");
      let score = document.createElement("p");
      newLi.appendChild(place);
      newLi.appendChild(name);
      newLi.appendChild(score);
      place.textContent = n;
      name.textContent = object.name;
      score.textContent = `Pkt: ${object.score}`;
      console.log(newLi);
      return newLi;
    })
    .forEach(item => rankingBoard.appendChild(item));
};

// let orderList = document.querySelector("#ranking");
/* TODO LIST 

-ekran z wynikami, pobierajacy storage, sortujacy array wynikami
-ogarnac Z-indexy divów (ekranów)
-poprawić range aby bomba nie wychodziła za ekran
-cssy, tła ładne
->>> podpiac pod strone
*/
/*  
-pobierz scoresTable, zamien w array obiektow
-sortuj po wyniku
-sprawdz dlugosc
-wez pierwsze 10 lub mniej
-jezeli wynik uzytknika jest mniejszy niz 10ty w array to go nie zapisuj?
*/

// TODO
// czy chcesz nadpisac ranking?   n
