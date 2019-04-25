// Zadanie 1
//   a) Napisz funkcję, która policzy sumę elementów w tablicy
//   b) Napisz funkcję, która policzy sumę ale tylko elementów typu number
console.log("//////////Zadanie1//////////")
function taskOne(){
  let arrayOne = [9, 3, '7', '3']; // 22
  let arrayTwo = ['5', '0', 9, 3, 2, 1, '9', 6, 7];  // 42
  let arrayThree = ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']; // 41
  /////////////////Zadanie 1a////////////////////////
  function taskOneA(array){
    let sumOne = array.reduce((acc, number) => acc + Number(number), 0);
    console.log(`Suma tej tablicy to: ${sumOne}`);
  }
  taskOneA(arrayOne);
  taskOneA(arrayTwo);
  taskOneA(arrayThree);
  //////////////////Zadanie 1b//////////////////////
  function taskOneB(array){
   let sumOne = 0 
   for(let i=0; i < array.length; i++){
     if(typeof array[i] === 'number'){
     sumOne += array[i];
     }
   }
   console.log("Suma elementów które są liczbami w tej tablicy to: " + sumOne);
 }
 taskOneB(arrayOne);
 taskOneB(arrayTwo);
 taskOneB(arrayThree);
}
taskOne();

// Zadanie 2

  // Uratuj biedne owieczki!
  // Jesteś pasterzem/pastereczką owiec I musisz pilnować swojego stada.
  // Napisz funkcję, która ostrzeże owce przed wilkiem lub przegoni wilka w zależności od pozycji.
  // [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]  \O/ <- to Ty! :)
  //     7     6      5      4      3            2      1
  // Zawsze stoisz przed swoi stadem, w przypadku, gdy wilk jest pomiędzy owcami ostrzeż owcę po prawej stronie wilka (w tym wypadku owcę nr 2. Komunikat ostrzegawczy przed wilkiem "Sheep number 2! RUN!!!"
  // W przypadku, gdy wilk jest najbliżej Ciebie wyświetl komunikat "Pls stop eating my sheeps!!!"
console.log("//////////Zadanie2//////////")
function taskTwo(){
  const sheepArrOne = ["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]; // "Sheep number 2! RUN!!!;
  const sheepArrTwo = ["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]; //"Sheep number 5! RUN!!!";
  const sheepArrThree = ["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]; //"Sheep number 6! RUN!!!";
  const sheepArrFour = ["sheep", "wolf", "sheep"]; //"Sheep number 1!  RUN!!!";
  const sheepArrFive = ["sheep", "sheep", "wolf"]; //"Pls stop eating my sheeps";

  function saveMySheeps(array){
   let wolfIndex = array.indexOf("wolf");
   if(wolfIndex === array.length - 1){
     console.log("Pls stop eating my sheeps!!!")
   }else{
    let sheepInDangerNumber = array.length - wolfIndex - 1;
     console.log("Sheep number " + sheepInDangerNumber + "! RUN!!!")
   }
  }
  saveMySheeps(sheepArrOne);
  saveMySheeps(sheepArrTwo);
  saveMySheeps(sheepArrThree);
  saveMySheeps(sheepArrFour);
  saveMySheeps(sheepArrFive);
}
taskTwo();

// Zadanie 3
//   Napisz funkcję, która zwróci inicjały imienia I nazwiska, czyli po podaniu np Harry Potter zwróci H.P
console.log("//////////Zadanie3//////////")
function taskThree(){
  function initials(){
   let firstName = window.prompt("Type your first name");
   let lastName = window.prompt("Type your surname");
   let firstLetter = firstName.charAt(0);
   let secondLetter = lastName.charAt(0);
   console.log(firstLetter + "." + secondLetter);
 }
initials();

}
taskThree();


// Zadanie 4
//   Napisz funkcję, która policzy sumę dodatnich liczb z tablicy. Użyj reduce
//   Dodatkowo (ulepsz funkcję o możliwość liczenia liczb dodatnich I sumowaniu ujemnych. Czyli policzenie ile jest liczb      dodatnich w tablicy I podaniu sumy ujemnych. [ ilośćDodatnich, sumaUjemnych ]
console.log("//////////Zadanie4//////////")
function taskFour(){
     const arrOne = [1,2,3,4,5];  //15
     const arrTwo = [1,-2,3,4,5]; //13
     const arrThree = []; // 0
     const arrFour = [-1,-2,-3,-4,-5]; //0
     const arrFive = [-1,2,3,4,-5]; //9

     function sumOfPositiveAndNegative(array){
       const positiveArrayOne = array.filter(number => number > 0);
       const howManyPositive = positiveArrayOne.length;
       const negativeArrayOne = array.filter(number => number < 0);
       const sumPositive= positiveArrayOne.reduce((sum, value) => sum + value, 0);
       const sumNegative= negativeArrayOne.reduce((sum, value) => sum + value, 0);
       const PositiveCountNegativeSum = [howManyPositive, sumNegative]
       console.log(`Suma dodatnich liczb w tablicy to: ${sumPositive}`);
       console.log(PositiveCountNegativeSum);
     }
  sumOfPositiveAndNegative(arrOne);
  sumOfPositiveAndNegative(arrTwo);
  sumOfPositiveAndNegative(arrThree);
  sumOfPositiveAndNegative(arrFour);
  sumOfPositiveAndNegative(arrFive);
}
taskFour();
// Zadanie 5
  // Czy zostanę junior developerem?? Trudne pytanie! Napisz funkcję, która pomoże rozwikłać zagadkę.
  // Wiemy, że żeby zostać junior developerem trzeba spełnić 2 warunki jednocześnie: A) przerobić odpowiednio dużo zadań B)     przepracować w czasie wolnym co najmniej 80h
console.log("//////////Zadanie5//////////")
function taskFive(){
   var students = [
  {name: 'Janusz', tasksDone: 150, hoursSpent: 160},
  {name: 'Karyna', tasksDone: 1, hoursSpent: 1},
  {name: 'Krystek', tasksDone: 100, hoursSpent: 80},
  {name: 'Seba', tasksDone: 200, hoursSpent: 40},
  {name: 'Dagmara', tasksDone: 50, hoursSpent: 100}
  ];
   var requirements = {
   minHoursSpent: 80,
   minTasksDone: 100
  };

  function gonnaBeJunior(){
    let goodStudents = [];
    let badStudents = [];
    for(var i = 0; i < students.length; i++){
      if(students[i].tasksDone >= requirements.minTasksDone && students[i].hoursSpent >= requirements.minHoursSpent){
        goodStudents.push(students[i].name);
      }else{
        badStudents.push(students[i].name);
      }
    }
    console.log(`${goodStudents} - gratulacje! Ciężka praca popłaca! ${badStudents} - DO ROBOTY LENIE `);
  }
  gonnaBeJunior();
}
taskFive();
// Funkcja powinna zwracać string w formie "imionaOsóbKtóreZostanąJuniorDeveloperem - gratulacje! Ciężka praca popłaca! imionaOsóbKtórymSięToNieUda DO ROBOTY LENIE!"

// Przykład: "Mariusz, Alicja - gratulacje! Ciężka praca popłaca! Ewelina, Marek - DO ROBOTY LENIE!"