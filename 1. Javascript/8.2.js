'use strict'

// #1.1

/*

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

console.log( rabbit.eats ); // ?

*/

// #1.2

/*
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

console.log( rabbit.eats ); // ?
*/

// #1.3

/*
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

console.log( rabbit.eats ); // ?
*/

// #1.4

/*
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

console.log( rabbit.eats ); // ?
*/

let protoBOB = {
    mushrooms: 10,
}

function User() {
    this.bananas = 0;
}
// В учебнике говорится, что строка ниже равназначна, когда мы ничего не объявляем
// User.prototype = { constructor: User };
// User.prototype = protoBOB;


let obj = new User();

let obj2 = new obj.constructor();


console.log('Obj');
for (let property in obj) {
    console.log(`${property}: ${obj[property]}`);
}

console.log('Obj2');
for (let property in obj2) {
    console.log(`${property}: ${obj[property]}`);
}