'use strict';

var uczen = {
    name: 'Piotr',
    surname: 'Czerski'
};

console.log(uczen.name);

/* dodanie kolejnego parametru do obiektu */
uczen.wzrost = 178;

console.log(uczen);

uczen.printDetails = function() {
   return 'Ten uczeń ma na imię ' + this.name + ' i ma ' + this.wzrost + ' cm wzrostu';
}

console.log(uczen.printDetails());


/*  KLASA */
function Student(imie, nazwisko) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.wyswietlInfo = function() {
        return "Imię: " + this.imie + " , Nazwisko: " + this.nazwisko;
    }
} 

/* TWORZENIE INSTANCJI */
var kasia = new Student ('Katarzyna', 'Kostrzewa');

console.log(kasia);
console.log(kasia.wyswietlInfo());

/* Jeżeli jakiś paranmetr moźe być nieznane to można dodać wartość domyślną po || */
function Student(imie, nazwisko) {
    this.imie = imie;
    this.nazwisko = nazwisko || 'Nieznane';
    this.wyswietlInfo = function() {
        return "Imię: " + this.imie + " , Nazwisko: " + this.nazwisko;
    }
} 

/* TWORZENIE INSTANCJI */
var kasia = new Student ('Katarzyna');

console.log(kasia);
console.log(kasia.wyswietlInfo());