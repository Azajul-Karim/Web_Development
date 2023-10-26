//Assingmenr Operator
let a = 5;
a += 2;
console.log(a);

let b = 5;
b -= 2;
console.log(b);

let c = 5;
c *= 2;
console.log(c);

let d = 5;
d /= 2;
console.log(d);

//Unaeary Operator
let e = 5;
e++;
console.log(e);

let f = 5;
f--;
console.log(f);

let g = 5;
++g;
console.log(g);

let h = 5;
--h;
console.log(h);

//Practice Questions 3
let num = 5; //5
let newNum = num++; //6
newNum = ++num; //7
console.log(num);
console.log(newNum);


//Identifier Rules
/*
1. Cannot start with a number
2. Can start with a letter, $, or _
3. Are case sensitive
4. Cannot use reserved keywords
*/

//js Naming Conventions
/*
1. camelCase
  ler firstName = "John";
2. snake_case
  let first_name = "John";
3. PascalCase
  let FirstName = "John";
*/

//Booleans in js
let age = 12;
let isAdult = age > 18;
console.log(isAdult);


//String
let name = "John";
console.log(name);

let name1 = 'John';
console.log(name1);

let name2 = `John`;
console.log(name2);

let emptyString = "";
console.log(emptyString);

//String Indices
let name3 = "John Doe";
console.log(name3[0]);
console.log(name3[1]);
console.log(name3[2]);
console.log(name3[100]);
console.log(name3.length);
console.log(name3[name3.length - 1]);

//String Concatenation
let firstName = "John";
let lastName = "Doe";
console.log(firstName + " " + lastName);


//Practice Questions 4
let myName = 'Azajul Karim'
console.log(myName.length);

let firstName1 = 'Azajul';
console.log(firstName1[0]);
console.log(firstName1[firstName1.length - 1]);

let randomString = 'azajul' + 123 
console.log(randomString);

let empty = ''
console.log(empty.length);

let space = ' '
console.log(space.length);






 