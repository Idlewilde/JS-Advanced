class LibraryCollection {

    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length == this.capacity) {
            throw new Error("Not enough space in the collection.");
        }

        let book = { bookName, bookAuthor, payed: false };
        this.books.push(book);
        return `The ${bookName}, with an author ${bookAuthor}, collect.`

    }

    payBook(bookName) {
        if (!this.books.some(e => e.bookName == bookName)) { throw new Error(`${bookName} is not in the collection.`) };
        let book = this.books.find(e => e.bookName == bookName);
        if (book.payed) { throw new Error(`${bookName} has already been paid.`) }
        book.payed = true;
        return `${bookName} has been successfully paid.`
    }
    removeBook(bookName) {
        if (!this.books.some(e => e.bookName == bookName)) { throw new Error("The book, you're looking for, is not found.") };
        let book = this.books.find(e => e.bookName == bookName);
        if (!book.payed) { throw new Error(`${bookName} need to be paid before removing from the collection.`) }
        this.books.filter(e => e.bookName != bookName);
        return `${bookName} remove from the collection.`
    }

    getStatistics(bookAuthor) {
        let output = ''
        if (typeof (bookAuthor) == 'string') {
            if (!this.books.some(e => e.bookAuthor == bookAuthor)) { throw new Error(`${bookAuthor} is not in the collection.`) }
            for (let i = 0; i < this.books.length; i++) {
                if (this.books[i].bookAuthor == bookAuthor) {
                    if (this.books[i].payed == true) {
                        output += `${this.books[i].bookName} == ${bookAuthor} - Has Paid.\n`
                    }
                    else { output += `${this.books[i].bookName} == ${bookAuthor} - Not Paid.\n` }
                }
            }
        }
        else {
            output += `The book collection has ${this.capacity - this.books.length} empty spots left.\n`
            this.books.sort((a, b) => a.bookName - b.bookName);
            for (let i = 0; i < this.books.length; i++) {
                if (this.books[i].payed == true) {
                    output += `${this.books[i].bookName} == ${this.books[i].bookAuthor} - Has Paid.\n`
                }
                else { output += `${this.books[i].bookName} == ${this.books[i].bookAuthor} - Not Paid.\n` }
            }
        }

        return output.trim()
    }
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());



