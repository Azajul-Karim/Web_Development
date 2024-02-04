//Date and Time

let date = new Date()

// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(typeof date);

let myDate = new Date(2024, 0, 16)
console.log(myDate.toDateString());  
console.log(myDate.toLocaleTimeString());

let month = myDate.getMonth()+1;
let day = myDate.getDate();
let year = myDate.getFullYear();

console.log(`${day}/${month}/${year}`);

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());

console.log(newDate.toLocaleString('default', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
}))

