/*Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise


       1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books
*/
class Book
 {
    //properties
    tittle
    author
    pages
    isAvailable=true
    constructor(tittle,author,pages,isAvailable)
    {
        this.tittle=tittle
        this.author=author
        this.pages=pages
        this.isAvailable=isAvailable
    }
    //METHODS
    borrow()
   {
    if(this.isAvailable)
    { this.isAvailable=false
        return "book is borrowed"
    }
   }
returnBook()
{
    if(!this.isAvailable)
    {this.isAvailable=true
        return "book is returned"
    }
}
getInfo()
{
return ("book tittle is "+this.tittle+" of author "+this.author+" pages of "+this.pages)
}
isLongBook()
{
if(this.pages<300)
{
    return false
}
}
}
let b1=new Book('Blue Ocean','ManiSherma gatoji',180,true)
let b2=new Book('Eyes Dont lie','Manitrisha ',350,false)
let b3=new Book('Our Fault','Nick ',300,false)
let b4=new Book('My Fault','Noah ',250,true)
let b5=new Book('Your Fault','trisha ',450,true)
//i. Display info of all books
console.log(b1.getInfo())
console.log(b2.getInfo())
console.log(b3.getInfo())
console.log(b4.getInfo())
console.log(b5.getInfo())
//ii. Borrow 2 books and show their availability status
console.log(b1.borrow())
console.log(b4.borrow())
    //  iii. Return 1 book and show updated status
    console.log(b1.returnBook())
    //iv. Count how many books are "long books" (more than 300 pages)
    let longBooksCount=0
      let books=[b1,b2,b3,b4,b5] 
      for(let Book of books){
        if(Book.isLongBook())
            longBooksCount++   
      }
       console.log("number of long books:",longBooksCount) 
     // v. List all available books
       let availableBooks=book.filter(book=>book.isAvailable===true)
     console.log(availableBooks)


