//String 
// console.log('hello' + ' world');

const name = "Topu";
const repoCount = 22;

// console.log("My name is " + name + " and I have " + repoCount + " public repositories");

console.log(`My name is ${name} and I have ${repoCount} public repositories`);

const gameName = new String("Azajul-Karim");
console.log(gameName);
console.log(gameName.length);
console.log(gameName.__proto__);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('P')); 

const newString = gameName.substring(0, 3)
console.log(newString);

const newString2 = '   Hello World    ';
console.log(newString2.trim());

const url = 'https://www.azajul%20karim.com';
console.log(url.replace('%20', '_'));
console.log(url.includes('azajul'));

console.log(gameName.split('-'));