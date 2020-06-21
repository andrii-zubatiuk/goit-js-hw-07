const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', handleInputValid);

function handleInputValid(event) {
  const validLength = inputRef.getAttribute('data-length');

  const inputValue = event.target.value;

  if (inputValue.length === +validLength) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
}
