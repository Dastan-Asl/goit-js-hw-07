const counterValue = document.querySelector('#value');
const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');

const increment = () => {
    let num = Number(counterValue.textContent);
    return counterValue.textContent = num + 1;
}

const decrement = () => {
    let num = Number(counterValue.textContent);
    return counterValue.textContent = num - 1;
}

decrementBtnRef.addEventListener('click',  decrement);
incrementBtnRef.addEventListener('click', increment);





