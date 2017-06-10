'use strict';

var liczbaPierwsza = 5;
var liczbaDruga = 2;

console.log('reszta z dzielenia = ' + liczbaPierwsza % liczbaDruga);

/* inkrementacja */

while (liczbaPierwsza > liczbaDruga) {
    console.log(liczbaPierwsza);
    --liczbaPierwsza // odejmij jeden w kolejnej iteracji
}

/* Operatory przypisania */
var liczbaTrzecia = 6;

console.log(liczbaTrzecia);

liczbaTrzecia += 3;
liczbaTrzecia -= 1;
liczbaTrzecia *= 2;
liczbaTrzecia /= 4;  //podzielenia przez zero daje NIESKOŃCZONOŚĆ!! (infinty)
liczbaTrzecia %= 4;

console.log(liczbaTrzecia);


/* Operatory porównania */
if (2==2) {
    console.log('To jest prawda');
} else {
    console.log('To jest fałsz');
}


if ('2'==2) {
    console.log('To jest prawda');
} else {
    console.log('To jest fałsz');
}


if ('2'===2) {
    console.log('To jest prawda');
} else {
    console.log('To jest fałsz');
}

if ('2'!==2) {
    console.log('To jest prawda');
} else {
    console.log('To jest fałsz');
}


if ('true'!==true) {
    console.log('To jest prawda true!==true');
} else {
    console.log('To jest fałsz true!==true');
}

if (2 >= 2) {
    console.log('To jest prawda 2 >= 2');
} else {
    console.log('To jest fałsz 2 >= 2');
}


/* Operatory logiczne */
if(2 <=2 && 8>9) {
    console.log('To jest prawda 2 <=2 && 8>9');
} else {
    console.log('To jest fałsz 2 <=2 && 8>9');
}

if(2 <=2 || 8>9) {
    console.log('To jest prawda 2 <=2 || 8>9');
} else {
    console.log('To jest fałsz 2 <=2 || 8>9');
}


if(2 <=2 && 8>9 || 9<8) {
    console.log('To jest prawda 2 <=2 && 8>9 || 9<8');
} else {
    console.log('To jest fałsz 2 <=2 && 8>9 || 9<8');
}

/* negacja logiczna */

if(!(2<2)) {
    console.log('To jest prawda !2<2');
} else {
    console.log('To jest fałsz !2<2');
}

var test = 'na';
if(typeof test != 'string') {
    console.log('To jest string');
} else {
    console.log('To nie jest string');
}


/* Operator warunkowy */

var zmienna = (2<3)?'Dwa jest mniejsze od trzy':'To jest nieprawda';
console.log(zmienna);