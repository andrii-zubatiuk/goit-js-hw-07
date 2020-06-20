const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', handleInputValid);

function handleInputValid(event) {
  const validLength = inputRef.getAttribute('data-length');

  const inputValue = event.target.value;

  inputValue.length === Number(validLength) //или можно еще так привести к числу +validLength
    ? inputRef.classList.add('valid')
    : inputRef.classList.add('invalid');
}
