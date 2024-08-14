/*
Global execution context
Function execution context
Eval function execution context
*/

/*Memory Creation phase
 1. Global Object
 2. this
 3. Outer Environment
 4. Memory space for variables and functions
*/

// Code Execution phase
// 1. this is assigned
// 2. Outer environment is assigned
// 3. Execution of code



let val1 = 2; 
let val2 = 3;

function add(a, b) {
  let result = a + b;
  return result;
}

let sum = add(val1, val2);
let sum2 = add(3, 4);


// Global execution context
// Memory Creation phase
/*  
val1: undefined
val2: undefined
add: function add(a, b) {...}
sum: undefined
sum2: undefined
*/

// Code Execution phase
/*
val1: 2
val2: 3
add: function add(a, b) {...}
new variable environment + execution thread
memory phase

val1: undefined
val2: undefined
result: undefined

execution phase
val1: 2
val2: 3
a : 2
b : 3
result: 5
result returned golbal execution context
delete variable environment + execution thread

new variable environment + execution thread
Memory Creation phase
a : undefined
b : undefined
result: undefined

execution phase
a : 3
b : 4
result: 7
result returned golbal execution context
delete variable environment + execution thread

sum: 5
sum2: 7
*/


