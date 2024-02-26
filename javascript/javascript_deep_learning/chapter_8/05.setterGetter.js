class User {
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(value) {
    this._name = value;
  }

  get password() {
    return `${this._password}topu`;
  }

  set password(value) {
    this._password = value;
  }
}

let user = new User("John", "abc");
console.log(user.password);
console.log(user.name);

function User1(name, password) {
  this._name = name;
  this._password = password;

  Object.defineProperty(this, "name", {
    get: function() {
      return this._name.toUpperCase();
    },
    set: function(value) {
      this._name = value;
    }
  });

  Object.defineProperty(this, "password", {
    get: function() {
      return this._password.toUpperCase() ;
    },
    set: function(value) {
      this._password = value;
    }
  });
}

let user1 = new User1("John", "abc");
console.log(user1.password);


const User3 = {
  _name: "John",
  _password: "abc",
  get name() {
    return this._name.toUpperCase();
  },
  set name(value) {
    this._name = value;
  },
  get password() {
    return this._password.toUpperCase();
  },
  set password(value) {
    this._password = value;
  }
};

console.log(User3.password); 