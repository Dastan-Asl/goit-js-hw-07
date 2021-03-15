const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientslistRef = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
    const liRef = document.createElement('li');
    liRef.textContent = ingredient;
    ingredientslistRef.appendChild(liRef)
})