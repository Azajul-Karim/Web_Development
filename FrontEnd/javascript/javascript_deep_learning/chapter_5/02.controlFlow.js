//if
const isUserloggedIn = false;

// if (isUserloggedIn) {
//   console.log('User is logged in');
// }

// if(2 ==='2'){
//   console.log('executed');
// }

// const temperature = 50;

// if (temperature > 30) {
//   console.log('less than 50');
// }else{
//   console.log('greater than 50');
// }

// const age = 20;

// if (age > 18) {
//   let power = 'fly';
//   console.log(`You are ${age}. You can ${power}`);
// }

// console.log(`You are ${age}. You can ${power}`);

const balance = 100;

// if (balance > 80) console.log('You have a good balance');

// if(balance > 80){
//   console.log('You have a good balance');
// }else if(balance > 50){
//   console.log('You have a decent balance');
// }else if(balance > 30){
//   console.log('You have a low balance');
// }else{
//   console.log('You have no balance');
// }

const UserloggedIn = false;
const debitCard = true;
const loggedInFromGoogle = true;
const loggedInFromEmail = false;

if (UserloggedIn && debitCard) {
  console.log("You can buy");
} else if (UserloggedIn && !debitCard) {
  console.log("You can not buy");
} else {
  console.log("You are not logged in");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("You can buy");
}


//switch
const month = 3;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  default:
    console.log("Invalid month");
}

//Truthy and Falsy Values

/*
++++Falsy values++++
false,
0,
-0,
'' or "",
null,
undefined,
NaN,
BigInt(0),
*/

/*
+++++Truthy values+++++
true
1
'0'
' '
'false'
[]
{}
function(){}
*/

const userEmail = [];

if (userEmail.length ===0 ) {
  console.log("array is empty");
}

const emptyObject = {};

if (Object.keys(emptyObject).length === 0) {
  console.log("object is empty");
}

false == 0; //true
false === 0; //false
0 == ''; //true
0 === ''; //false
0 == '0'; //true
0 === '0'; //false
0 == false; //true
0 === false; //false
'' == false; //true
'' === false; //false
'0' == false; //true
'0' === false; //false
'0' == 'false'; //false
'0' === 'false'; //false
'0' == 0; //true

//Nullish Coalescing Operator (??) : null or undefined

let val1 ;

// val1 = 5 ?? 10; //5
// val1 = null ?? 10; //null
val1 = undefined ?? 10; //10
val1 = null ?? 10 ?? 20 //10
 
console.log(val1); 

//Ternary Operator
const isUserLoggedIn = true;

let message = isUserLoggedIn ? "User is logged in" : "User is not logged in";

console.log(message);

const temperature = 50;

let message1 = temperature > 30 ? "less than 50" : "greater than 50";

console.log(message1);

