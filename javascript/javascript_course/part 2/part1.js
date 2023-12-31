//Console Log
console.log("Hello World");
console.log(12345);
console.log(true);
console.log([1,2,3,4,5]);


//Template Literals
console.log(`My name is ${"John"} and I am ${30} years old`);

let pencilPrice = 15;
let penPrice = 20;
console.log(`The Total Price is ${pencilPrice + penPrice}`);

//Operators in JavaScript
//Arithmetic Operators
let x = 5;
let y = 3;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

//Unary Operators
console.log(x++);
console.log(++x);

//Assignment Operators
let a = 10;
let b = 20;
console.log(a += b);
console.log(a -= b);
console.log(a *= b);
console.log(a /= b);
console.log(a %= b);
console.log(a **= b);

//Comparison Operators
console.log(x > y);
console.log(x >= y);
console.log(x < y);
console.log(x <= y);
console.log(x == y);
console.log(x != y);
console.log(x === y);
console.log(x !== y);

//Comparison for non-number
console.log("A" > "B");
console.log("A" < "a");
console.log("a" < "A");
console.log("*" < "&");

//Conditional statements
let age = 24;
//if statement
if(age > 18){
    console.log("You can vote");
}

//if else statement
if(age > 18){
    console.log("You can vote");
}
else{
    console.log("You can not vote");
}

//if else if statement
if(age > 18){
    console.log("You can vote");
}
else if(age == 18){
    console.log("You can vote now");
}
else{
    console.log("You can not vote");
}

//Ternary Operator
console.log(age > 18 ? "You can vote" : "You can not vote");

//Switch Statement
let day = 2;
switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    default:
        console.log("Invalid Day");
}

//Practice
let color = "green";

if(color == "red"){
    console.log("Stop!");
}

if(color == "yellow"){
    console.log("Slow Down");
}

if(color == "green"){
    console.log("Go...");  
}


//Practice two
let size = 'M'

if(size == "XL"){
    console.log("Price Is 250 TK.");
}else if(size == "L"){
    console.log("Price Is 200 TK.");
}else if(size == "M"){
    console.log("Price Is 150 TK.");
}else if(size == "S"){
    console.log("Price Is 100 TK.");
}else{
    console.log("Please Enter Valid Size");
}


//Nested If Else
let marks = 30;

if(marks >= 33){
    if(marks >= 80){
        console.log("Outstanding");    
    }else{
        console.log("A");
    }
}else{
    console.log("Fail");
}
