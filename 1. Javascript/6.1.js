'use strict'

// #1

// with cycle
/*
function sumTo(num) {
    let total = num;

    while (num-- > 0) {
        total += num;
    }

    return total;
}
*/

// with recursion
/*
function sumTo(num, acc = 1) {
    return (num == 1) ? acc : sumTo(num - 1, acc + num);
}
*/

// with arithmetic progression
/*
function sumTo(num) {
    return (1 + num) * (num / 2);
}

console.log(sumTo(1))
console.log(sumTo(2))
console.log(sumTo(3))
console.log(sumTo(4))
console.log(sumTo(100))
*/

// #2

/*
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(5));
*/

// #3

/*
function fib(n) { return (n <= 2) ? 1 : fib(n - 1) + fib(n - 2) }

function fib(n) {
    let f1 = 0
    let f2 = 1

    for (let i = 0; i < n; i++) {
        [f1, f2] = [f1 + f2, f1];
    }

    return f1;
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757
*/

// #4

/*
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {
    while (list != null) {
        console.log(list.value)
        list = list.next;
    }
}

function printList(list) {
    if (list == null)
        return 0;

    console.log(list.value);
    printList(list.next);
}

printList(list);
*/

// #5

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printReversedList(list) {
    if (list == null) {
        return;
    }

    printReversedList(list.next);
    console.log(list.value);
}

function printReversedList(list) {
    let line = '';

    while (list != null) {
        line += `${list.value}`;
        list = list.next;
    }

    console.log([...line].reverse().join('\n'));
}

printReversedList(list);