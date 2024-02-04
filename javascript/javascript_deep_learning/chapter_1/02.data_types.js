'use strict' //treat all js code as new version of js

//primitive data types

//number => 2 to the power 53
let num = 123;

//BigInt 
let bigNum = 12345678901n;
//string = '' or ""
let str = "Hello World";

//boolean = true or false
let isTrue = true;
let isFalse = false;

// null
let state = null;
console.log(typeof state);

// undefined
console.log(typeof undefined);

// symbol => unique value
let sym = Symbol("id");




//non primitive data types or reference data types
//object => {key: value}
let obj = {
    name: "Topu",
    age: 25,
    isMarried: false
}

//array => [1,2,3,4,5]
let arr = [1, 2, 3, 4, 5];

//function => function(){}
let func = function () {
    console.log("Hello World");
}

//************data types summary************

//primitive data types

//7 types of primitive data types: String, Number, BigInt, Boolean, Symbol, null, undefined
const name = "Topu";
const score = 10;
const scoreValue = 10.5;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("id");
const id2 = Symbol("id");

console.log(id === id2);

const bigNumber = 13323234232121212n


//Reference data types(non primitive data types)

// Array, Object, Function

const heros =['shakib','tamim','mashrafee','mushfiq','mahmudullah'];

const person = {
    name: "Topu",
    age: 24,
    isMarried: false
}

function add(a,b){
    return a+b;
}

const myFunc = function(){
    console.log("Hello World");
}

//typeof operator
console.log(typeof bigNumber);
console.log(typeof heros);


//=======================================
//Stack (primitive data types),
//Heap (non primitive data types)

let email = 'topu@gmail.com'
let anotherEmail = email;  
anotherEmail = 'azajul@gmail.com'

console.log(anotherEmail);
console.log(email);

let person1 = {
    name: 'Topu'
}

let person2 = person1;
person2.name = 'Azajul';

console.log(`person1 name is ${person1.name}`);
console.log(`person2 name is ${person2.name}`);
