'use strict';

const formContainer = document.getElementById('prompt-form-container');
const buttonFormCaller = document.getElementById('button-form-caller');
formContainer.hidden = true;

buttonFormCaller.onclick = e =>
  showPrompt('Введите что-нибудь<br>...умное :)', function (value) {
    alert(value);
  });

function showPrompt(html, callback) {
  const form = formContainer.querySelector('form');
  formContainer.hidden = false;
  form.querySelector('#prompt-message').innerHTML = html;
  form.text.focus();
  form.tabIndex = '-1';
  document.body.style.overflowY = 'hidden';
  let value = null;

  // action with form
  form.text.onchange = e => (value = e.target.value);
  form.cancel.onclick = e => {
    callback(null);
    formContainer.hidden = true;
    document.body.style.overflowY = 'auto';
  };
  form.onsubmit = e => {
    if (!value) return false;
    document.body.style.overflowY = 'auto';
    callback(value);
  };
  document.onkeydown = e => {
    if (e.code == 'Escape') {
      callback(null);
      formContainer.hidden = true;
      document.body.style.overflowY = 'auto';
    }
  };

  // tabulating
  // fixed last element
  form.text.onkeydown = e => {
    if (e.code == 'Tab' && e.shiftKey) {
      form.lastElementChild.focus();
      return false;
    }
  };
  // fixed first element
  form.lastElementChild.onkeydown = e => {
    if (e.code == 'Tab' && !e.shiftKey) {
      form.text.focus();
      return false;
    }
  };
}
