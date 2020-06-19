const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', handleOutputChange);

function handleOutputChange(event) {
  event.target.value === ''
    ? (outputRef.textContent = 'незнакомец')
    : (outputRef.textContent = event.target.value);
}
