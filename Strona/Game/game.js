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
}
createBomb();

function deleteBomb() {
  grabGameWindow.removeChild(createBombElement);
}
// deleteBomb();

function createCat() {
  createCatElement.setAttribute("src", "images/Cat-icon.png");
  createCatElement.classList.add("cat");
  grabGameWindow.appendChild(createCatElement);
}
createCat();

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
