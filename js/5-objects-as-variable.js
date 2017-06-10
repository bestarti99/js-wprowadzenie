'use strict';

var student = {
    imie: 'Przemek',
    wzrost: 180,
    przedstawSie: function () {
        console.log("Cześć, mam na imię " + student.imie + ' i mam ' + this.wzrost + ' cm wzrostu.');
    }
}

/* wywołanie metody przedstawSie */
student.przedstawSie();

console.log(student);