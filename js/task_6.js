const inputRef = document.querySelector('#validation-input');

const validator = function () {
    if (inputRef.value.length === parseInt(inputRef.getAttribute('data-length'))) {
        return inputRef.classList.add('valid')
    }

    inputRef.classList.add('invalid')
}



inputRef.addEventListener('change', validator)