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
      /* Responsive */
      --max-width: 1065px;
      --padding: 1rem;
      --responsive-Width: min(var(--max-width), 100% - (var(--padding) * 2));
    }

    .header {
      border-bottom: 0.15rem var(--main-gray) solid;
    }
    .header-wrapper {
      width: var(--responsive-Width);
      margin-inline: auto;
      padding: 1rem 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .profileSection-wrapper {
      width: 150px;
      display: flex;
      justify-content: space-between;
    }
    .header-login,
    .header-register {
      margin: 0 0.2rem;
    }
  `,
];
