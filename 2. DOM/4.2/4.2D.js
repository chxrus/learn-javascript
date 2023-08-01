'use strict';

// #1

/*
const view = document.getElementById('view');
view.addEventListener('focusin', focusIn);
let data = '';

function focusIn(e) {
  e.target.remove();

  const textarea = document.createElement('textarea');
  document.body.append(textarea);
  textarea.classList.add('edit');
  textarea.innerHTML = data;
  textarea.focus();
  textarea.addEventListener('focusout', focusOut);
  textarea.addEventListener('keydown', function(e) {
    if (e.code === 'Enter') e.target.blur();
  })
}

function focusOut(e) {
  data = e.target.value;
  e.target.remove();

  const view = document.createElement('div');
  document.body.append(view);
  view.classList.add('view');
  view.innerHTML = data;
  view.setAttribute('id', 'view');
  view.tabIndex = '0';  
  view.addEventListener('focusin', focusIn);
}
*/

/*
const view = document.getElementById('view')
let edit = null;

view.addEventListener('click',  editDiv);

function editDiv(e) {
  edit = document.createElement('textarea');
  edit.value = e.target.innerHTML;
  edit.classList.add('edit');

  edit.addEventListener('focusout', (e) => {
    view.innerHTML = e.target.value;
    edit.replaceWith(view);
  });

  edit.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') e.target.blur();
  });

  view.replaceWith(edit);
  edit.focus();
}
*/

// #2

/*
const table = document.getElementById('bagua-table');
table.addEventListener('click', editTable);

function editTable(e) {
  const td = e.target.closest('td');

  if (!td || !e.currentTarget.contains(td)) return;
  if (document.getElementById('edit')) return;

  // textarea
  const html = td.innerHTML;
  const edit = document.createElement('textarea');
  td.classList.add('editable');
  edit.setAttribute('id', 'edit');
  edit.classList.add('edit');
  edit.style.width = `${td.clientWidth}px`;
  edit.style.height = `${td.clientHeight}px`;
  td.innerHTML = '';
  td.append(edit);
  edit.value = html;
  edit.focus();

  // buttons
  const btnOk = document.createElement('button');
  const btnCancel = document.createElement('button');
  edit.after(btnOk);
  edit.after(btnCancel);
  btnOk.textContent = 'OK';
  btnCancel.textContent = 'Cancel';
  btnOk.className = 'button';
  btnCancel.className = 'button';

  // buttons positioning
  const rect = edit.getBoundingClientRect();
  btnOk.style.left = `${rect.left}px`;
  btnOk.style.top = `${rect.top + edit.offsetHeight + 4}px`;
  btnCancel.style.left = `${rect.left + btnOk.offsetWidth + 4}px`;
  btnCancel.style.top = `${rect.top + edit.offsetHeight + 4}px`;

  // buttons events
  btnOk.onclick = e => {
    td.classList.remove('editable');
    td.innerHTML = edit.value;
    edit.remove();
    btnOk.remove();
    btnCancel.remove();
  };

  btnCancel.onclick = e => {
    td.classList.remove('editable');
    td.innerHTML = html;
    edit.remove();
    btnOk.remove();
    btnCancel.remove();
  };
}
*/

const mouse = document.getElementById('mouse');
mouse.tabIndex = 0;

mouse.addEventListener('focus', mouseFocusHandler);
mouse.addEventListener('blur', mouseBlurHandler);

function mouseFocusHandler(e) {
  e.target.addEventListener('keydown', moveMouse);
}

function mouseBlurHandler(e) {
  e.currentTarget.removeEventListener('keydown', moveMouse);
}

function moveMouse(e) {
  const velocityY = e.target.offsetHeight;
  const velocityX = e.target.offsetWidth;
  let y = parseFloat(e.target.style.top) || 0;
  let x = parseFloat(e.target.style.left) || 0;
  if (e.code === 'ArrowUp') e.target.style.top = y - velocityY + 'px';
  if (e.code === 'ArrowDown') e.target.style.top = y + velocityY + 'px';
  if (e.code === 'ArrowLeft') e.target.style.left = x - velocityX + 'px';
  if (e.code === 'ArrowRight') e.target.style.left = x + velocityX + 'px';
}
