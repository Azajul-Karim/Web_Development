//String Method

//Trim
var str = "       Hello World!        ";
console.log(str.trim());
// console.log(str);

//Upper Case
var str = "Hello World!";
console.log(str.toUpperCase());

//Lower Case
var str = "Hello World!";
console.log(str.toLowerCase());

//Index Of
var str = "Hello world, welcome to the universe.";

console.log(str.indexOf("welcome"));
console.log(str.indexOf('t'))
console.log(str.indexOf('l'))
console.log(str.indexOf('x'))

//Slice 
var str = "Hello world!";
console.log(str.slice(5));
console.log(str.slice(3));
console.log(str.slice(0, 5));
console.log(str.slice(2, 7)); 
console.log(str.slice(-1));  

//Replace
var str = "Very Bad Product";
console.log(str.replace("Bad", "Good"));

//Repeat
var str = "Hello world! ";
console.log(str.repeat(2));


// Array
let info = ['Azajul', 'Karim', 24, 'Sylhet', 'Bangladesh'];

let names = ['Azajul', 'Karim', 'Islam'];

let marks = [80, 90, 100, 95, 85];

//Array Mutable
let fruits = ['Apple', 'Orange', 'Banana', 'Mango'];
fruits[0] = 'Lemon';
console.log(fruits);

// Array Methods
// push
let Students = ['Azajul', 'Nazim', 'Rahi', 'Rakib'];
Students.push('Zakir');//add last
console.log(Students);

// pop
Students.pop();//remove last
console.log(Students);

// unshift
Students.unshift('Arif');//add first

// shift
Students.shift();//remove first

//Index Of
let colors = ['Red', 'Green', 'Blue', 'Yellow'];
console.log(colors.indexOf('Blue'));
console.log(colors.indexOf('Black'));

//Concat
let primary = ['Red', 'Green', 'Blue', 'Yellow'];
let secondary = ['Orange', 'Purple', 'Pink'];

let allColors = primary.concat(secondary);
console.log(allColors);

//Reverse
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers);

//Slice
let cars = ['BMW', 'Audi', 'Toyota', 'Nissan', 'Honda'];

// let myCars = cars.slice(1, 4);
// console.log(myCars);
// console.log(myCars.slice(-2));


//Splice
// console.log(cars.splice(2));
// console.log(cars.splice(2, 2));
console.log(cars.splice(2, 2, 'KIA', 'Hyundai'));

//Sort
let fruits1 = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits1.sort();
console.log(fruits1);

//Nasted Array
let nastedArray = [
    ['Azajul', 'Karim', 'Islam'],
    ['Nazim', 'Islam'],
    ['Rahi', 'Islam'],
    ['Rakib', 'Islam']
];

console.log(nastedArray[0][2]);