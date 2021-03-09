let firstNumber;
do {
 firstNumber = parseInt( prompt('Введите число') );
} while ( (!isNaN(parseFloat(firstNumber)) && isFinite(firstNumber)) === false);

let seconNumber;
do {
 secondNumber = parseInt( prompt('Введите ещё одно число') );
} while ( (!isNaN(parseFloat(secondNumber)) && isFinite(secondNumber)) === false);


if (firstNumber > secondNumber) {
  alert('Первое число больше второго');
};

if (firstNumber < secondNumber) {
  alert('Второе число больше первого');
};

if (firstNumber === secondNumber) {
  alert('Числа равны');
};
