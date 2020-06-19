const listRef = document.querySelector('#categories');
const itemsRef = document.querySelectorAll('.item');

console.log(`В списке ${listRef.children.length} категории`);

itemsRef.forEach(item => {
  console.log(`Категория: ${item.firstElementChild.innerText}`);
  console.log(`Количество элементов: ${item.lastElementChild.children.length}`);
});
