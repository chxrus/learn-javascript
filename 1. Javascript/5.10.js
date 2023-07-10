'use strict'

// #1

/*
let user = {
    name: "John",
    years: 30
};

let { name, years: age, isAdmin = false } = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false
*/

// #2

/*
function topSalary(salaries) {
    let maxSalary = -1;
    let nameWithMaxSalary = null;

    for (const [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            nameWithMaxSalary = name;
        }
    }

    return nameWithMaxSalary;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary(salaries));
*/