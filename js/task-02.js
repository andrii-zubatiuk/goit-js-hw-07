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

  const arrItems = ingredients.map(ingredient => {
    const listItemRef = document.createElement('li');
    listItemRef.textContent = ingredient;

    return listItemRef;
  });

  listRef.append(...arrItems);
};

createListItem(ingredients);
