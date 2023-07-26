'use strict';

const ul = document.getElementById('ul');
ul.addEventListener('click', fileManagerHandler);
ul.onmousedown = 'return false';

function fileManagerHandler(e) {
  if (e.target.nodeName != 'LI') return;

  if (!(e.ctrlKey || e.metaKey)) {
    const ul = e.target.closest('ul');
    for (let li of ul.children) {
      li.classList.remove('selected');
    }
  }

  if (e.target.classList.contains('selected')) {
    e.target.classList.remove('selected');
  } else {
    e.target.classList.add('selected');
  }
}
