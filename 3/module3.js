(function() {
  let userValue;
  getUserNumber = function() {
    do {
      userValue = prompt('Введите число');
      if (userValue == null) return;
      if (!isNumber(userValue)) {
        alert('Введите число!')
      }
    } while (!isNumber(userValue));
    return userValue;
  };
  return getUserNumber;
})();
