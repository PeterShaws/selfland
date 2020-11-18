import { lighten, shade, transparentize } from 'polished';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: black;
    color: var(--gainsboro);
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  button {
    font-family: 'Averia Serif Libre', serif;
    font-size: 1.8rem;
  }

  button {
    cursor: pointer;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--gamboge);
    transition: color 0.2s;

    &:hover {
      color: var(--gamboge-light);
    }

    svg {
      width: 2em;
      height: 2em;
      margin-right: 1.6em;
    }
  }

  h1, h2 {
    font-family: 'Cinzel Decorative', serif;
  }

  h3, h4, h5, h6 {
    font-family: 'Averia Serif Libre', serif;
  }

  hr {
    border: none;
    width: 50%;
    height: 0.1rem;
    background-color: var(--claret);
    margin: 4rem auto;
  }

  .center {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  :root {
    /* @see https://coolors.co/22223b-4a4e69-9a8c98-c9ada7-f2e9e4 */
    --prussian-blue: #002642;
    --prussian-blue-dark: ${shade(0.2, '#002642')};
    --prussian-blue-light: ${lighten(0.2, '#002642')};
    --claret: #840032;
    --claret-dark: ${shade(0.2, '#840032')};
    --claret-light: ${lighten(0.2, '#840032')};
    --gamboge: #e59500;
    --gamboge-light: ${lighten(0.2, '#e59500')};
    --gainsboro: #e5dada;
    --gainsboro-dark: ${shade(0.3, '#e5dada')};
    --gainsboro-ghost: ${transparentize(0.8, '#e5dada')};
    --rich-black: #02040f;

    --length-border-radius: 0.3rem;
  }
`;

export default GlobalStyles;
