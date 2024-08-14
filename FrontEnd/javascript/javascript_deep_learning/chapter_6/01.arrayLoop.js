//For Of

let arr = [1, 2, 3, 4, 5];

for (let num of arr) {
  // console.log(num);
}

const greeting = "Hello World!";

for (let greet of greeting) {
  // console.log(`Character: ${greet}`);
}

//Maps

const map = new Map();
map.set("BAN", "Bangladesh");
map.set("IND", "India");
map.set("PAK", "Pakistan");
map.set("BAN", "Bangladesh");

for (const [key, value] of map) {
  // console.log(key, " -> ", value);
}

const myObj = {
  js: "JavaScript",
  py: "Python",
  rb: "Ruby",
};

for (const key in myObj) {
  // console.log(`${key} -> ${myObj[key]}`);
}

//forEach

const myArray = ["JavaScript", "Python", "Ruby", "Java"];

myArray.forEach((item) => {
  // console.log(item);
});

function print(item) {
  console.log(item);
}

// myArray.forEach(print)

myArray.forEach((item, index, arr) => {
  // console.log(item, index, arr);
});

const myCoding = [
  {
    name: "JavaScript",
    type: "Frontend",
  },
  {
    name: "Python",
    type: "Backend",
  },
  {
    name: "Ruby",
    type: "Backend",
  },
  {
    name: "Java",
    type: "Backend",
  },
];

myCoding.forEach((item) => {
  // console.log(item.name, " -> ", item.type);
});
