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