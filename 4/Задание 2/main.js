function getAccess(login, password, users) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].login === login && users[i].password === password) {
      alert('Здравствуйте, ' + users[i].name + '!');
      return;
    };
  };
  alert('Ошибка авторизации!');
};
const users = [
  {
    login: 'Fast',
    password: 'cool2020',
    name: 'Александр'
  },
  {
    login: 'Slow',
    password: 'cool2019',
    name: 'Геннадий'
  },
  {
    login: 'Simple',
    password: 'cool2021',
    name: 'Евгений'
  }
];
const login = prompt('Введите логин');
const password = prompt('Введите пароль');

getAccess(login, password, users);
