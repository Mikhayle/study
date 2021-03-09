let sum = 0;
let value;

do {
  value = prompt('Введите число');
  if (value !== null && !isNaN(+value)) {
    sum += +value;
  }
} while (value !== null);

alert('Сумма чисел: ' + sum);
