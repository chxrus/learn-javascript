'use strict';

function printSelectedOption(e) {
  document.body.insertAdjacentHTML('beforeend', `<p>${e.target.value}</p>`);
}

function addOption(select) {
  const option = new Option('Hyperpop', 'hyperpop', false, false);
  select.append(option);
}

function selectHyperpop(select) {
  select.options[2].selected = true;
}

const select = document.getElementById('genres');
addOption(select);
selectHyperpop(select);
select.addEventListener('change', printSelectedOption);
