'use strict';

var liczba = 10;

// w cudzysłowie traktowana jest jako tekst
var liczbaJakoTekst = "10";

console.log(liczba);
console.log(liczbaJakoTekst);

/* ZMIENNE TEKSTOWE */
var tekst = '  Dzień dobry! :)';

console.log(tekst);


/* dzielenie stringu na poszczególne wyrazy */
console.log(tekst.split(" "));
//tworzy tablice z poszczególnymi znakami

/* usuniecie niepotrzebnych spacji z tekstu */
console.log(tekst.trim(" "));

/* ZMIENNE LOGICZNE */
var zmiennaLogiczna = (2+2 == 5);

console.log(zmiennaLogiczna);

if(zmiennaLogiczna) {
    console.log('warunek spełniony');
} else {
        console.log('warunek nie spełniony');
}

/* TYPY SPECJALNE */
    
var zmiennaNiezdefiniowana;

console.log(zmiennaNiezdefiniowana);
    
var tablica = [null, 'łukasz', 'Michał'];
console.log(tablica[0]);

/* sprawdzenie typu zmiennej */
console.log(typeof zmiennaLogiczna);
console.log(typeof liczba);


