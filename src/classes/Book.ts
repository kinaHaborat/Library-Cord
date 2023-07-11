export class Book {
  public title: string;

  public author: string;

  public available: boolean;

  public inStock: number;

  constructor(title: string, author: string, stock: number) {
    this.title = title;
    this.author = author;
    this.available = true;
    this.inStock = stock;
  }
}
