'use strict';

/* Warunek if */
var wzrostKasi= 167;
var wzrostPiotra = 170;

if (wzrostKasi < wzrostPiotra) {
    console.log ('To jest prawda');
}


/* Warunek if-else */
if (wzrostKasi > wzrostPiotra) {
    console.log ('To jest prawda');
} else {
    console.log ('To jest fałsz');
}

/* Warunek else if */
if (wzrostKasi > wzrostPiotra) {
    console.log ('To jest prawda');
} else if (wzrostKasi == wzrostPiotra) {
    console.log ('Kasia i Piotr są tego samego wzrostu');
} else {
    console.log ('To jest fałsz');
}

/* Warunek switch */
var kolor = 'zielony';

switch (kolor) {
    case 'czerwony':
        console.log('Kolor jest czerwony');
        break;
    case 'zielony':
        console.log('Kolor jest zielony');
        break;
    default:
        console.log('Inny kolor');
}