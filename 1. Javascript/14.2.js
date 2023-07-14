'use strict';

while (true) {
  let expr = prompt('input a mathematical expression', '');
  let result = window.eval(expr);
  alert(result);
}
