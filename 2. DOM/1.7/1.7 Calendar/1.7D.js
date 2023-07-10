function createCalendar(elem, year, month) {
  // 7 x 6
  let table = document.createElement('table');
  table.append(getCalendarHeader());
  // month should start from zero in getCalendarBody
  table.append(getCalendarBody(year, month - 1));

  elem.append(table);
}

function getCalendarHeader() {
  const weekTitles = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  const thead = document.createElement('thead');
  const tr = document.createElement('tr');

  for (let title of weekTitles) {
    const th = document.createElement('th');
    th.textContent = title;
    tr.append(th);
  }

  thead.append(tr);
  return thead;
}

function getCalendarBody(year, month) {
  const days = [31, 28, 31, 
                30, 31, 30,
                31, 31, 30,
                31, 30, 31];
  const tbody = document.createElement('tbody');
  const date = new Date(year, month);
  const day = date.getDay() - 1;
  let counter = 1;

  for (let i = 0; i < 5; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < 7; j++) {
      const td = document.createElement('td');
      if (i == 0 && j < day || counter > days[month]) {
        td.innerText = ' ';
      } else {
        td.innerText = counter;
        counter++;
      }
      tr.append(td);
    }
    tbody.append(tr);
  }

  return tbody;
}

const container = document.querySelector('.container');
createCalendar(container, 2023, 4);