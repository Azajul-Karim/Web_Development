// For Loop

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log('Five');
  }
  // console.log(element);
}

//  console.log(element)

for (let i = 1; i <= 3; i++) {
  // console.log(`outer loop ${i}`);
  for (let j = 1; j <= 3; j++) {
    // console.log(`inner loop ${j} and outer loop ${i}`);
  }
}

for (let i = 1; i <= 10; i++) {
  // console.log(`outer loop ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(i + ' * ' + j + ' = ' + i * j);
  }
}

let myArray = ['captain', 'ironman', 'thor', 'hulk', 'blackwidow', 'hawkeye'];

for (let i = 0; i < myArray.length; i++) {
  // console.log(myArray[i]);
}
  
//break and continue

for (let i = 1; i < 20; i++) {
  if (i == 5) {
    // console.log('Five');
    break;
  }
  // console.log(i);
}

for (let i = 1; i < 20; i++) {
  if (i == 5) {
    // console.log('Five');
    continue;
  }
  // console.log(i);
}
 
// While Loop

let i = 0;
while (i < 10) {
  // console.log(i);
  i++;
}

let myArray2 = ['captain', 'ironman', 'thor', 'hulk', 'blackwidow', 'hawkeye'];

let arr = 0;
while (arr < myArray2.length) {
  // console.log(myArray2[arr]);
  arr++;
}


// Do While Loop
let j = 0;
do {
  console.log(j);
  j++;
}
while (j < 10);

