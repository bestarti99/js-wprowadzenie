//tryb ścisły, chroni przed błędami składniowymi
'use strict';

var pierwszaZmienna = 10;

console.log(pierwszaZmienna);

var drugaZmienna;

drugaZmienna = '10';

console.log(drugaZmienna);


//zmienna nie zadeklarowana 
trzeciaZmienna = [0,1];

console.log(trzeciaZmienna);
// w console logu pojawi się błąd, bez "use stricta, nie będzie się pojawiał