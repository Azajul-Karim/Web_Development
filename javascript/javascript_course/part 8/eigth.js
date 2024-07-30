//forEach
let arr = [1, 2, 3, 4, 5];

arr.forEach(function(el){
    // console.log(el);
})

arr.forEach((el) => {
    // console.log(el);
})

let arr2 = [
    {name: 'John', age: 25},
    {name: 'Jane', age: 22},
    {name: 'Jack', age: 30}
]

arr2.forEach((el) => {
    // console.log(el.name);
})

//map

let num = [1, 2, 3, 4, 5];

let squre = num.map((el) => {
    return el * el;
})

// console.log(squre);
// console.log(num);

let gpa =
[
    {name: 'John', gpa: 3.5},
    {name: 'Jane', gpa: 3.8},
    {name: 'Jack', gpa: 3.2}
]

gpa.map((el) => {
    console.log(el.name + ' ' + el.gpa);
})

//filter

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let even = nums.filter((el) => {
    return el % 2 === 0;
})

// console.log(even)

let students = [
    {name: 'John', gpa: 3.5},
    {name: 'Jane', gpa: 3.8},
    {name: 'Jack', gpa: 3.2}
]

let highGpa = students.filter((el) => {
    return el.gpa > 3.5;
})

// console.log(highGpa);

//every

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let allEven = numbers.every((el) => {
    return el % 2 === 0;
})

// console.log(allEven);

//some

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let someEven = numbers2.some((el) => {
    return el % 2 === 0;
})

// console.log(someEven);


//reduce





