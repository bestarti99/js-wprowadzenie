'use strict';

var jsonOsoby = {
     "osoby": [
         {
             imie: "Krystian",
             nazwisko: "Dziopa",
             wzrost: 180,
             oczy: "niebieskie",
             zainteresowania: [
                 { nazwa: "podroze" },
                 { nazwa: "gotowanie" }
             ]
         },
         {
             imie: "Dominik",
             nazwisko: "Gomuła",
             wzrost: 170,
             oczy: "brązowe",
             zainteresowania: [
                 { nazwa: "gotowanie" },
                 { nazwa: "języki" }
             ]
         },
         {
             imie: "Claudia",
             nazwisko: "Żelazowska",
             wzrost: 167,
             oczy: "brązowe",
             zainteresowania: [
                 { nazwa: "programowanie" },
                 { nazwa: "podroze" },
                 { nazwa: "języki" }
             ]

         }
     ]
}

console.log(jsonOsoby);

/*  WYCIĄGANIE ZAINTERESOWANIA DLA DOMINIKA*/
console.log(jsonOsoby.osoby[1].zainteresowania);
jsonOsoby.osoby[1].zainteresowania.forEach( function(element, index) {
    console.log('Zainteresowanie ' + index + ' to ' + element.nazwa);
});





