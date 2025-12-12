

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');

const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const table = document.querySelector('.field');

let rows = [];

appendColumn.addEventListener('click', () => {

  const newColumn = document.querySelectorAll('tr')

  newColumn.forEach(column => {
    const newTd = document.createElement('td');
    column.appendChild(newTd);
  });
});

removeColumn.addEventListener('click', () => {
  const newColumn = document.querySelectorAll('tr');

  newColumn.forEach(column => {
    // Видаляємо останній <td>, якщо він існує
    if (column.lastElementChild && column.lastElementChild.tagName === 'TD') {
      column.removeChild(column.lastElementChild);
    }
  });


});



appendRow.addEventListener('click', () => {
  const newRow = document.createElement('tr')

  const newRow1 = document.createElement('td')
  const newRow2 = document.createElement('td')
  const newRow3 = document.createElement('td')
  const newRow4 = document.createElement('td')

  newRow.appendChild(newRow1);
  newRow.appendChild(newRow2);
  newRow.appendChild(newRow3);
  newRow.appendChild(newRow4);

  table.appendChild(newRow);

  rows.push(newRow);
})

removeRow.addEventListener('click', () => {
  rows.pop().remove();
});
