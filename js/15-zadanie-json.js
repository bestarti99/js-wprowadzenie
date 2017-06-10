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


pracownicy.pracownicy.forEach(function (elem, index) {
    console.log('Pracownik ' + (index + 1) + ' ma na imię ' + elem.firstName + ' i na nazwisko ' + elem.lastName);
});

console.log