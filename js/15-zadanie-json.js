'use strict';

var pracownicy = {
    "pracownicy": [
        {
            "firstName": "Krystian",
            "lastName": "Dziopa"
        },
        {
            "firstName": "Anna",
            "lastName": "Szapiel"
        },
        {
            "firstName": "Piotr",
            "lastName": "Żmuda"
        }
]
}

/*
Za pomocą pętli forEach przeiteruj po każdym pracowniku, oraz wyświetl w konsoli index elementu tablicy oraz imie i nazwisko pracownika.
*/

pracownicy.pracownicy.forEach(function (elem, index) {
    console.log('Pracownik ' + (index + 1) + ' ma na imię ' + elem.firstName + ' i na nazwisko ' + elem.lastName);
});

console.log('Pracownik 1 ma na imię ' + pracownicy.pracownicy[0].firstName + ' i na nazwisko ' + pracownicy.pracownicy[0].lastName);