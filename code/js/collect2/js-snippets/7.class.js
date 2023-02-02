class Person {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`Hello ${this.name}`);
    console.log(this);  // 实例化对象
  }

  static grow() {
    console.log('长逝者如斯夫,不舍昼夜...');
    // console.log(this);  // 当前类
  }
}

let _person = new Person('Juching');

_person.speak();
// _person.grow();  // Uncaught TypeError: _person.grow is not a function
_person.constructor.grow();
// Person.speak(); // Uncaught TypeError: Person.speak is not a function
Person.grow();

function People(name) {
  this.name = name;
}
People.prototype.speak = function () {
  console.log(`Hello ${this.name}`);
  console.log(this);  // 实例化对象
};
People.grow = function () {
  console.log('长逝者如斯夫,不舍昼夜...');
  // console.log(this);  // 当前类
};

let _people = new People('Juching');

_people.speak();
// _people.grow();  // Uncaught TypeError: _people.grow is not a function
_people.constructor.grow();
// Person.speak(); // Uncaught TypeError: Person.speak is not a function
People.grow();

export {
  Person,
  People,
}
