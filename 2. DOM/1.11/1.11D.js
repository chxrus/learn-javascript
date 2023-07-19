'use strict';

// #1

/*
const element = document.getElementById('field');

const rect = element.getBoundingClientRect();

alert(`${rect.left}, ${rect.top}`);
alert(`${rect.right}, ${rect.bottom}`);
alert(`${rect.left + element.clientLeft}, ${rect.top + element.clientTop}`);
alert(`${rect.right - (element.offsetWidth - element.clientWidth - element.clientLeft)}, ${rect.bottom - (element.offsetHeight - element.clientHeight - element.clientTop)}`);

// correct 4:
// x: coords.left + elem.clientLeft + elem.clientWidth,
// y: coords.top + elem.clientTop + elem.clientHeight
*/

// #2

/**
 * Позиционирует элемент elem относительно элемента anchor в соответствии со значением position.
 *
 * @param {Node} anchor     элемент, около которого позиционируется другой элемент
 * @param {string} position одно из: top/right/bottom
 * @param {Node} elem       элемент, который позиционируется
 *
 * Оба элемента elem и anchor должны присутствовать в документе
 */
function positionAt(anchor, position, elem) {
  // ... ваш код ...
  const rect = anchor.getBoundingClientRect();
  const elemRect = anchor.getBoundingClientRect();
  let x = elemRect.left;
  let y = elemRect.top;

  if (position === 'top') {
    x = rect.left;
    y = rect.top - elem.offsetHeight;
  } else if (position === 'top in') {
    x = rect.left;
    y = rect.top;
  } else if (position === 'right') {
    x = rect.right;
    y = rect.top;
  } else if (position === 'right in') {
    x = rect.right - elem.offsetWidth;
    y = rect.top;
  } else if (position === 'bottom') {
    x = rect.left;
    y = rect.bottom;
  } else if (position === 'bottom in') {
    x = rect.left;
    y = rect.bottom - elem.offsetHeight;
  }

  elem.style.left = `${x + window.scrollX}px`;
  elem.style.top = `${y + window.scrollY}px`;
}

// /**
//  * Показывает заметку с заданным содержимым на заданной позиции
//  * относительно элемента anchor.
//  */
function showNote(anchor, position, html) {
  let note = document.createElement('div');
  note.className = 'note';
  note.innerHTML = html;
  note.style.position = 'absolute';
  document.body.append(note);

  positionAt(anchor, position, note);
}

// test it
let blockquote = document.querySelector('blockquote');

showNote(blockquote, 'top', 'note above');
showNote(blockquote, 'right', 'note at the right');
showNote(blockquote, 'bottom', 'note below');
showNote(blockquote, 'top in', 'note top-in');
showNote(blockquote, 'bottom in', 'note bottom-in');
showNote(blockquote, 'right in', 'note right-in');