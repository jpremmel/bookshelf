//FRONT END
var myBookshelf = new Bookshelf();

$(document).ready(function() {
  $("#addBook").submit(function(event) {
    event.preventDefault();
    var titleInput = $("input#title").val();
    var authorInput = $("input#author").val();
    var newBook = new Book(titleInput, authorInput);
    var dateInput = parseInt($("input#pubDate").val());
    newBook.addPubDate(dateInput);
    $("input:checkbox:checked").each (function() {
      var genre = $(this).val();
      newBook.addGenre(genre);
    });
    var reviewInput = $("input#review").val();
    newBook.addReview(reviewInput);
    myBookshelf.addBook(newBook);
    console.log(myBookshelf);

    $("#addBook").trigger("reset");
  });

  $("#clear").click(function() {
    $("#addBook").trigger("reset");
  });
});

function clearForm() {
  $("#title").val("");
  $("#author").val("");
  $("#pubDate").val("");
  $("#review").val("");
}


//BACK END
function Bookshelf() {
 this.books = [],
 this.currentId = 0
}

Bookshelf.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Bookshelf.prototype.addBook = function(book) {
  book.id = this.assignId();
  this.books.push(book);
}

Bookshelf.prototype.getBook = function(id) {
  for (var i = 0; i < this.books.length; i++) {
    if (this.books[i]) {
      if (this.books[i].id == id) {
        return this.books[i];
      }
    }
  }
  return false;
}

Bookshelf.prototype.removeBook = function(id) {
  for (var i=0; i< this.books.length; i++) {
    if(this.books[i]){
      if(this.books[i].id == id) {
        delete this.books[i];
        return true;
      }
    }
  }
  return false;
}

Bookshelf.prototype.getBookByTitle = function(title) {
  for (var i = 0; i < this.books.length; i++) {
    if (this.books[i]) {
      if (this.books[i].title.toLowerCase() === title.toLowerCase()) {
        return this.books[i];
      }
    }
  }
  return false;
}

function Book(title, author, genre = []) {
  this.title = title,
  this.author = author,
  this.genre = genre
}

Book.prototype.addGenre = function(genre) {
  this.genre.push(genre);
  return this.genre;
}

Book.prototype.addPubDate = function(pubDate) {
  this.pubDate = pubDate;
  return pubDate;
}
Book.prototype.addReview = function(review) {
  this.review = review;
  return review;
}
