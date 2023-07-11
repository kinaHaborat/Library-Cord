import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { style } from './styles.js';

@customElement('comp-header')
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

      <div class="header">
        <div class="header-wrapper">
          <img
            src="/assets/logos/logo_gray.svg"
            alt=""
            class="header-logo"
            height="50"
            wigth="auto"
          />
          <div class="profileSection-wrapper">
            <i id="header-profileIcon" class="fa-solid fa-user"></i>
            <div class="loginRegister-wrapper">
              <span class="header-login">Login</span>
              <span class="header-register">Register</span>
            </div>
          </div>
        </div>
      </div>`;
  }
}
