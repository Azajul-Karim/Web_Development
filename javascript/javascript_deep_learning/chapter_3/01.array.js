const myArr = [0, 1, 2, 3, 4, 5];
const myArr2 = new Array(1, 2, 3, 4);

// console.log(myArr2[0]);

// array method

// myArr.push(6)
// myArr.push(7)
// myArr.pop();

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join(' ')
// console.log(newArr);

// console.log("A", myArr);

const myn1 = myArr.slice(1, 3);
// console.log(myn1);
// console.log("B", myArr);

const myn2 = myArr.splice(1, 3);
// console.log(myn2);
// console.log("C", myArr);

//Diffrence between slice and splice
/*
slice
1.slice does not change the original array
2.slice(start, end) end is not included

splice
1.splice change the original array
2.splice(start, count) count is included
 */

const school_friend = ["shakil", "sakib", "nazim", "sani", "tanim", "foysal"];

const college_friend = ["rahi", "mizu", "nazim", "nurul"];

// school_friend.concat(college_friend);
// school_friend.push(college_friend);
// console.log(school_friend);

const allFriend = [...school_friend, ...college_friend];
// console.log(allFriend);

const another_array = [1, [2, 3, 4], 5, 6, 7, 8, 9, [10, [11, 12]]];
const real_anothor_array = another_array.flat(Infinity);
// console.log(real_anothor_array);

console.log(Array.isArray('Topu')); 
console.log(Array.from('Topu')); 
console.log(Array.from({name : 'Topu'})); 

let score = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score, score2, score3));