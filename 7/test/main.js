class One {
  constructor() {
    this.count = 'one!';
  }
  print() {
    console.log(this.count);
  }
};

class Two extends One {
  constructor() {
    super()
    this.number = 'two!';
  }
  print() {
    super.print();
    console.log(this.number);
  }
}

const one = new One();
one.print();


const two = new Two();
two.print();
