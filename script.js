const body = document.querySelector('body');
const container = document.querySelector('.container');

// grid creation
function createGrid(squarePerSide) {

  // clear existing grid
  container.innerHTML = '';

  // calculate cell dimensions
  let percentageSquareSize = 100 / squarePerSide;

  // create squares
  for (let i = 0; i < squarePerSide * squarePerSide; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.flex = `0 0 ${percentageSquareSize}%`;
    square.style.height = `${percentageSquareSize}%`;
    container.appendChild(square);
  }  
}
createGrid(8);

// grid resizing
function changeGridSize() {
  let newSize = prompt('How many squares do you want (max 100)?', 8);
  newSize = parseInt(newSize);

  if (newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert('Choose number between 1-100!');
    changeGridSize();
  }
}

// hover effect
container.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('square')) {
    e.target.style.backgroundColor = 'bisque';
  }
})

// button creation
const btn = document.createElement('button');
btn.classList.add('btn');
btn.textContent = 'Change grid size';
body.appendChild(btn);

// button event handler
btn.addEventListener('click', () => {
  changeGridSize();
})

// reset button creation
const reset = document.createElement('button');
reset.classList.add('reset');
reset.textContent = 'Reset';
body.appendChild(reset);

// button event handler
reset.addEventListener('click', () => {
  document.querySelectorAll('.square').forEach(square => {
    square.style.backgroundColor = 'lightblue';
  })
})