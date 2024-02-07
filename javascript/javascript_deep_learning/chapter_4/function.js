function sum2(num, num2) {
  // console.log(num + num2);
}

const result = sum2(2, 3);
// console.log("Result: ", result);

function sum(num, num2) {
  return num + num2;
}
// console.log(sum(2, 3));
// console.log(sum(2, "3"));
// console.log(sum(2, null));
// console.log(sum(2, "a"));

function sum3(num, num2) {
  // let result = num + num2;
  // return result;

  return num + num2;
}

const result2 = sum3(2, 3);
// console.log("Result2: ", result2);

function loginUserMessage(username = "Guest") {
  if (!username) {
    console.log("Please provide a username");
    return;
  }
  return `Welcome ${username}`;
}
// console.log(loginUserMessage("Topu"));
// console.log(loginUserMessage());


function calculateCartPrice(...num1){
  return num1 
}
const result3= calculateCartPrice(200,400,500)
// console.log(result3)

const user = {
  name: "Topu",
  age: 25,
  email: "topu@gmail.com",
}

function getUserInfo(anyObject){
  console.log(`Name: ${anyObject.name}, Age: ${anyObject.age}, Email: ${anyObject.email}`);
}
// getUserInfo(user)
getUserInfo({name: "Topu", age: 25
})

const newArray = [200, 400, 500]

function returnSecondElement(array){
  return array[1]
}
// console.log(returnSecondElement(newArray))
// console.log(returnSecondElement([200, 400, 500]))

