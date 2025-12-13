const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');

const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const table = document.querySelector('.field');




// ---------------- ДОДАЮ КОЛОНКУ ----------------
appendColumn.addEventListener('click', () => {
  const columns = document.querySelectorAll('tr');

  columns.forEach((column) => {
    const td = document.createElement('td');

    column.appendChild(td);
  });
});

// ---------------- ВИДАЛЯЮ КОЛОНКУ ----------------
removeColumn.addEventListener('click', () => {
  const columns = document.querySelectorAll('tr');

  columns.forEach((column) => {
    if (column.lastElementChild) {
      column.removeChild(column.lastElementChild);
    }
  });
});

// ----------------  ДОДАЮ РЯДОК ----------------
appendRow.addEventListener('click', () => {
  const newRow = document.createElement('tr');

  const firstRow = table.querySelector('tr');
  const columnCount = firstRow ? firstRow.children.length : 0;

  // ДОДАЄМО СТІЛЬКИ Ж TD
  for (let i = 0; i < columnCount; i++) {
    const td = document.createElement('td');

    newRow.appendChild(td);
  }

  table.appendChild(newRow);
});

// ---------------- ВИДАЛЯЮ РЯДОК ----------------
removeRow.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');

  if (rows.length > 0) {
    rows[rows.length - 1].remove();
  }
});
