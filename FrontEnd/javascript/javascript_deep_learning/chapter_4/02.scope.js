//scope
var c = 300;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

let d = 300;

if (true) {
  let d = 10;
  const e = 20;
  // console.log("Inner :" ,d);
}

// console.log(d);

let f = 300;

if (true) {
  f = 10;
  const e = 20;
  // console.log("Inner :" ,f);
}

// console.log(f);

//nasted scope

function one() {
  const username = "Topu";

  function two() {
    const website = "topu.com";
    // console.log(username);
  }
  // console.log( website);

  two();
}

one();

if (true) {
  const username = "Topu";
  if (true) {
    const website = "topu.com";
    // console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

//interesting

console.log(addOne(2));
function addOne(num) {
  return num + 1;
}

addTwo(2);
const addTwo = function (num) {
  return num + 2;
};
