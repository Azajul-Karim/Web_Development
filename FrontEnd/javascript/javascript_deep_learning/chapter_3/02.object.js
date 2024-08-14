// singleton
var myObject = new Object();


// Object literal

const mySymbol = Symbol('mySymbol');

var myObject = {
    firstName: 'Azajul',
    lastName: "Topu",
    "full name": "Azajul Topu",
    age: 21,
    [mySymbol]: 'I am a symbol',
    email: 'topu@gmail.com',
    isLoggin: true,
    lastLoginDays : ['Monday', 'Tuesday', 'Wednesday'],
}

// console.log(myObject.firstName);
// console.log(myObject['firstName']);
// console.log(myObject['full name']);
// console.log(typeof myObject[mySymbol]);

//change value
// Object.freeze(myObject);
myObject.firstName = 'anik';
// console.log(myObject.firstName);
// console.log(myObject);


myObject.greeting = function(){
  console.log("Hello My Object");
}


myObject.greetingTwo = function(){
  console.log(`Hello My Object, ${this.firstName}`);
}

// console.log(myObject.greeting());
// console.log(myObject.greetingTwo()); 

const tinderUser = {};
tinderUser.id = 1;
tinderUser.name = 'Topu';
tinderUser.email = 'topu@gmail.com' 
tinderUser.isLoggin = true;

// console.log(tinderUser);

const regulerUser = {
  email : 'topu@gamil.com',
  fullName:{
    firstName : 'Azajul',
    lastName : 'Topu',
  },
}

// console.log(regulerUser.fullName.firstName);

const myObj = {1: 'a', 2: 'b'};
const myObj2 = {3: 'a', 4: 'b'};

// const myObj3 = Object.assign({}, myObj, myObj2);
const myObj3 = {... myObj, ...myObj2};
// console.log(myObj3);

const users = [{
  id : 1,
  name : 'Topu',
  email : 'topu@gmail.com',
},
{
  id : 2,
  name : 'Anik',
  email : 'azajul@gmail.com',
}
];

// console.log(users);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'));

//object destructuring

const course = {
  name : 'Javascript',
  duration : '3 months',
  price : 1000,
  teacher : 'Azajul Topu',
}
const {teacher} = course;
// console.log(teacher);

const {teacher: instructor } = course;
// console.log( instructor);


