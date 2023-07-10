'use strict'

// #1

// function unique(arr) {
//     return Array.from(new Set(arr));
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log(unique(values)); // Hare,Krishna,:-O

// #2

// function aclean(arr) {
//     let unique = new Map();

//     for (let item of arr) {
//         let key = item.toLowerCase().split('').sort().join('');
//         if (!unique.has(key)) {
//             unique.set(key, item);
//         }
//     }

//     return Array.from(unique.values());
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"

// #3

// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());

// keys.push("more");

// console.log(keys);