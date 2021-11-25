const CELL_BORDER_WIDTH = 2;

const drawingBoard = document.querySelector('.drawing-board');

function makeBoard(dim) {
  let boardSize = drawingBoard.clientWidth;  // get the width of the board excluding borders
  let cellSize = boardSize/dim - CELL_BORDER_WIDTH;
  console.log(cellSize);

  for (let i = 0; i < (dim ** 2); i++) {
    
    /* create grid cells (dim * dim) */
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.setProperty('width', `${cellSize}px`);
    cell.style.setProperty('height', `${cellSize}px`);

    /* change color on mouse hover */
    cell.addEventListener('mouseover', () => {
      cell.style.setProperty('background-color', 'black');
    });

    drawingBoard.appendChild(cell);
  }
}

function changeGridSize(size) {
  while (drawingBoard.firstElementChild) {
    drawingBoard.removeChild(drawingBoard.firstElementChild);
  }
  makeBoard(size);
}


function resetGrid() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.style.setProperty('background-color', '');
  });
}


function main() {
  // create board initially
  makeBoard(30);

  // button to clear all drawings
  const resetBtn = document.querySelector('.reset-button');
  resetBtn.addEventListener('click', resetGrid);


  // using range slider: 0 - 60 to change the grid sizes
  const sliderValue = document.querySelector('.slider-value');
  const slider = document.querySelector('.slider');
  slider.addEventListener('input', () => { 
    changeGridSize(slider.value); 
    sliderValue.textContent = slider.value;
  });
  sliderValue.textContent = slider.value;
}

// run the program
main();
