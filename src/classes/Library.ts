import { Book } from './book.js';

export class Library {
  private _books: Book[] = [];

  addBook(title: string, author: string, stock: number) {
    const newBook = new Book(title, author, stock);
    this._books.push(newBook);
  }

  setNotAvaliable(title: string) {
    const foundBook = this.avaliableBooks.find(book => book.title === title);
    if (foundBook) {
      foundBook.available = false;
      console.log('No longer avaliable');
    }
  }

  public get avaliableBooks(): Book[] {
    const foundArray = this._books.filter(book => book.available === true);
    return foundArray;
  }

  public set borrowBook(title: string) {
    const foundBook = this.avaliableBooks.find(book => book.title === title);
    if (foundBook) {
      if (foundBook.inStock > 0) {
        foundBook.inStock -= 1;
        console.log(foundBook.inStock);
      } else {
        this.setNotAvaliable(title);
        console.log('ERROR! The book is no longer avaliable.');
      }
    } else {
      console.log("ERROR! The book doesn't exist in our plataform");
    }
  }
}
