// write test this code pass or fail
function testModule(name, given, expect) {
  try {
    if (given === expect) {
      console.log(name + " passed");
    }
    else {
      throw new Error("Expected " + expect + " but got " + given);
    }
  } catch (error) {
    console.error(name + " failed:", error.message);
  }
 
}

/*Questions 1
 Write a JavaScript code to access the first, third, and last characters of the string "JavaScript".
*/

function access(str){
  return str[0] + str[3] + str[str.length - 1];
}

testModule("access", access("javascript"), "jat");

/*Questions 2
Write code to find the length of the string "Hello, world!".
*/

function lengthCheck(str){
  return str.length;
}

testModule("lengthCheck", lengthCheck("Hello, world!"), 13);

/*Questions 3
Combine the strings "Hello" and "World" to create the string "Hello World".
*/

function combine(str1, str2){
  return str1 + " " + str2;
}

testModule("combine", combine("Hello", "World"), "Hello World");

/*Questions 4
Write code to check if the strings "JavaScript" and "javaScript" are equal.
*/

function equalCheck(str1, str2){
  return str1 === str2;
}

testModule("equalCheck", equalCheck("JavaScript", "javaScript"), false);

/*Questions 5
Extract the substring "coding" from the string "I love coding in JavaScript".
*/

function extract(str){
  return str.substring(7, 13);
}

testModule("extract", extract("I love coding in JavaScript"), "coding");