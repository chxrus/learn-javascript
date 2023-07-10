function task3() {
    const table = document.querySelector('table');
    for (let i = 0; i < table.rows.length; i++) {
        let row = table.rows[i];
        let cell = row.cells[i];

        cell.style.backgroundColor = '#e05561';
        cell.style.color = 'black';
    }
}

task3();