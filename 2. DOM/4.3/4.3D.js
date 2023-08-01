'use strict';

const form = document.forms.calculator;
perform();

form.money.oninput = perform;
form.interest.oninput = perform;
form.months.onchange = perform;

function perform() {
  let initialValue = +form.money.value ?? 0;
  let interestValue = +form.interest.value ?? 0;
  let yearsValue = +form.months.value / 12 ?? 0;

  const result = Math.round(
    initialValue * (1 + interestValue / 100) ** yearsValue
  );

  const moneyBefore = document.getElementById('money-before');
  moneyBefore.textContent = `${initialValue}`;
  const moneyAfter = document.getElementById('money-after');
  moneyAfter.textContent = `${result}`;

  const heightAfter = document.getElementById('height-after');
  heightAfter.style.height = `${(100 * result) / initialValue}px`;
}
