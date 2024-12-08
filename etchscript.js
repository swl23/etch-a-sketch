window.addEventListener('DOMContentLoaded', () => {

    const defaultGridSize = 16;
    for (i = 0; i < defaultGridSize; i++) {
        createRow(i, defaultGridSize)
    };

    const body = document.querySelector('body');
    const resetButton = document.createElement('button');
    resetButton.setAttribute('id', 'reset-button');
    resetButton.textContent = 'Reset';
    resetButton.addEventListener('click', () => {
        buttonFunctionality()
    });
    body.prepend(resetButton);
})

function defaultGrid() {
    
}
function createRow(currentRow, totalRowCount) {
    const grid = document.getElementById('grid-container');
    let newRow = document.createElement('div');
    newRow.setAttribute('id', 'row' + currentRow);
    newRow.setAttribute('class', 'row-container');
    for (j = 0; j < totalRowCount; j++) {
        const newBox = document.createElement('div');
        newBox.setAttribute('class', 'square');
        newBox.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        newBox.addEventListener('mouseover', () => {
            let currentBoxRGB = newBox.style.backgroundColor;
            let currentOpacity = Number((currentBoxRGB.slice(14)).replace(')', ''));
            if (currentOpacity < 1.0) {
                let newOpacity = (currentOpacity + 0.1);
                let newBoxRGB = 'rgba(0, 0, 0, ' + newOpacity + ')';
                newBox.style.backgroundColor = newBoxRGB;
            }
        });
        newRow.appendChild(newBox)
    }
    grid.appendChild(newRow);
}

function buttonFunctionality() {
    const newGridSize = getGridSizeFromUser();
    const currentGridHeightWidth = getCurrentGridHeightWidth();
    removeCurrentGrid();
    createNewGridContainer(currentGridHeightWidth);
    for (i = 0; i < newGridSize; i++) {
        createRow(i, newGridSize)
    }
}

function getGridSizeFromUser() {
    const number = window.prompt('Please enter a number (100 or smaller) to generate the new grid.');
    if (number < 1 || number > 100) {
        if (alert('Input needs to be between 1 and 100.')) {}
        else {
            window.location.reload();
        }
    }
    else {
        return number
    }
}

function getCurrentGridHeightWidth() {
    const currentGrid = document.getElementById('grid-container');
    const currentGridDimensions = [];
    currentGridDimensions.push(currentGrid.scrollHeight);
    currentGridDimensions.push(currentGrid.scrollWidth);
    return currentGridDimensions
}

function removeCurrentGrid() {
    const currentGrid = document.getElementById('grid-container');
    currentGrid.remove();
}

function createNewGridContainer(oldGridSize) {
    const body = document.querySelector('body');
    const newGridContainer = document.createElement('div');
    newGridContainer.setAttribute('id', 'grid-container');
    newGridContainer.setAttribute('height', oldGridSize[0]);
    newGridContainer.setAttribute('width', oldGridSize[1]);
    body.append(newGridContainer);
}