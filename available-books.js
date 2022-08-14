console.log(`welcome to the first code challenge of js`);

// each book will have
// 1. title
// 2. author
// 3. isbn
// 4. numCopies

// get availability - 0 out of stock , >10 - in stock , <10 - low stock
// sell - default 1 unit
// restock - default 5 units

// using classes
class Book {
  constructor(title, author, isbn, numCopies) {
    (this.title = title),
      (this.author = author),
      (this.isbn = isbn),
      (this.numCopies = numCopies);
  }
  get available() {
    return this.numCopies > 10
      ? "in stock"
      : this.numCopies < 1
      ? "out of stock"
      : "low stock";
  }
  sell(numCopies = 1) {
    this.numCopies -= numCopies;
  }
  restock(numCopies = 5) {
    this.numCopies += numCopies;
  }
}

// // using function
// function Book(title, author, isbn, numCopies) {
//   this.title = title;
//   this.author = author;
//   this.isbn = isbn;
//   this.numCopies = numCopies;
// }
// Book.prototype.getAvailability = function () {
//   return this.numCopies == 0
//     ? "out of stock"
//     : this.numCopies < 10
//     ? "low stock"
//     : "in stock";
// };
// Book.prototype.sell = function (numCopiesSold = 1) {
//   this.numCopies -= numCopiesSold;
// };
// Book.prototype.reStock = function (numCopiesRestocked = 5) {
//   this.numCopies += numCopiesRestocked;
// };

const jungleBook = new Book("jungle book", "rudyard kipling", 4444444, 1);

console.log(jungleBook.available);
jungleBook.sell();
console.log(jungleBook.available);
jungleBook.restock(11);
console.log(jungleBook.available);
