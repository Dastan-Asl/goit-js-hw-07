const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

const fonzSize = (event) => {
     spanRef.style.fontSize = event.currentTarget.value + 'px'
}

inputRef.addEventListener('input',fonzSize)