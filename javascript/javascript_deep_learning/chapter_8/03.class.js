// ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password} is encrypted`;
  }

  changeUserName() {
    return `${this.username.toUpperCase()} `;
  }
}

const user = new User("John", "jhon@gmail.com", "1234");

// console.log(user.encryptPassword());
// console.log(user.changeUserName());

//Behind the scene
// function User(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// }

// User.prototype.encryptPassword = function () {
//   return `${this.password} is encrypted`;
// };

// User.prototype.changeUserName = function () {
//   return `${this.username.toUpperCase()} `;
// };

// const user1 = new User("John", "jhon@gmail.com", "1234");

// console.log(user1.encryptPassword());
// console.log(user1.changeUserName());



