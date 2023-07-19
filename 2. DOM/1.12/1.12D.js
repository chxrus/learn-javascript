'use strict';

// #1

/*
function hideText() {
  const text = document.getElementById('text');
  text.hidden = true;
}

const btn = document.getElementById('hider');
btn.onclick = hideText;
*/

// #2

/*
const btn = document.getElementById('hider');
btn.onclick = function() {
  this.hidden = true;
};
*/

// #4

/*
const field = document.getElementById('field');
const ball = document.getElementById('ball');

function elementToMouse(elem, event) {
  elem.style.position = 'absolute';
  const target = event.currentTarget;
  const targetRect = target.getBoundingClientRect();
  const y = event.clientY - elem.offsetHeight / 2;
  const x = event.clientX - elem.offsetWidth / 2;
  const normalizedX = Math.min(
    Math.max(x, targetRect.left + target.clientLeft),
    targetRect.right - target.clientLeft - elem.clientWidth
  );
  const normalizedY = Math.min(
    Math.max(y, targetRect.top + target.clientTop),
    targetRect.bottom - target.clientTop - elem.offsetHeight
  );

  elem.style.left = `${normalizedX + window.scrollX}px`;
  elem.style.top = `${normalizedY + window.scrollY}px`;
}

field.addEventListener('mousedown', event => elementToMouse(ball, event));
*/

// #5
/*
function dropdownShowing(event, list) {
  const dropdownTitle = event.currentTarget;

  if (dropdownTitle.classList.contains('dropdown-title-closed')) {
    dropdownTitle.classList.remove('dropdown-title-closed');
    dropdownTitle.classList.add('dropdown-title-opened');
    list.hidden = false;
  } else if (dropdownTitle.classList.contains('dropdown-title-opened')) {
    dropdownTitle.classList.remove('dropdown-title-opened');
    dropdownTitle.classList.add('dropdown-title-closed');
    list.hidden = true;
  }
}

const dropdownTitle = document.querySelector('.dropdown-title');
const dropdownList = document.querySelector('.dropdown-list');
dropdownTitle.addEventListener('mousedown', event =>
  dropdownShowing(event, dropdownList)
);
*/

// #6

/*
function addCloseButton(plane) {
  const button = document.createElement('button');
  button.className = 'remove-button';
  button.innerText = '[x]';
  button.style.top = '0px';
  button.style.right = '10px';

  button.addEventListener('click', () => button.closest('.pane').remove());
  plane.append(button);
}

const planes = document.querySelectorAll('.pane');
planes.forEach(plane => addCloseButton(plane));
*/
function spinCarousel(feed, value) {
  feed.scrollLeft += feed.clientWidth * value;
}

const carousel = document.querySelector('.carousel .feed');
const leftButton = document.createElement('button');
const rightButton = document.createElement('button');

leftButton.className = 'carousel-button';
rightButton.className = 'carousel-button';
leftButton.innerText = '<';
rightButton.innerText = '>';

leftButton.addEventListener('click', e => spinCarousel(carousel, -1));
rightButton.addEventListener('click', e => spinCarousel(carousel, 1));

carousel.before(leftButton);
carousel.after(rightButton);
