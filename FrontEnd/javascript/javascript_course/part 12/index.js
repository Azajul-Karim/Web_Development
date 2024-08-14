//call stack
//LIFO - Last In First Out
function hello() {
  console.log('inside hello');
  console.log('hello');
}

function demo() {
  console.log('inside demo');
  hello();
}

// console.log('star t');
// demo();
// console.log('end');

//visualizing the call stack

function one() {
 return 1;
}

function two() {
  return one() + one();
}

function three() {
  let ans = two() + one();
  console.log(ans);
}

// three();


//breakpoints

console.log('start');

function four() {
  console.log('inside four');
  console.log('four');
}

function five() {
  console.log('inside five');
  four();
}

function six() {
  console.log('inside six');
  five();
}

// six();

console.log('end');
 