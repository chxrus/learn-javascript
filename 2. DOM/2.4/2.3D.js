'use strict';

// #1

/*
document.addEventListener('click', anchorHandler);

function anchorHandler(e) {
  const a = e.target.closest('a');
  if (!a) return;

  const href = a.href;
  // why using getAttribute('href') was a good idea idk
  const conf = confirm(`Leave for ${href}`);
  if (!conf) e.preventDefault();
}
*/

// #2

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');
thumbs.addEventListener('click', e => zoomImage(e, largeImg));

function zoomImage(e, preview) {
  const a = e.target.closest('a');
  if (!a || !e.currentTarget.contains(a)) return;
  console.log(e.currentTarget);
  e.preventDefault();
  preview.src = a.getAttribute('href');
}
