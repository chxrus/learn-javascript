'use strict';

// #1

/*
const container = document.getElementById('container');
container.addEventListener('click', e => removePane(e));

function removePane(event) {
  if (event.target.classList.contains('remove-button')) {
    const pane = event.target.closest('.pane');

    if (!pane) return;
    if (!container.contains(pane)) return;

    pane.remove();
  }
}
*/

// #2

/*
const tree = document.getElementById('tree');
tree.addEventListener('click', e => dropdownTree(e));

function dropdownTree(event) {
  if (event.target.tagName != 'SPAN') return;

  const parentLi = event.target.closest('li');
  if (!parentLi) return;
  if (!tree.contains(parentLi)) return;

  parentLi.querySelectorAll('ul').forEach(el => el.hidden = !el.hidden);
}
*/

// #3

/*
const grid = document.getElementById('grid');

class Table {
  constructor(table) {
    this._table = table;
    grid.tHead.rows[0].addEventListener('click', this.sortTable.bind(this));
  }

  sortTable(event) {
    const type = event.target.dataset.type;
    const cellIndex = event.target.cellIndex;

    for (let tbody of this._table.tBodies) {
      const sortedRows = [...tbody.rows].sort((tr1, tr2) => {
        const data1 = tr1.cells[cellIndex].firstChild.data;
        const data2 = tr2.cells[cellIndex].firstChild.data;
        return Table.sort(data1, data2, type);
      });

      tbody.append(...sortedRows);
    }
  }

  static sort(tr1, tr2, type) {
    switch (type) {
      case 'number':
        return +tr1 - +tr2;
      case 'string':
        return tr1.localeCompare(tr2);
    }
  }
}

new Table(grid);
*/

function mouseOver(e) {
  const tipData = e.target.dataset.tooltip;
  if (!tipData) return;

  const tooltip = document.createElement('div');
  document.body.append(tooltip);

  tooltip.classList.add('tooltip');
  tooltip.innerHTML = tipData;

  const rect = e.target.getBoundingClientRect();

  // middle of the parent
  let x = rect.left + (e.target.offsetWidth - tooltip.offsetWidth) / 2;
  // reset position if leaving the page
  if (x < 0) x = 0;
  // above the parent
  let y = rect.top - tooltip.offsetHeight - 5;
  // place below if has no place above
  if (y < 0) y = rect.top + e.target.offsetHeight + 5;

  tooltip.style.left = `${x}px`;
  tooltip.style.top = `${y}px`;
}

function mouseOut(e) {
  const tips = document.querySelectorAll('.tooltip');
  tips.forEach(tip => tip.remove());
}

document.addEventListener('mouseover', mouseOver);
document.addEventListener('mouseout', mouseOut);
