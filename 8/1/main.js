'use strict';

try {
  const varible = prompt("Придумайте переменную, определите ее в коде, задайте ей значение");
  eval(varible);
  const userCode = prompt('Напишите код вывода в консоль Вашей переменной');
  eval(userCode);
} catch (ex) {
  console.log('Возникла ошибка: ' + ex);
}
