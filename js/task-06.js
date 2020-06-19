const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', handleInputValid);

function handleInputValid(event) {
  const validValue = inputRef.getAttribute('data-length');

  const inputValue = event.target.value;

  inputValue.length === Number(validValue) //или можно еще так привести к числу +validValue
    ? inputRef.classList.add('valid')
    : inputRef.classList.add('invalid');
}
