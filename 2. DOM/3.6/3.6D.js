'use strict';

// #1

/*
fillPage();
document.addEventListener('scroll', fillPageHandler);

function fillPage() {
  while (document.body.offsetHeight < window.innerHeight) {
    placeDate();
  }
}

function fillPageHandler(e) {
  const scrollHeight = Math.max(
    document.body.scrollHeight,
    document.body.clientHeight,
    document.body.offsetHeight,
    document.documentElement.scrollHeight,
    document.documentElement.clientHeight,
    document.documentElement.offsetHeight
  );

  if (window.scrollY + window.innerHeight > scrollHeight - 100) {
    placeDate();
  }
}

function placeDate() {
  const p = document.createElement('p');
  p.innerHTML = `Date: ${new Date()}`;
  document.body.append(p);
}
*/

// #2

/*
fillPage();
function fillPage() {
  let counter = 100001;
  while (counter > 7) {
    document.body.insertAdjacentHTML(
      'beforeend',
      `<span>${((counter -= 7), counter)} <span>`
    );
  }
}

const homeButton = document.getElementById('home');
document.addEventListener('scroll', scrollHandler);
document.addEventListener('click', homeButtonHandler);

function scrollHandler(e) {
  const windowRelativeTop =
    document.documentElement.getBoundingClientRect().top;
  const visibleHeight = document.documentElement.clientHeight;
  const homeButton = document.getElementById('home');

  homeButton.classList.remove('circle--active');
  if (-windowRelativeTop > visibleHeight) {
    homeButton.classList.add('circle--active');
  }
}

function homeButtonHandler(e) {
  window.scrollTo(window.scrollX, 0);
}
*/

// #3

/**
 * Проверка видимости элемента (в видимой части страницы)
 * Достаточно, чтобы верхний или нижний край элемента был виден
 */
function isVisible(elem) {
  const rect = elem.getBoundingClientRect();

  if (scrollY + window.innerHeight * 2 >= rect.top) return true;
  return false;
}

function showVisible() {
  for (let img of document.querySelectorAll('img')) {
    let realSrc = img.dataset.src;
    if (!realSrc) continue;

    if (res) {
      // отключение кеширования
      // эта строка должна быть удалена в "боевом" коде
      // realSrc += '?nocache=' + Math.random();

      img.src = realSrc;
      img.dataset.src = '';
      img.dataset.realSrc = '';
    }
  }
}

window.addEventListener('scroll', showVisible);
showVisible();
