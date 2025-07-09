
const boxes = document.querySelectorAll('.box');
const totalSpan = document.querySelector('.bottom-info .total'); // Target the total span

boxes.forEach((box) => {
  const header = box.querySelector('.box-header');
  header.addEventListener('click', () => {
    boxes.forEach(b => {
      b.classList.remove('expanded');
      b.querySelector('input[type="radio"]').checked = false;
      b.querySelector('.dropdowns').style.display = 'none';
    });

    box.classList.add('expanded');
    box.querySelector('input[type="radio"]').checked = true;
    box.querySelector('.dropdowns').style.display = 'block';

    const price = box.getAttribute('data-price');
    totalSpan.textContent = `Total : $ ${price} USD`;
  });
});


window.addEventListener('DOMContentLoaded', () => {
    const expandedBox = document.querySelector('.box.expanded');
    if (expandedBox) {
      const price = expandedBox.getAttribute('data-price');
      totalSpan.textContent = `Total : $ ${price} USD`;
    }
  });