// export class Book {
//   constructor(title, author, isbn, numCopies) {
//     this.title = title;
//     this.author = author;
//     this.isbn = isbn;
//     this.numCopies = numCopies;
//   }
//   get availability() {
//     return this.getAvailability(); // using `this` is important here because the function getAvailability is bound this object not to the global object
//   }
//   getAvailability() {
//     return this.numCopies == 0
//       ? "out of stock"
//       : this.numCopies < 10
//       ? "Low on stock"
//       : "in stock";
//   }
//   sell(numCopiesSold = 1) {
//     this.numCopies -= numCopiesSold;
//   }
//   restock(numCopiesRestocked = 5) {
//     this.numCopies += numCopiesRestocked;
//   }
// }

export function Book(title, author, isbn, numCopies) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
  this.numCopies = numCopies;
}

Book.prototype.getAvailability = function () {
  return this.numCopies == 0
    ? "out of stock"
    : this.numCopies < 10
    ? "Low on stock"
    : "in stock";
};

Book.prototype.sell = function (numCopiesSold = 1) {
  this.numCopies -= numCopiesSold;
};

Book.prototype.restock = function (numCopiesRestocked = 5) {
  this.numCopies += numCopiesRestocked;
};
