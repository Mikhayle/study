(function() {
  const randomNumber = getRandomNumber();
  let counter;

window.start = function() {
      counter = 0;
      if (isNaN(randomNumber)) return;
      let userValue;
      let userNumber;

      do {
        userValue = getUserNumber();
        userNumber = parseInt(userValue);
        if (userValue == null) return;

        if (randomNumber < userNumber) {
          alert('Меньше!');
          counter++;
        };

        if (randomNumber > userNumber) {
          alert('Больше!');
          counter++;
        };

        if (randomNumber === userNumber) {
          alert('Правильно!');
          return;
        };

      } while (counter < 10);
      alert('Нажмите F5, чтобы начать игру заново!')
    };    
})();
