// const myCoding = ['html','css','javascript','react js' ]

// const value = myCoding.forEach(element => {
//     console.log(element);
// });
// console.log(value);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const mynum = numbers.filter((num) => {
//  return num < 5;
// });

// console.log(mynum);

const newNum = [];

numbers.forEach((num) => {
  if (num < 5) {
    newNum.push(num);
  }
});

// console.log(newNum);

const books = [
  {
    title: "JavaScript",
    genre: "Programming",
    publish: 2015,
    edition: 1,
  },
  {
    title: "Python",
    genre: "Programming",
    publish: 2016,
    edition: 2,
  },
  {
    title: "Java",
    genre: "Programming",
    publish: 2017,
    edition: 3,
  },
  {
    title: "HTML",
    genre: "Web",
    publish: 2018,
    edition: 4,
  },
  {
    title: "CSS",
    genre: "Web",
    publish: 2019,
    edition: 5,
  },
  {
    title: "React",
    genre: "Web",
    publish: 2020,
    edition: 6,
  },
];

// const programmingBooks = books.filter((book) => book.genre === "Web");

const programmingBooks = books.filter((book) => {
  return book.publish >= 2018 && book.genre === "Web";
});

// console.log(programmingBooks);

//map

const myNum = [1, 2, 3, 4, 5];

// const newNums = myNum.map((num) => num * 2);

const newNums = myNum.map((num) => num * 10).map((num) => num + 1).filter((num) => num < 50);

// console.log(newNums);
// console.log(myNum);

const newBooks = books.map((book) => {
  return book.title + " - " + book.publish;
});

// console.log(newBooks);


//reduce

const myNumbers = [1, 2, 3];

const sum = myNumbers.reduce((acc, num) => {
  return acc + num;
}, 0);

// console.log(sum);

myNumbers.reduce((acc,num) => {
  console.log(`Accumulator: ${acc}, Current Number: ${num}`);
  return acc + num;
},0);