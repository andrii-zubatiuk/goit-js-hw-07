const renderButtonRef = document.querySelector('button[data-action="render"]');
const destroyButtonRef = document.querySelector('button[data-action="destroy"]');
const inputRef = document.querySelector('#controls>input');
const boxesRef = document.querySelector('#boxes');

renderButtonRef.addEventListener('click', () => createBoxes(inputRef.value));
destroyButtonRef.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const size = 30 + i * 10;
    const boxRef = document.createElement('div');
    boxRef.style.backgroundColor = random_rgb();
    boxRef.style.width = `${size}px`;
    boxRef.style.height = `${size}px`;
    boxesRef.append(boxRef);
  }
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
}

function random_rgb() {
  const o = Math.round;
  const r = Math.random;
  const s = 255;
  return 'rgb(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ')';
}
