const incButtonRef = document.querySelector('button[data-action="increment"]');
const decButtonRef = document.querySelector('button[data-action="decrement"]');
const valRef = document.querySelector('#value');

let counterValue = 0;

incButtonRef.addEventListener('click', handleButtonIncrement);
decButtonRef.addEventListener('click', handleButtonDecrement);

function handleButtonIncrement() {
  counterValue += 1;
  valRef.textContent = counterValue;
}

function handleButtonDecrement() {
  counterValue -= 1;
  valRef.textContent = counterValue;
}
