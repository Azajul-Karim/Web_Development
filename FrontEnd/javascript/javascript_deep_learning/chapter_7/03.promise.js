const promiseOne = new Promise(function (resolve, reject) {
  //Do an Async Task
  //DB Call, Cryptography, network call, etc.
  setTimeout(() => {
    // console.log('Task 1');
    resolve();
  }, 2000);
});

promiseOne.then(() => {
  // console.log('Task 1 is completed');
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Task 2 is completed");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ userName: "John", email: "akt01711@gmail.com" });
  }, 1000);
});
promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ userName: "John", email: "topu@gmail.com" });
    } else {
      reject("Task 4 is not completed");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Task 4 is completed");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ userName: "javascript", email: "jhon@gmail.com" });
    } else {
      reject("ERROR: JS want wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const user = await promiseFive;
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUser() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getAllUser();

//  
