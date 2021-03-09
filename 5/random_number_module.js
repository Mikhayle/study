(function() {
  let range;
  function getRange() {
    do {
      range = prompt('Введите число, которое будет определять диапазон генерации случайного числа от "0"' );
      if (range == null) return;
      if (!isNumber(range)) {
        alert('Введите число!');
      };
    } while (!isNumber(range));
    return parseInt(range);
  };
  getRandomNumber = function() {return Math.round( Math.random() * getRange() )};
  return getRandomNumber;
})();
