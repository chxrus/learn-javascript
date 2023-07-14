'use strict';

// #1

/*
let user = {
  name: 'John',
};

function wrap(target) {
  return new Proxy(target, {
    get(target, prop, receiver) {
      let value = Reflect.get(target, prop, receiver);
      if (value === undefined) {
        throw new ReferenceError(`Свойство не существует: "${prop}"`);
      }
      return value;
    },
  });
}

user = wrap(user);

console.log(user.name); // John
console.log(user.age); // Ошибка: такого свойства не существует
*/

// #2

/*
let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop, receiver) {
    if (prop < 0) prop = +prop + target.length;
    return Reflect.get(target, prop, receiver);
  }
});

console.log( array[0] ); // 1
console.log( array[1] ); // 2
console.log( array[-1] ); // 3
console.log( array[-2] ); // 2
*/

// #3

// Version #1

// function makeObservable(target) {
//   return new Proxy(target, {
//     get(target, prop, receiver) {
//       if (prop === 'observe') {
//         target[prop] = function(handler) {
//           target[prop] = handler;
//         }
//       }

//       return Reflect.get(target, prop, receiver);
//     },

//     set(target, prop, value, receiver) {
//       if (target['observe']) target['observe'](prop, value);
//       return Reflect.set(target, prop, value, receiver);
//     },
//   });
// }

// let user = {};
// user = makeObservable(user);

// user.observe((key, value) => {
//   console.log(`SET ${key}=${value}`);
// });

// user.name = 'John'; // выводит: SET name=John

// Version 2

const handlers = Symbol('handlers');

function makeObservable(target) {
  target[handlers] = [];

  target.observe = function (handler) {
    target[handlers].push(handler);
  };

  return new Proxy(target, {
    set(target, prop, value, receiver) {
      let success = Reflect.set(target, prop, value, receiver); 
      target[handlers].forEach(handler => handler.call(target, prop, value));
      return success;
    },
  });
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
  console.log(`SET ${key}=${value}`);
});

user.name = 'John'; // выводит: SET name=John
