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

    .menu {
    }
    .menu-wrapper {
    }
  `,
];
