'use strict'

// #4

/*
function sum(value) {
    function sumInner(otherValue) {
        return value + otherValue;
    }

    return sumInner;
}

console.log(sum(1)(2));
*/

// #5

/*
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(start, stop) {
    function inBetweenInner(value) {
        return value >= start && value <= stop;
    }

    return inBetweenInner;
}

function inArray(list) {
    return function (value) {
        return list.includes(value);
    }
}

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2
*/

// #6

/*
function byField(field) {
    function byFieldInner(obj1, obj2) {
        return obj1[field] > obj2[field] ? 1 : -1;
    }

    return byFieldInner;
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" },
];

users.sort(byField('name'));
console.log(users);
users.sort(byField('age'));
console.log(users);
*/

// #7

/*
function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let shooter = function (value) {
            function shooterInner() {
                console.log(value);
            }

            return shooterInner;
        };

        shooters.push(shooter(i));
        i++;
    }

    return shooters;
}

let army = makeArmy();

army[0]();
army[5]();
*/
