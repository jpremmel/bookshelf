//FRONT END

//BACK END
function Bookshelf() {
 this.books = [],
 this.currentID = 0
}

function Book(title, author, pubDate, genre = "unknown", review = "") {
  this.title = title,
  this.author = author,
  this.pubDate = pubDate,
  this.genre = genre,
  this.review = review
}
