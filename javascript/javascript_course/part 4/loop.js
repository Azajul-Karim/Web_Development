//for loop
for (var i = 1; i <= 5  ; i++) {
    console.log(i);
}

//Dry Run
/*
 i = 1, 1 <= 5 true, console.log(i) 1, i++ => i = 2

 i = 2, 2 <= 5 true, console.log(i) 2, i++ => i = 3

 i = 3, 3 <= 5 true, console.log(i) 3, i++ => i = 4

 i = 4, 4 <= 5 true, console.log(i) 4, i++ => i = 5

 i = 5, 5 <= 5 true, console.log(i) 5, i++ => i = 6

 i = 6, 6 <= 5 false, exit the loop!
*/ 

for (let i = 5; i >= 1; i--) {
    console.log(i)
}

//Dry Run
/*
 i = 5, 5 >= 1 true, console.log(i) 5, i-- => i = 4

 i = 4, 4 >= 1 true, console.log(i) 4, i-- => i = 3

 i = 3, 3 >= 1 true, console.log(i) 3, i-- => i = 2

 i = 2, 2 >= 1 true, console.log(i) 2, i-- => i = 1

 i = 1, 1 >= 1 true, console.log(i) 1, i-- => i = 0

 i = 0, 0 >= 1 false, exit the loop!
*/

//nasted loop
console.log('Nasted Loop');
for(let j = 1; j <= 3; j++){
    console.log("Outer Loop", j)
    for (let k = 1; k <= 3; k++) {
        console.log(j,k);
    }
}

//Dry Run
// Outer Loop 1
/*                                  
 j = 1, 1 <= 3 true

    k = 1, 1 <= 3 true, console.log(1,1), k++ => k = 2
    k = 2, 2 <= 3 true, console.log(1,2), k++ => k = 3
    k = 3, 3 <= 3 true, console.log(1,3), k++ => k = 4
    k = 4, 4 <= 3 false, exit the loop!

 j = 2, 2 <= 3 true, j++ => j = 3

    k = 1, 1 <= 3 true, console.log(2,1), k++ => k = 2
    k = 2, 2 <= 3 true, console.log(2,2), k++ => k = 3
    k = 3, 3 <= 3 true, console.log(2,3), k++ => k = 4
    k = 4, 4 <= 3 false, exit the loop!

 j = 3, 3 <= 3 true, j++ => j = 4

    k = 1, 1 <= 3 true, console.log(3,1), k++ => k = 2
    k = 2, 2 <= 3 true, console.log(3,2), k++ => k = 3
    k = 3, 3 <= 3 true, console.log(3,3), k++ => k = 4
    k = 4, 4 <= 3 false, exit the loop!

 j = 4, 4 <= 3 false, exit the loop!
*/

//While Loop
console.log('While Loop');
let m = 1;
while (m <= 5) {
    console.log(m);
    m++;
}

// loop with array
console.log('Loop with Array');
let fruits = ["Apple","Banana","Orange","Mango","Pineapple"]

for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}

//Nested Loop with Nested Array
console.log('Nested Loop with Nested Array');
let hero = [['Batman','Bruce Wayne'],['Spiderman','Peter Parker']]

for (let i = 0; i < hero.length; i++) {
    console.log( `List # ${i}`);
    for (let j = 0; j < hero[i].length; j++) {
        console.log(j, hero[i][j]);
    }
}

//For of Loop
console.log('For of Loop');
let fruits2 = ["Apple","Banana","Orange","Mango","Pineapple"]

for (let fruit of fruits2) {
    console.log(fruit);
}

