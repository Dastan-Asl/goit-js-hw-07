const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

const textInInput = () => {
    if (inputRef.value.length > 0) {
        spanRef.textContent = inputRef.value
    } else if (inputRef.value.length === 0) {
        spanRef.textContent = "незнакомец"
    }
};

inputRef.addEventListener('input',textInInput);

