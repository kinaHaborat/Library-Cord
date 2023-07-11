import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import { style } from './styles.js';
import { Library } from '../src/classes/Library.js';

import './components/header/comp-header.js';
import './components/footer/comp-footer.js';
import './components/main/comp-main.js';

@customElement('library-cord')
export class LibraryCord extends LitElement {
  @property({ type: String }) header = 'My app';

  static styles = style;

  render() {
    const myLibrary = new Library();

    myLibrary.addBook('The Catcher in the Rye', 'J.D. Salinger', 5);
    myLibrary.addBook('Zé da Manga no Seu Melhor', 'Zé da Manga', 2);
    myLibrary.addBook('Como ser um bom professor!', 'Tomás Taveira', 7);

    return html`
      <header>
        <comp-header></comp-header>
      </header>
      <main>
        <comp-main></comp-main>
      </main>
      <footer>
        <comp-footer></comp-footer>
      </footer>
    `;
  }
}
