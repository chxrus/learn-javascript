'use strict';

const lis = document.querySelectorAll('li');

for (let li of lis) {
  const title = li.childNodes[0].data.trim();
  const countLiChildren = li.querySelectorAll('li').length;
  alert(`${title}: ${countLiChildren}`);
}
