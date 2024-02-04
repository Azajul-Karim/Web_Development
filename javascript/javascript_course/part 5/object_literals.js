//Object Literals
/*
property => key : value
object are a collection of properties
*/

let student ={
    name: 'John',
    age: 20,
    marks: 80,
    city: "sylhet"
}
console.log(student);

//post
const post = {
    userName: 'John',
    message: 'Hello, how are you?',
    postLikes: 20,
    postComments: 10,
    shared: 5,
    rePost: 2
}
console.log(post);

//Get Value
let student1 = {
   name: 'John',
   marks: 80,
}
console.log(student1.name);
console.log(student1['name']);

//update value
student3 = {
    name: 'John',
    marks: 80,
    city: 'sylhet'
}
student3.city = 'Dhaka';
console.log(student3);
//add new property
student3.gender = "male";
console.log(student3);
//delete property
delete student3.city;
console.log(student3);

//object of object
let classInfo= {
    nazim: {
        name: 'Nazim',
        age: 20,
        marks: 80,
    },
    john: {
        name: 'John',
        age: 20,
        marks: 80,
    },
    rahi: {
        name: 'Rahi',
        age: 20,
        marks: 80,
    }
}
console.log(classInfo);
console.log(classInfo.nazim.age);
console.log(classInfo['nazim'].age); 

//object of array
let classInfo1= [
    {
        name: 'Nazim',
        age: 20,
        marks: 80,
    },
    {
        name: 'John',
        age: 20,
        marks: 80,
    },
    {
        name: 'Rahi',
        age: 20,
        marks: 80,
    }
]
console.log(classInfo1);
console.log(classInfo1[0].age);
 

//Math Object
console.log(Math.PI);
console.log(Math.E);

let num = 4.5;
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.abs(-5));
console.log(Math.pow(2, 3));

//Random Number
let num1 = Math.random();
num1 = num1 * 10;
num1 = Math.floor(num1);
console.log(num1);