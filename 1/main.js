const userName = prompt('как Вас зовут?');
const userFirstName = prompt('Ваша фамилия?')
const userBirthYear = prompt('Введите Ваш год рождения?');
const Data = new Date();
const currentYear = Data.getFullYear();
const age = currentYear - userBirthYear;

if (age < 20) {
  alert('привет, ' + userName + ' ' + userFirstName + '!');
}

if (age >= 20 && age < 40) {
  alert('Добрый день, ' + userName + ' ' + userFirstName);
}

if (age >= 40) {
  alert('Здравствуйте, ' + userName + ' ' + userFirstName);
}
