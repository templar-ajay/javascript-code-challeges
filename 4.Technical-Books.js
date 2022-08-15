"use strict";
// practice inheritance
// TechnicalBook class will take arguments
// 1. title
// 2. author
// 3. isbn
// 4. numCopies
// 5. edition
//  getEdition() - returns ->
import { Book } from "./modules/book.js";

class TechnicalBook extends Book {
  constructor(title, author, isbn, numCopies, edition) {
    super(title, author, isbn, numCopies);
    this.edition = edition;
  }
  getEdition() {
    return `this is ${this.edition} of the book "${this.title}"`;
  }
}

const LearnJS = new TechnicalBook(
  "learn Js",
  "templar-command0",
  4444444,
  11,
  "4th edition"
);

console.log(
  `the book "${LearnJS.title}" is ${
    LearnJS.availability || LearnJS.getAvailability()
  }`
);
LearnJS.sell(11);
console.log(
  `the book "${LearnJS.title}" is ${
    LearnJS.availability || LearnJS.getAvailability()
  }`
);
LearnJS.restock();
console.log(
  `the book "${LearnJS.title}" is ${
    LearnJS.availability || LearnJS.getAvailability()
  }`
);
console.log(LearnJS.getEdition());
