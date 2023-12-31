// practice one

let msg = 'Help!'
console.log(msg.trim().toUpperCase());

// practice two 

let name = 'Azajul Karim'

console.log(name.slice(4, 9));
console.log(name.indexOf('ul'));
console.log(name.replace('Karim', 'Islam'));

// practice three
let month = ["January","July","March","August"]
month.shift()
month.shift()
month.unshift("June")
month.unshift("July")
console.log(month);

// practice four
let month2 = ["January","July","March","August"]

month2.splice(0, 2, "July","June")
console.log(month2);

// practice five
let lenguage = ["Html","CSS","JavaScript","React","Redux","Node","MongoDB"]
lenguage.reverse()
console.log(lenguage);

// practice six
let game = [['x',null,'o'],[null,'x',null],["o",null,'x']]
console.log(game);

// practice seven
// print all odd number 1-15
console.log("Odd Number");
for (let i = 1; i <= 15; i+=2) {
    console.log(i);
}

console.log("Backward");

for (let i = 15; i >= 1; i-=2) {
    console.log(i);
}

// practice eight
// print all even number 2-10
console.log('Even Number');
for (let i = 2; i <= 10; i+=2) {
    console.log(i);
} 

console.log('Backward');

for (let i = 10; i >= 2; i-=2) {
    console.log(i);
}

// practice nine
// print The multiplication table for 5
console.log('Multiplication table for 5');
for (let i = 5; i <= 50; i+=5) {
    console.log(i)
}

// practice ten
//Random Number
console.log('Random Number');
let num = Math.floor(Math.random() * 5) + 20;
console.log(num);

