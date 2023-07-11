'use strict'

// #1 

function* pseudoRandom(seed) {
  let value = seed;

  while (true) {
    value = value * 16_807 % 2_147_483_647;
    yield value;
  }
}

let generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073


function gen(start) {
  start *= 16_807 % 2_147_483_647;

  for (let i = start; ; i *= 16_807 % 2_147_483_647) {

  }
}