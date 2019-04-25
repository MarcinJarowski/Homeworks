*Zadanie 1*

1) Napisz funkcję, która policzy sumę elementów w tablicy



2) Napisz funkcję, która policzy sumę ale tylko elementów typu number

Dane:
```
[9, 3, '7', '3'] // 22
['5', '0', 9, 3, 2, 1, '9', 6, 7]  // 42
['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'] // 41
```

*Zadanie 2*

Uratuj biedne owieczki!

Jesteś pasterzem/pastereczką owiec I musisz pilnować swojego stada.

Napisz funkcję, która ostrzeże owce przed wilkiem lub przegoni wilka w zależności od pozycji.

```
[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]  \O/ <- to Ty! :)
    7     6      5      4      3            2      1
 ```

Zawsze stoisz przed swoi stadem, w przypadku, gdy wilk jest pomiędzy owcami ostrzeż owcę po prawej stronie wilka (w tym wypadku owcę nr 2.
Komunikat ostrzegawczy przed wilkiem "Sheep number 2! RUN!!!"

W przypadku, gdy wilk jest najbliżej Ciebie wyświetl komunikat "Pls stop eating my sheeps!!!"
```
 ["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]), "Sheep number 2! RUN!!!;
 ["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Sheep number 5! RUN!!!";
 ["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Sheep number 6! RUN!!!";
 ["sheep", "wolf", "sheep"]), "Sheep number 1!  RUN!!!";
 ["sheep", "sheep", "wolf"]), "Pls stop eating my sheeps";
 ```

*Zadanie 3*

Napisz funkcję, która zwróci inicjały imienia I nazwiska, czyli po podaniu np `Harry  Potter` zwróci `H.P`


*Zadanie 4*

Napisz funkcję, która policzy sumę dodatnich liczb z tablicy. Użyj `reduce`

```
[1,2,3,4,5]  //15
[1,-2,3,4,5] //13
[] // 0
[-1,-2,-3,-4,-5] //0
[-1,2,3,4,-5] //9
```

*Dodatkowo* (ulepsz funkcję o możliwość liczenia liczb dodatnich I sumowaniu ujemnych. Czyli policzenie ile jest liczb dodatnich w tablicy I podaniu sumy ujemnych. [ ilośćDodatnich, sumaUjemnych ]


Zadanie 5

Czy zostanę junior developerem??
Trudne pytanie! Napisz funkcję, która pomoże rozwikłać zagadkę.

Wiemy, że żeby zostać junior developerem trzeba spełnić 2 warunki jednocześnie:
A) przerobić odpowiednio dużo zadań
B) przepracować w czasie wolnym co najmniej 80h
```
 var students = [
{name: 'Janusz', tasksDone: 150, hoursSpent: 160},
{name: 'Karyna', tasksDone: 1, hoursSpent: 1},
{name: 'Krystek', tasksDone: 100, hoursSpent: 80},
{name: 'Seba', tasksDone: 200, hoursSpent: 40},
{name: 'Dagmara', tasksDone: 50, hoursSpent: 100}
]

 var requirements = {
 minHoursSpent: 80,
 minTasksDone: 100
}
```

Funkcja powinna zwracać string w formie
"imionaOsóbKtóreZostanąJuniorDeveloperem - gratulacje! Ciężka praca popłaca! imionaOsóbKtórymSięToNieUda DO ROBOTY LENIE!"

Przykład: `"Mariusz, Alicja - gratulacje! Ciężka praca popłaca! Ewelina, Marek - DO ROBOTY LENIE!"`



## Punktacja
2 pkt za zrobienie wszystkich zadań

1 pkt  dodatkowy za rozwiązanie w zadaniu 4 gwiazdki :)

### Termin: 30.03.2019 12:00
