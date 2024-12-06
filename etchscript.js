window.addEventListener('DOMContentLoaded', () => {
    for (i = 0; i < 16; i++) {
        createRow(i)
    };
})

function createRow(x) {
    const grid = document.getElementById('grid-container');
    let newRow = document.createElement('div');
    newRow.setAttribute('id', 'row' + x);
    newRow.setAttribute('class', 'row-container');
    for (j = 0; j < 16; j++) {
        const newBox = document.createElement('div');
        newBox.setAttribute('class', 'square');
        newBox.addEventListener('mouseover', () => {
            newBox.setAttribute('class', 'square hovered-square');
        }, {once: true});
        newRow.appendChild(newBox)
    }
    grid.appendChild(newRow);
}