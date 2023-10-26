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