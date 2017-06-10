'use strict';

var tablicaImion = ['Kasia', 'Artur', 'Robert'];

console.log(tablicaImion[2]);

tablicaImion[2] = 'Piotr'
console.log(tablicaImion[2]);

console.log(tablicaImion);


/*  DODANIE KOLEJNEGO ELEMENTU DO TABLICY push */
tablicaImion.push('Konrad');
console.log(tablicaImion);

/*  ODEJMOWNIE OSTATNIEGO ELEMENTU Z TABLICY pop */
tablicaImion.pop();
console.log(tablicaImion);

/*  DODANIE  ELEMENTU DO TABLICY NA POCZĄTEK unshift */
tablicaImion.unshift('Andrzej', 'Tomek');
console.log(tablicaImion);

/*  ODEJMOWNIE PIERWSZEGO ELEMENTU Z TABLICY shift */
tablicaImion.shift();
console.log(tablicaImion);


/* Wyświetlenie imion w kolejnych iteracjach */
console.log(tablicaImion.length);

for (var i = 0; i<tablicaImion.length; i++) {
    console.log('Imię studenta to ' + tablicaImion[i])
}

/* Połączenie imion z tablicy z domyślnym oddzieleniem przzecinkami*/
console.log(tablicaImion.join());
console.log(tablicaImion.join(" "));

/* ZWRÓCENIE TABLICY Z ODWRÓCONĄ KOLEJNOŚCIĄ reverse*/
console.log(tablicaImion.reverse());

/* SORTOWANIE ALFABETYCZNE sort */
console.log(tablicaImion.sort());

/* ODWRÓCONE SORTOWANIE ALFABETYCZNE sort .reverse */
console.log(tablicaImion.sort().reverse());

var noweImiona = ['Łukasz', 'Kamil']
/* Połącznie dwóch tablic concat*/
console.log(tablicaImion.concat(noweImiona));

/* Wyciągnięcie nr indeksu po wartości w tablicy */
console.log(tablicaImion.indexOf('Kasia'));

/* Wybranie elementów po indeksach -> tworzy tablice */
console.log(tablicaImion.slice(0, 2));

/* DODANIE NOWEGO ZAPISU NA KONKRETNYM POLU TABLICY splice */
console.log(tablicaImion.splice(2, 0, 'Ania'));
console.log(tablicaImion);








