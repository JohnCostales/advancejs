// Exercise 01 Create Objects with fake classes
function Person(n, a) {
  this.name = n;
  this.age = a
}

Person.prototype.hello = function () {
  console.log(`Hello my name is ${this.name}`);
};

let person1 = new Person('Marianna', 40);
let person2 = new Person('John', 22);

person1.hello();
person2.hello();

// Exercise 02 inhertitance
function Animal(n) {
  this.name = n;
}

Animal.prototype.print = function() {
  console.log(`${this.name} is an animal`);
};

const dog = new Animal('Lassie');

function Reptile(n, scales) {
  Animal.call(this, n);
  this.scales = scales;
}

Reptile.prototype = Object.create(Animal.prototype);
Reptile.prototype.constructor = Reptile;

Reptile.prototype.print = function() {
  console.log(`${this.name} is a reptile and is ${this.scales}.`);
};

const croc = new Reptile(`Snappy`, `very scaley`);

console.log(croc instanceof Reptile);
console.log(croc instanceof Animal);

croc.print();
dog.print();

// Exercise 03
class User {
  constructor(name, password, salary) {
    this.name = name;
    this.password = password;
    if (salary > 0) {
      this.salary = salary;
    }
    else {
        this.salary = 0;
    }
  }

  checkPw(password){
    return password === this.password;
  }

  print() {
    console.log(`Hi my name is ${this.name} and I earn €${this.salary}`);
  }
}

class Admin extends User {
  constructor(name, password, salary, permission) {
    super(name, password, salary);
    this.permission = permission;
  }
}

const admin = new Admin('John', 'pass123', 100, 'all');
const user = new User('George', 'pass321', -5);

admin.print();
user.print();

//  Activity
