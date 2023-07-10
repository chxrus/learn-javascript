'use strict'

// #1

/*
function spy(func) {
    
    let innerFunction = function(...args) {
        innerFunction.calls.push(args);
        func.apply(this, args);
    }

    innerFunction.calls = [];

    return innerFunction;
}

function work(a, b) {
    console.log(a + b); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}
*/

// #2

/*
function delay(func, ms) {
    return function(...args) {
        setInterval(() => {
            func.apply(this, args);
        }, ms);
    }
}

function f(x) {
    console.log(x);
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test1"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс
*/

// #3

/*
function debounce(func, ms) {
    let isProcessing = false;

    function wrapper(...args) {
        if (!isProcessing) {
            func.apply(this, args);
            
            isProcessing = true;
            setTimeout(() => {
                isProcessing = false;
            }, ms);
        }
    }

    return wrapper;
}

let f = debounce(console.log, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего
*/

// #4
/*
function throttle(func, ms) {
    let isProcessing = false;
    let wasLastRefreshed = false;
    let last;

    function wrapper(...args) {
        if (!isProcessing) {
            func.apply(this, args);
            
            isProcessing = true;
            setTimeout(() => {
                isProcessing = false;
                if (wasLastRefreshed) {
                    func.apply(this, last);
                    wasLastRefreshed = false;
                }
            }, ms);
        } else {
            last = args;
            wasLastRefreshed = true;
        } 
    }

    return wrapper;
}

function f(a) {
    console.log(a)
  }
  
  // f1000 передаёт вызовы f максимум раз в 1000 мс
  let f1000 = throttle(f, 1000);
  
  f1000(1); // показывает 1
  f1000(2); // (ограничение, 1000 мс ещё нет)
  f1000(3); // (ограничение, 1000 мс ещё нет)
  setTimeout(() => {
    f1000(8);
  }, 1001);

  // когда 1000 мс истекли ...
  // ...выводим 3, промежуточное значение 2 было проигнорировано
*/


