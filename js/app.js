document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const hallOfFameItem = createHallOfFameItem(event.target);
  const hallOfFame = document.querySelector('#hall-of-fame');
  hallOfFame.appendChild(hallOfFameItem);

  event.target.reset();
}

const createHallOfFameItem = function (form) {
  const hallOfFameItem = document.createElement('li');
  hallOfFameItem.classList.add('hall-of-fame-item');

  const name = document.createElement('h2');
  name.textContent = form.name.value;
  hallOfFameItem.appendChild(name);

  const nationality = document.createElement('h3');
  nationality.textContent = form.nationality.value;
  hallOfFameItem.appendChild(nationality);

  const position = document.createElement('p');
  position.textContent = form.position.value;
  hallOfFameItem.appendChild(position);

  return hallOfFameItem;
}

const handleDeleteAllClick = function (event) {
  const hallOfFame = document.querySelector('#hall-of-fame');
  hallOfFame.innerHTML = '';
}
