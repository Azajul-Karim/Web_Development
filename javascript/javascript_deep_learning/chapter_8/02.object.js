function multipleBy5(num) {
  return num * 5;
}

multipleBy5.power = 2;

console.log(multipleBy5(10));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(name, score) {
  this.name = name;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`score: ${this.score}`);
};

let user1 = new createUser("John", 10);
let user2 = new createUser("Doe", 20);

user1.printMe();
user2.printMe();

/*
#new keyword
here's what happens when you use the new keyword to create an object:

A new object is created: the new keyword creates a new object with the specified prototype.

A prototype is linked: the newly created object gets linked to a prototype property of the constructor function.this means that the newly created object can access the properties and methods of the prototype.

The constructor function is called: the constructor function is called with the newly created object as the this context.
*/

//Prototype

// let myName = 'John   ';
// let myName2 = 'karim   ';

// console.log(myName.trueLength);

let myHeros = ["Superman", "Batman", "Spiderman"];

let heroPower = {
  Superman: "flight",
  Batman: "money",
  Spiderman: "web",

  getSpidermanPower: function () {
    console.log(`Spiderman's power is ${this.Spiderman}`);
  },
};

Object.prototype.topu = function () {
  console.log("topu is here!");
};

Array.prototype.hiTopu = function () {
  console.log("topu says hi!");
};
// heroPower.topu();
myHeros.topu();
myHeros.hiTopu();
// heroPower.hiTopu();

//Inheritance

const User = {
  name: "John",
  score: 10,
};
const Teacher = {
  makeVideo: true,
};

const teachingAssist = {
  isAvailable: false,
};

const TASupport = {
  makeAssigment: "js assingment",
  fullTime: true,
  __proto__: teachingAssist,
};

Teacher.__proto__ = TASupport;

//modern syntax
Object.setPrototypeOf(Teacher, TASupport);


let anotherUser = "Azajul Karim  "

String.prototype.trueLenght = function () {
  console.log(`${this}`);
  console.log(this.name);
  console.log(`True length is ${this.trim().length}`);
};

anotherUser.trueLenght();
"John Doe".trueLenght();
"   John Doe   ".trueLenght();

//call

function setUserName(name) {
  // complex db call
  this.name = name;
  console.log('called');
}

function createUser(username,email, password) {
  this.email = email;
  this.password = password;
  setUserName.call(this,username);
}

const user = new createUser("John", "topu@gmail.com", "1234");
console.log(user);