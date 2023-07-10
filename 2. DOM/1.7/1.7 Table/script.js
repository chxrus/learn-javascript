/*
function sortTable(table, column = 0) {
    const newTbody = document.createElement('tbody');
    const tbody = table.tBodies[0];
    const trs = tbody.rows;
    const trsArray = Array.from(trs);

    trsArray.sort((tr1, tr2) => {
        const columnText1 = tr1.cells[column].textContent;
        const columnText2 = tr2.cells[column].textContent;
        return columnText1.localeCompare(columnText2)
    });

    trsArray.forEach(tr => newTbody.append(tr.cloneNode(true)));
    table.innerHTML = newTbody.outerHTML;
}
*/

const table = document.querySelector('table');
// sortTable(table);
let sortedRows = Array.from(table.rows)
    .slice(1)
    .sort((rowA, rowB) => rowA.cells[0].textContent.localeCompare(rowB.cells[0].textContent));

table.append(...sortedRows);