const OPTIONS = {day: 'numeric', month: 'long', year: 'numeric',
 hour: 'numeric', minute: 'numeric', second: 'numeric'}
const SEPARATOR = ' ';
const ARRAY_LENGTH_MAX = 2;

function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.regDate = new Date().toLocaleString('ru', OPTIONS);
};

function UserList() {
  this.users = [],
  this.add = function(newUser) {
    this.users.push(newUser);
  },
  this.getAllUsers = function() {
    let result;
    for (let value of this.users) {
      result = 'Пользователь: ' + value.firstName + ' ' + value.lastName
       + ', ' + 'Зарегистрирован: ' + value.regDate;
      console.log(result);
    };
  }
};

(function() {
  const newUserList = new UserList();
  let fullName;
  while (true) {
    fullName = prompt('Введите имя и фамилию через пробел');
    if (fullName == null) break;
    const arrayOfFullName = fullName.trim().split(SEPARATOR);
    if (fullName.indexOf(SEPARATOR) === -1 ||
        arrayOfFullName.length !== ARRAY_LENGTH_MAX) {
      alert('Ошибка! Необходимо ввести фамилию и имя через пробел!');
      continue;
    };
    const firstName = arrayOfFullName[0];
    const lastName = arrayOfFullName[1];
    const newUser = new User(firstName, lastName);
    newUserList.add(newUser);
  };
  return newUserList.getAllUsers();
})();
