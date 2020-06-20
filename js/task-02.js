const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createListItem = ingredients => {
  const listRef = document.querySelector('#ingredients');

  ingredients.forEach(ingredient => {
    const listItemRef = document.createElement('li');
    listItemRef.textContent = ingredient;
    listRef.append(listItemRef);
  });

  return listRef;
};

createListItem(ingredients);
