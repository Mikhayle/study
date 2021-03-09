TITLE_OF_LENGTH = ['метр', 'метра', 'метров'];
TITLE_OF_WEIGHT = ['килограмм', 'килограмма', 'килограммов'];
TITLE_OF_DISPLACEMENT = ['тонна', 'тонны', 'тонн'];
COUNT_DOOR_CUPE = 2;
COUNT_DOOR_UNIVERSAL = 5;
COUNT_DOOR_SEDAN = 4;

let type;
let mark;
let model;
let length;
let weight;
let maxSpeed;
let arguments;

function getSpecification() {
  mark = prompt('Введите марку транспортного средства');
  model = prompt('Введите модель транспортного средства')
  length = prompt('Укажите длину траспортного средства в метрах');
  weight = prompt('Укажите массу транспортного средства в килограммах');
  maxSpeed = prompt('Укажите максимальную скорость в км/час');
  return [type, mark, model, length, weight, maxSpeed];
};

function declOfNum(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  const declencion = (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5];
  return titles[declencion];
};

function Vehicle(type, mark, model, length, weight, maxSpeed) {
  this.type = type;
  this.mark = mark;
  this.model = model;
  this.length = length;
  this.weight = weight;
  this.maxSpeed = maxSpeed;
  this.lengthPostFix = declOfNum(this.length, TITLE_OF_LENGTH);
  this.weightPostFix = declOfNum(this.weight, TITLE_OF_WEIGHT);
  this.message = 'Тип ТС: ' + this.type + '\n'
    + 'Марка: ' + this.mark + '\n'
    + 'Модель: ' + this.model + '\n'
    + 'Длина: ' + this.length + ' ' + this.lengthPostFix + '\n'
    + 'Вес: ' + this.weight + ' ' + this.weightPostFix + '\n'
    + 'Максимальная скорость: ' + this.maxSpeed + ' ' + 'км/час';
  this.showSpecification = function() {
      return alert(this.message);
  };
};

function Car(arguments) {
  Vehicle.apply(this, arguments);
  this.type = type;
  const countOfDoor = prompt('Укажите колличество дверей');
  this.typeOfBody = function() {
    if (countOfDoor == COUNT_DOOR_CUPE) {
      return 'Купэ';
    };
    if (countOfDoor == COUNT_DOOR_SEDAN) {
      return 'Седан';
    };
    if (countOfDoor == COUNT_DOOR_UNIVERSAL) {
      return 'Универсал';
    };
  };
  this.message = this.message + '\n'
  + 'Тип кузова: ' + this.typeOfBody();

};

function Airplane(arguments) {
  Vehicle.apply(this, arguments);
  this.type = 'Самолёт';
  this.maxCountPassengers = prompt('Укажите максимальное колличество пассажиров на борту');
  this.message = this.message + '\n'
    + 'Максимальное колличество пассажиров на борту: ' + this.maxCountPassengers

};

function Ship(arguments) {
  Vehicle.apply(this, arguments);
  this.type = 'Корабль';
  this.displacement = prompt('Укажите велечину водоизмещения судна в тоннах');
  this.displacementPostFix = declOfNum(this.displacement, TITLE_OF_DISPLACEMENT);
  this.message = this.message + '\n'
   + 'Величина водоизмещения судна: ' + this.displacement + ' ' + this.displacementPostFix;
};

function createCar() {
  type = 'Автомобиль';
  arguments = getSpecification();
  const car = new Car(arguments);
  return car.showSpecification();
};
function creatAirPlane() {
  type = 'Самолёт';
  arguments = getSpecification();
  const airPlane = new Airplane(arguments);
  return airPlane.showSpecification();
};
function createShip() {
  type = 'Корабль';
  arguments = getSpecification();
  const ship = new Ship(arguments);
  return ship.showSpecification();
};

const recordCar = confirm('Желаете заполнить карточку с характеристиками автомобиля?');
if (recordCar == true) {
  createCar();
};

const recordAirPlane = confirm('Желаете заполнить карточку с характеристиками самолёта?');
if (recordAirPlane == true) {
  creatAirPlane();
};

const recordShip = confirm('Желаете заполнить карточку с характеристиками корябля?')
if (recordShip == true) {
  createShip();
};
