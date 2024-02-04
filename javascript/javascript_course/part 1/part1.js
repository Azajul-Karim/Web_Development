//Variables
var a = 1;
var b = 2;

var age = 25;
var name = "Tony";

// Data Types
// primitive types
/* 
    Number
    String
    Boolean
    Null
    Undefined
    Symbol
*/
//Number
var n = 123;
console.log(typeof n);


//String
var s = "Hello World";
console.log(typeof s);

//Boolean
var bool = true;
console.log(typeof bool);

//Null
var n = null;
console.log(typeof n);

//Undefined
var u = undefined;
console.log(typeof u);

//Symbol
var sym = Symbol();
console.log(typeof sym);


//Operations in Javascript
//addition
var a = 1 + 2;
console.log(a);

//subtraction
var b = 2 - 1;
console.log(b);

//multiplication
var c = 2 * 2;
console.log(c);

//division
var d = 4 / 2;
console.log(d);

//modulus
var e = 5 % 2;
console.log(e);

//exponentiation
var f = 2 ** 3;
console.log(f);

//NaN
var a = 0/0;
console.log(a);

var b = 1 - NaN;
console.log(b);

var c = NaN * 1;
console.log(c);

var d = NaN + NaN;
console.log(d);

// Operator Precedence

var a = 1 + 2 * 3;
console.log(a);

var b = (1 + 2) * 3;
console.log(b);

//Practice Questions 1
let age1 = 23;
age1 = age1 + 2;
console.log(age1);

//Practice Questions 2
let hindi = 80;
let english = 90;
let maths = 100;

let avg = (hindi + english + maths) / 3;
console.log(avg);

