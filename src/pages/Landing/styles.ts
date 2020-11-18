import styled from 'styled-components';

import {
  appearFromLeft,
  appearFromRight,
  springUp,
} from '../../utils/animations';

import background from '../../assets/landing-background.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 5rem);
  background-color: black;
  overflow: auto;
`;

export const Content = styled.section`
  flex: 1;
  position: relative;
  padding: 4rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-attachment: fixed;
    background-image: url(${background});
    background-size: cover;
    filter: saturate(0%) sepia(100%) hue-rotate(180deg) brightness(30%)
      saturate(200%);
  }

  .center {
    position: relative;
  }

  blockquote {
    text-align: center;
    font-size: 2rem;
    font-style: italic;
    animation: ${appearFromLeft} 1s;

    strong {
      display: block;
      margin-top: 1rem;
      font-weight: normal;
      font-style: normal;
      font-size: 1.6rem;
      opacity: 0.54;
    }
  }

  h3,
  form {
    animation: ${appearFromRight} 1s;
  }

  h3 {
    text-align: center;
  }

  form {
    .center {
      display: flex;
      justify-content: center;
      padding: 1.5rem 0;
    }
  }
`;

export const Cards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  align-items: stretch;
  margin: -0.75rem;
  list-style-type: none;

  li {
    display: flex;
    flex-direction: column;
    width: calc(33% - 1.5rem);
    margin: 0.75rem;
    padding: 1.5rem;
    background-color: rgba(0, 0, 0, 0.3);
    border: 0.1rem solid var(--gainsboro-ghost);
    border-radius: var(--length-border-radius);
    box-shadow: 0 0 0 transparent;
    transition: box-shadow 0.2s, border-color 0.2s, transform 0.2s;
    animation: ${springUp} 1s;

    &:hover {
      border-color: var(--gainsboro);
      box-shadow: 0 0 10px var(--gamboge);
      transform: translateY(-0.4rem);
    }

    header {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 1.5rem;
      color: var(--gamboge);

      svg {
        width: 3rem;
        height: 3rem;
        margin: 1.5rem 0;
      }

      h4 {
        font-weight: normal;
      }
    }

    p {
      text-align: center;
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
  }
`;

export const ImageCredit = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  white-space: nowrap;
  font-size: 1rem;
  opacity: 0.5;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  * {
    display: inline;
  }
`;
