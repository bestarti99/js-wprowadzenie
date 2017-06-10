'use strict';

function addNumbers() {
    var num1 = 2;
    var num2 = 3.432;
    
    var wynik = num1 + num2;
    
    console.log ('Wynik dodawania wynosi ' + wynik); 
}

/* wywołanie funkcji, bez tego funkcja nie będzie widoczna*/
addNumbers();


/* Do dynamicznego podania funkcji przekzujemyu prarametry w nawiasie*/

function addNumbersWithParametr(par1, par2) {
    var num1 = par1;
    var num2 = par2;
    
    var wynik = num1 + num2;
    
    console.log ('Wynik dodawania wynosi ' + wynik); 
    
    /* kończenie funkcji i zwrócenie wyniku */
    return wynik;
    
}

addNumbersWithParametr(2,5);
addNumbersWithParametr(6.55, 4.455);
addNumbersWithParametr('cześć ', 'kolego');
addNumbersWithParametr('cześć ');

/* zapisanie wyniku do zmiennej i wyświetlenie jej */
var wynikFunkcji = addNumbersWithParametr(6,9);
console.log(wynikFunkcji)



function evenNumbersCount(par1, par2, par3) {
    
    var evenNumbers = 0;
    
    for (var i = par1; i <= par2; i++){
        if(i%par3 == 0) {
            evenNumbers++;
        }
    }
    
    return evenNumbers;
}

