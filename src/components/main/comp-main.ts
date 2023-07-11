import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

// styles
import { style } from './styles.js';

// Child Components
import '../menu/comp-menu.js';

// Interfaces

// Local storage
import {
  deleteData,
  editData,
  setData,
} from '../../localstorage/localstorage-services.js';

@customElement('comp-main')
export class MyElement extends LitElement {
  static styles = style;

  render() {
    setData('pew', { id: 2582375983, title: 'pew pew' });
    editData('pew', 2582375983, { id: 2582375983, title: 'pew pew PEW' });
    return html` <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />

      <div class="main">
        <div class="main-wrapper"></div>
      </div>`;
  }
}
