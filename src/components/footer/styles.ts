import { css } from 'lit';

export const style = [
  css`
    :host {
      /* colors */
      --main-white: #ffffff;
      --main-gray: #666666;
      /* font-size */
      --title: 3rem;
      --sub-title: 1.5rem;
      /* font-family */
      --main-font-family: 'Exo', sans-serif;
      --secundary-font-family: ;
      /* Responsive */
      --max-width: 1065px;
      --padding: 1rem;
      --responsive-Width: min(var(--max-width), 100% - (var(--padding) * 2));
    }

    a {
      outline: none;
      text-decoration: none;
      cursor: default;
      color: inherit;
    }

    .footer {
      bottom: 0;
      width: 100%;
      background-color: #666666;
      position: fixed;
    }
    .footer-wrapper {
      width: var(--responsive-Width);
      margin-inline: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .footer-wrapper p,
    .footer-wrapper i,
    .policy-wrapper a {
      font-size: 20px;
      transition: 0.8s;
    }
    .footer-wrapper i:hover,
    .policy-wrapper a:hover {
      color: white;
      transform: scale(1.5);
      transition: 0.3s;
    }
    .socials-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      width: 15%;
    }
    .copyRight-wrapper {
      text-align: center;
      width: 30%;
    }

    .policy-wrapper {
      text-align: center;
      width: 15%;
    }
  `,
];
