/* create a user object that has 3 properties 
1. username
2. password
3. age
*/
// username and password should be private and should not be accessible by running objectName.username

// // Private class features

// class ClassWithPrivateField {
//   #privateKey;
//   constructor(privateKey) {
//     this.#privateKey = privateKey;
//   }
//   get pvKey() {
//     return this.#getPrivatekey(); //reminder - use this to access function of the current object
//   }
//   #getPrivatekey() {
//     return this.#privateKey;
//   }
// }

// const myId = new ClassWithPrivateField(1111);
// // console.log(`myId.getPrivateKey()`, myId.getPrivatekey()); // will return error
// console.log(`myId.privateKey`, myId.privateKey);
// console.log(`myId.pvKey`, myId.pvKey);

// // My Solution
// // using Private Class Features
// class User {
//   #username;
//   #password;
//   constructor(username, password, age) {
//     this.#username = username;
//     this.#password = password;
//     this.age = age;
//   }
//   get leak() {
//     return this.#leakData();
//   }
//   #leakData() {
//     return `Password of ${this.#username} is ${this.#password} and he is ${
//       this.age
//     } years old`;
//   }
// }

// const jay = new User("Jay", "123@123", 22);
// console.log(jay.leak);
// console.log(jay.age);
// console.log(jay.username);
// console.log(jay.password);
// console.log(jay.trash);
// ----------------------------------------------------------------------------
// her solution
// using Symbols

// // which is pretty useless since you can access the symbols in the same scope

// const username = Symbol("username");
// const password = Symbol("password");

// const user = {
//   [username]: "xyz",
//   [password]: "123",
//   age: 22,
// };

// console.log(user.username); //will return undefined

// console.log(user[username]); //will return the actual username because the symbol declared and symbol accessed are in the same scope

// console.log(user.password);
// console.log(user[password]);

// My modification to it - putting the symbol in different scope
function newScope() {
  const username = Symbol("username");
  const password = Symbol("password");

  const user = {
    [username]: "ajaychaudharyrajasthan@gmail.com",
    [password]: "@123@123",
    age: 22,
    leak: function () {
      return `password of ${this[username]} is ${this[password]} and his age is ${this.age}`;
    },
    // note we can access the symbols for username and password since it is in the scope of the object 'user'
  };
  return user;
}
const newUser = newScope();

console.log(newUser.username);

// console.log(user[username]); // now this will throw error since you cannot access [username] symbol as it is in the different scope

console.log(newUser.password);

// console.log(user[password]);

console.log(newUser.age);

console.log(newUser.leak());

// please also see the above solution using the PRIVATE CLASS FEATURES
// new things to learn there
