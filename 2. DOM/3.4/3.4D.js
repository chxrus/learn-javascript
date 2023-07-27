'use strict';

function runOnKeys(func, ...codes) {
  document.addEventListener('keydown', handlerKeyDown);
  document.addEventListener('keyup', handlerKeyUp);

  const lastKeys = new Set();

  function handlerKeyDown(e) {
    lastKeys.add(e.code);

    if (codes.every(el => lastKeys.has(el))) {
      func();
      lastKeys.clear();
    }
  }

  function handlerKeyUp(e) {
    lastKeys.delete(e.code);
  }
}

runOnKeys(() => alert('Привет!'), 'KeyQ', 'KeyW', 'KeyZ');
