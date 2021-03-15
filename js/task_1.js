const listRef = document.querySelector('#categories');

const quantityCategories = listRef.children.length;

console.log(`В списке ${quantityCategories} категории.`);

const liRef = document.querySelectorAll('.item')

liRef.forEach(li => {
    console.log(`Категория: ${li.firstElementChild.textContent}
            Количество элементов: ${li.lastElementChild.children.length}`)
})

