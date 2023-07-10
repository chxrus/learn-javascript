'use strict'

// #1

/*
function f() {
    console.log("Hello!");
}

Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
}

f.defer(1000); // выведет "Hello!" через 1 секунду
*/

// #2

/*
function f(a, b) {
    console.log(a + b);
}

Function.prototype.defer = function(ms) {
    const func = this;
    return function(...args) {
        setTimeout(() => {
            return func(...args);
        }, ms);
    }
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
*/