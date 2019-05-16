const grabGameWindow = document.querySelector("#gameWindow");
const counterValue = document.querySelector("#points");
const createBombElement = document.createElement("img");
const createCatElement = document.createElement("img");
const loseWindow = document.querySelector("#lose");
const startWindow = document.querySelector("#startWindow");
let endPoints = document.querySelector("#yourPoints");
let scoreValue = 0;
let intervalTimeOne = 1000;
let intervalTimeTwo = 850;

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
  if (scoreValue > 4) {
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
  clearInterval(showBombOrCat, intervalTimeTwo);
  setInterval(showBombOrCat, intervalTimeTwo);
}

function checkForScoresTableOrSaveData() {
  let playerName = document.querySelector("#input");
  let playerObject = {
    name: playerName.value,
    score: scoreValue
  };

  //if scoresTable item doesn't exisit in Local Storage, set first object
  if (localStorage.getItem("scoresTable") == null) {
    let firstTimeSave = JSON.stringify([playerObject]);
    localStorage.setItem("scoresTable", firstTimeSave);
  } else {
    // getExistingScoresTable
    let scoresBeforeParse = localStorage.getItem("scoresTable"); //json pobrany
    let scoresToObject = JSON.parse(scoresBeforeParse); //konwersja w obiekt
    let objectsArray = Array.from(scoresToObject);
    // then updateData
    objectsArray.filter(object => {
      let objectName = object.name;
      let objectNameToLower = objectName.toLowerCase();
      let playerN = playerName.value;
      let playerNameToLower = playerN.toLowerCase();

      if (objectNameToLower == playerNameToLower) {
        let duplicatedObject = object; // returns duplicated object
        if (scoreValue > duplicatedObject.score) {
          //if current score is higher then in localStorage
          duplicatedObject.score = scoreValue; // set new score value for that object
          //Make new array of not duplicated ones and push duplicated object with new score set
          let getAllNotDuplicatedArray = objectsArray.map(objecto => {
            let objectName = objecto.name;
            let objectNameToLower = objectName.toLowerCase();
            let playerN = playerName.value;
            let playerNameToLower = playerN.toLowerCase();

            if (!objectNameToLower == playerNameToLower) {
              return objecto;
            } else {
              false;
            }
          });
          getAllNotDuplicatedArray.push(duplicatedObject); //return new array with updated score
          //
          let updatedArrayReadyToSet = JSON.stringify(getAllNotDuplicatedArray); //array ready to send to LocalStorage in JSON
          localStorage.setItem("scoresTable", updatedArrayReadyToSet); //new updated scoresTable sent
        }
      } else {
        //if name typed in didn't exist yet, just add new player to scoresTable
        objectsArray.push(playerObject);
        let updatedArrayReadyToSet = JSON.stringify(objectsArray);
        localStorage.setItem("scoresTable", updatedArrayReadyToSet);
      }
    });
  }
}

// function saveFirstObject() {
//   //jezeli nie ma scoresTable
//   let firstTimeSave = JSON.stringify([playerObject]);
//   localStorage.setItem("scoresTable", firstTimeSave);
// }
// function getExistingScoresTable() {
//   let scoresBeforeParse = localStorage.getItem("scoresTable"); //json pobrany
//   let scoresToObject = JSON.parse(scoresBeforeParse); //konwersja w obiekt
//   let objectsArray = Array.from(scoresToObject);
// }
// function updateData() {
//   objectsArray.filter(object => {
//     let objectName = object.name;
//     let objectNameToLower = objectName.toLowerCase();
//     let playerN = playerName.value;
//     let playerNameToLower = playerN.toLowerCase();

//     if (objectNameToLower == playerNameToLower) {
//       let duplicatedObject = object; //zwraca obiekt zduplikowanego
//       if (scoreValue > duplicatedObject.score) {
//         //jezeli wynik jest wiekszy od tego w localStorage
//         duplicatedObject.score = scoreValue; //to ustal nowy score dla tego obiektu
//         //filtruj te ktore nie sa zduplikowane i dorzuc nowy z nowym score
// //         getAllNotDuplicated();
//       }
//     } else {
//       sendNotDuplicatedPlayerObject();
//     }
//   });
// }

// function getAllNotDuplicated() {
//   let getAllNotDuplicatedArray = objectsArray.filter(object => {
//     let objectName = object.name;
//     let objectNameToLower = objectName.toLowerCase();
//     let playerN = playerName.value;
//     let playerNameToLower = playerN.toLowerCase();

//     if (!objectNameToLower == playerNameToLower) {
//       return object;
//     }
//   });
//   getAllNotDuplicated.push(duplicatedObject); //zwraca array z nowym score jesli zduplikowany i wyzszy
//   //
//   let updatedArrayReadyToSet = JSON.stringify(getAllNotDuplicated); //array do wyslania
//   localStorage.setItem("scoresTable", updatedArrayReadyToSet); //wysyla array
// }

function sendNotDuplicatedPlayerObject() {
  //// jezeli nie ma duplikatow to pushnij nowego
  objectsArray.push(playerObject); //dodanie obiektu playera do arraya
  let updatedArrayReadyToSet = JSON.stringify(objectsArray); //array do wyslania
  localStorage.setItem("scoresTable", updatedArrayReadyToSet); //wysyla array
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

function showRanking() {
  let scoresBeforeParse = localStorage.getItem("scoresTable"); //json pobrany
  let scoresToObject = JSON.parse(scoresBeforeParse); //konwersja w obiekt
  let objectsArray = Array.from(scoresToObject);
  console.log(objectsArray);
}
// showRanking();
/*  
-pobierz scoresTable, zamien w array obiektow
-sortuj po wyniku
-sprawdz dlugosc
-wez pierwsze 10 lub mniej
-jezeli wynik uzytknika jest mniejszy niz 10ty w array to go nie zapisuj?
*/

// TODO
// czy chcesz nadpisac ranking?   n
