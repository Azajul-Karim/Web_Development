const user = {
  username: "Topu",
  price: 100,

  welcomeMsg: function () {
    console.log(`Welcome ${this.username}`);
    // console.log(this)
  },
};

// user.welcomeMsg();
// user.username = 'Nazim';
// user.welcomeMsg();

// console.log(this)

function welcomeMsg() {
  let username = "Nazim";
  // console.log(this.username);
}

welcomeMsg();

const welcomeMsg2 = () => {
  let username = "Nazim";
  // console.log(this.username);
  console.log(this);
};

welcomeMsg2();

const addTwo = (num1, num2) => {
  return num1 + num2;
};

// console.log(addTwo(2, 3));

const addThree = (num1, num2) => num1 + num2;

console.log(addThree(2, 3));

const addFour = (num1, num2) => (num1 + num2);

console.log(addFour(2, 3));

const obj = () => ({ name: "Topu" });

console.log(obj());

const myArr = [1, 2, 3, 4, 5];

myArr.forEach((num) => console.log(num));