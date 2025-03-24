const container = document.querySelector('.container');

// create 16*16 grid
for (let i = 0; i < 256; i++) {

  const square = document.createElement('div');
  square.setAttribute('class', 'square');
  container.appendChild(square);
}

// event delegation of hover effect
container.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('square')) {
    e.target.style.backgroundColor = 'bisque';
  }
})