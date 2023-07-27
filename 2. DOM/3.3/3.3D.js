'use strict';

// #1

/*
document.addEventListener('mousedown', sliderFocus);

function sliderFocus(e) {
  if (e.target != document.querySelector('.thumb')) return;

  // Добавочные действия, что были в правильном решении
  //
  // event.preventDefault();
  //
  // thumb.ondragstart = function() {
  //   return false;
  // };

  e.currentTarget.addEventListener('mousemove', sliderMove);
  e.currentTarget.addEventListener('mouseup', sliderRelease);

  const sliderBar = e.target.closest('#slider');
  const shiftX =
    sliderBar.getBoundingClientRect().left +
    (e.clientX - e.target.getBoundingClientRect().left);

  moveAt(e.pageX - shiftX);

  function moveAt(x) {
    x = Math.min(Math.max(0, x), sliderBar.offsetWidth - e.target.offsetWidth);
    e.target.style.left = `${x}px`;
  }

  function sliderMove(e) {
    moveAt(e.pageX - shiftX);
  }

  function sliderRelease(e) {
    e.currentTarget.removeEventListener('mousemove', sliderMove);
    e.currentTarget.onmouseup = null;
  }
}
*/

// #2

document.addEventListener('mousedown', draggable);

function draggable(e) {
  if (!e.target.classList.contains('draggable')) return;

  e.preventDefault();
  e.target.ondragstart = function () {
    return false;
  };

  e.currentTarget.addEventListener('mousemove', dragMoving);
  e.currentTarget.addEventListener('mouseup', dragReleasing);
  const shiftX = e.clientX - e.target.getBoundingClientRect().left;
  const shiftY = e.clientY - e.target.getBoundingClientRect().top;
  e.target.style.position = 'absolute';

  moveAt(e.pageX - shiftX, e.pageY - shiftY);

  function moveAt(x, y) {
    let scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );

    x = Math.min(
      Math.max(0, x),
      document.body.offsetWidth - e.target.offsetWidth
    );
    y = Math.min(Math.max(0, y), scrollHeight - e.target.offsetHeight);

    e.target.style.left = `${x}px`;
    e.target.style.top = `${y}px`;
  }

  function dragMoving(e) {
    if (e.clientY > document.documentElement.clientHeight - 15)
      window.scrollBy(0, 5);
    if (e.clientY < 15) window.scrollBy(0, -5);
    moveAt(e.pageX - shiftX, e.pageY - shiftY);
  }

  function dragReleasing(e) {
    e.currentTarget.removeEventListener('mousemove', dragMoving);
    e.currentTarget.onmouseup = null;
  }
}
