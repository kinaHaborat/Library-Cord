import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { style } from './styles.js';

@customElement('comp-footer')
export class MyElement extends LitElement {
  static styles = style;

  render() {
    return html` <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />

      <div class="footer">
        <div class="footer-wrapper">
          <div class="policy-wrapper">
            <a href="" class="policy-link"><span>Privacy Policy</span></a>
          </div>
          <div class="copyRight-wrapper"><p>© Copyright, GFG</p></div>
          <div class="socials-wrapper">
            <a href=""><i class="fa-brands fa-facebook "></i></a>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
            <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
            <a href=""><i class="fa-brands fa-twitter"></i></a>
          </div>
        </div>
      </div>`;
  }
}
