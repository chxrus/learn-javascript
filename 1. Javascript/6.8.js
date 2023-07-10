'use strict'

// #1

/*
function printNumbers(from, to) {
    const second = 1_000;
    let current = from;

    setTimeout(function iterate() {
        console.log(current++);

        if (current >= to)
            return;
        
        setTimeout(() => {
            iterate();
        }, second);
    }, second);
}

function printNumbers(from, to) {
    const second = 1_000;
    let current = from;

    let timerId = setInterval(() => {
        console.log(current++);
        if (current >= to) {
            clearInterval(timerId);
        }
    }, second);
}

printNumbers(0, 10);
*/