/* 
1. title 
2. director
3. genre
4. Release Year
5. Rating

function logOverview() 
 returns "<movie> a<genre> film directed by <director> was released in <releaseYear>. It received a rating of <rating>"

 use class or function syntax to create the prototype

*/

// // function syntax
// function Movie(title, director, genre, ReleaseYear, Rating) {
//   (this.title = title),
//     (this.director = director),
//     (this.genre = genre),
//     (this.ReleaseYear = ReleaseYear),
//     (this.Rating = Rating);
// }

// Movie.prototype.Overview = function () {
//   return `${this.title} is a ${this.genre} film directed by ${this.director} was released in ${this.ReleaseYear}. It received a rating of ${this.Rating}`;
// };

// Class Syntax
class Movie {
  constructor(title, director, genre, ReleaseYear, Rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.ReleaseYear = ReleaseYear;
    this.Rating = Rating;
  }

  get logOverview() {
    return this.Overview();
  }

  Overview() {
    return `${this.title} is a ${this.genre} film directed by ${this.director} was released in ${this.ReleaseYear}. It received a rating of ${this.Rating}`;
  }
}

const sholay = new Movie("Sholay", "gabbar", "drama-action", "1999", 10);
console.log(sholay.logOverview); // getter method of class , cannot be used with function syntax
console.log(sholay.Overview());
