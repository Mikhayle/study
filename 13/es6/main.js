const TITLE_OF_LENGTH = [`метр`, `метра`, `метров`];
const TITLE_OF_WEIGHT = [`килограмм`, `килограмма`, `килограммов`];
const TITLE_OF_DISPLACEMENT = [`тонна`, `тонны`, `тонн`];
const COUNT_DOOR_CUPE = 2;
const COUNT_DOOR_UNIVERSAL = 5;
const COUNT_DOOR_SEDAN = 4;
const SEPARATOR = `, `;
let type;
let mark;
let model;
let length;
let weight;
let maxSpeed;
let arg;

const getSpecification = () => {
  mark = prompt(`Введите марку транспортного средства`);
  model = prompt(`Введите модель транспортного средства`)
  length = prompt(`Укажите длину траспортного средства в метрах`);
  weight = prompt(`Укажите массу транспортного средства в килограммах`);
  maxSpeed = prompt(`Укажите максимальную скорость в км/час`);
  const result = [type, mark, model, length, weight, maxSpeed].join(SEPARATOR);
  return result;
};

const declOfNum = (number, titles) => {
  const cases = [2, 0, 1, 1, 1, 2];
  const declencion = (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5];
  return titles[declencion];
};

class Vehicle {
  constructor(arg) {
    this.type = type;
    this.mark = mark;
    this.model = model;
    this.length = length;
    this.weight = weight;
    this.maxSpeed = maxSpeed;
    this.lengthPostFix = declOfNum(this.length, TITLE_OF_LENGTH);
    this.weightPostFix = declOfNum(this.weight, TITLE_OF_WEIGHT);
    this.message = `
    Тип ТС: ${this.type}
    Марка: ${this.mark}
    Модель: ${this.model}
    Длина: ${this.length} ${this.lengthPostFix}
    Вес: ${this.weight} ${this.weightPostFix}
    Максимальная скорость: ${this.maxSpeed} км/час`
  }

  showSpecification() {
      return alert(this.message);
  }
};

class Car extends Vehicle {
  constructor(arg) {
    super(arg);
    this.countOfDoor = parseInt( prompt('Укажите колличество дверей') );
    this.message = `${this.message}
    Тип кузова: ${this.typeOfBody()}`;
  }
  typeOfBody() {
    if (this.countOfDoor == COUNT_DOOR_CUPE) {
      return `Купэ`;
    };
    if (this.countOfDoor == COUNT_DOOR_SEDAN) {
      return `Седан`;
    };
    if (this.countOfDoor == COUNT_DOOR_UNIVERSAL) {
      return `Универсал`;
    };
  }
};

class Airplane extends Vehicle {
  constructor(arg) {
    super(arg);
    this.maxCountPassengers = parseInt( prompt(`Укажите максимальное колличество пассажиров на борту`) );
    this.message = `
    ${this.message}
    Максимальное колличество пассажиров на борту: ${this.maxCountPassengers}`;
  }
  showInConsole() {
    console.log(this.message);
  }
  showSpecification() {
    super.showSpecification();
    this.showInConsole();
  }
};

class Ship extends Vehicle {
  constructor(arg) {
    super(arg);
    this.displacement = parseInt( prompt(`Укажите велечину водоизмещения судна в тоннах`) );
    this.displacementPostFix = declOfNum(this.displacement, TITLE_OF_DISPLACEMENT);
    this.message = `
    ${this.message}
    Величина водоизмещения судна: ${this.displacement} ${this.displacementPostFix}`;
  }

};

const createCar = () => {
  type = `Автомобиль`;
  arg = getSpecification();
  const car = new Car(arg);
  return car.showSpecification();
};
const creatAirPlane = () => {
  type = `Самолёт`;
  arg = getSpecification();
  const airPlane = new Airplane(arg);
  return airPlane.showSpecification();
};
const createShip = () => {
  type = `Корабль`;
  arg = getSpecification();
  const ship = new Ship(arg);
  return ship.showSpecification();
};

const recordCar = confirm(`Желаете заполнить карточку с характеристиками автомобиля?`);
if (recordCar == true) {
  createCar();
};

const recordAirPlane = confirm(`Желаете заполнить карточку с характеристиками самолёта?`);
if (recordAirPlane == true) {
  creatAirPlane();
};

const recordShip = confirm(`Желаете заполнить карточку с характеристиками корябля?`)
if (recordShip == true) {
  createShip();
};
