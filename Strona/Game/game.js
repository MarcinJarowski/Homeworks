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
  createCatElement.setAttribute("src", "images/Cat-icon.png");
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

function giveCatTopAndLeftPositionValue(){
  let cat = document.querySelector('.cat');
  cat.style.top = (Math.floor(Math.random() * 500) + 80) + 'px';
  cat.style.left = (Math.floor(Math.random() * 800) + 50) + 'px';
}
function giveBombTopAndLeftPositionValue(){
  let bomb = document.querySelector('.bomb');
  bomb.style.top = (Math.floor(Math.random() * 500) + 80) + 'px';
  bomb.style.left = (Math.floor(Math.random() * 800) + 50) + 'px';
}

setInterval(createBomb, 1000);
setInterval(createCat, 1000);

