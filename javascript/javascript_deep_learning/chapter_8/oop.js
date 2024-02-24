const user ={
  userName : "Topu",
  loginCount : 32,
  signedIn : true,

  getUserDetails(){
    // console.log(`Username : ${this.userName}`);
    // console.log(this);
  }
}

// console.log(user.getUserDetails());
// console.log(user.userName);
// console.log(this);
 
function User(userName, loginCount, signedIn){
  this.userName = userName;
  this.loginCount = loginCount;
  this.signedIn = signedIn;

  return this;
}

const userOne = new User("Topu", 32, true);

console.log(userOne);