//this in js

const student = {
  name: 'azajul',
  age: 24,
  eng: 97,
  math: 98,
  phy: 96,
  getAvg(){
    let avg = (this.eng + this.math + this.phy)/3
    // console.log(`${this.name} Got Avg Marks = ${avg}`);
    // console.log(this);
  }
}

student.getAvg()
 
function getAvg(){
  console.log(this);
}

//try and catch

// console.log(a);

try {
  // console.log(a)
} catch (error) {
  console.log("a is not define");
  console.log(error)
}


// array function

const sum = (a,b) =>{
  // console.log(a + b);
}
sum(5,5)

//implicit return

const mul = (a,b) => a * b

// console.log(mul(5,5));


// setTimeout

// console.log('Hi There!');

setTimeout(()=>{
  // console.log('coding school');
},4000)

// console.log('welcome to');

// setInterval
// setInterval(()=>{
//   console.log('coding college');
// },2000)

// practice

const squere = (n) => n*n
console.log(squere(5));