const CELL_WIDTH = 10;  // from CSS: .cell {width: 10px};
const CELL_BORDER_WIDTH = 2;  // from CSS: .cell {border: ... 1px};

const drawingBoard = document.querySelector('.drawing-board');

/* create a drawing drawingBoard given row and col sizes */
function makeGrid(rows, cols) {
  /* set the container width to fit the number of columns */
  drawingBoard.style.setProperty('width', `${cols * 
      (CELL_WIDTH + CELL_BORDER_WIDTH)}px`);

  for (let i = 0; i < (rows * cols); i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    drawingBoard.appendChild(cell);
  }
}

makeGrid(64, 64);
