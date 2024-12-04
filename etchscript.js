window.addEventListener('DOMContentLoaded', () => {
    for (i = 0; i < 16; i++) {
        createRow(i)
    }
})

function createRow(x) {
    const grid = document.getElementById('grid-container');
    let newRow = document.createElement('div');
    newRow.setAttribute('id', 'row' + x);
    newRow.setAttribute('class', 'row-container');
    for (j = 0; j < 16; j++) {
        let newBox = document.createElement('div');
        newBox.setAttribute('class', 'square');
        newRow.appendChild(newBox)
    }
    grid.appendChild(newRow);
}