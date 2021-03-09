(function() {
  const COUNT_OF_ATTEMPTS = 10;
  let randomNumber = getRandomNumber();  
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
      } while (counter < COUNT_OF_ATTEMPTS);
      const reload = confirm('Начать игру заново?');
      if (reload == true) {
        randomNumber = getRandomNumber();
        counter = 0;
        start();
      };
    };
})();
