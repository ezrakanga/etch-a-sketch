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
    // e.target.style.backgroundColor = 'bisque';
    const square = e.target;
    let originalR;
    let originalG;
    let originalB;
    let darkenCount;

    if (!square.dataset.originalR) {
      // generate random color on first interaction
      originalR = Math.floor(Math.random() * 256);
      originalG = Math.floor(Math.random() * 256);
      originalB = Math.floor(Math.random() * 256);

      // store original color values
      square.dataset.originalR = originalR;
      square.dataset.originalG = originalG;
      square.dataset.originalB = originalB;
      darkenCount = 0;
    } else {
      // get stored values for subsequent interactions
      originalR = parseInt(square.dataset.originalR);
      originalG = parseInt(square.dataset.originalG);
      originalB = parseInt(square.dataset.originalB);
      darkenCount = parseInt(square.dataset.darkenCount) || 0;
    }

    // limit to 10 darkening steps
    if (darkenCount < 10) {
      const darkenFactor = 1 - (darkenCount * 0.1);

      // calculate new color values
      const newR = Math.round(originalR * darkenFactor);
      const newG = Math.round(originalG * darkenFactor);
      const newB = Math.round(originalB * darkenFactor);

      // apply new color and update counter
      square.style.backgroundColor = `rgb(${newR}, ${newG}, ${newB})`;
      square.dataset.darkenCount = darkenCount + 1;
    }
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