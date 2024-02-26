class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username,email,password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse(course) {
    console.log(`${this.username} is now teaching ${course}`);
  }
}

const teacher = new Teacher("John", "jhon@gmail.com", "1234");
teacher.addCourse("JS");

const user = new User("Topu");
user.logMe();

//staticprop
class User1 {
  // static staticProp = "I am static";
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }

 static createId() {
    return `123`;
  }
}

const user1 = new User1("Topu");
// console.log(user1.createId()); 

class Teacher1 extends User1 {
  constructor(username,password) {
    super(username);
    this.password = password;
  }

  addCourse(course) {
    console.log(`${this.username} is now teaching ${course}`);
  }
}

const teacher1 = new Teacher1("Nazim", "1234");
teacher1.logMe("JS");
console.log(teacher1.createId());