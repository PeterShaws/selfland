import styled from 'styled-components';

import { appearFromLeft, appearFromRight } from '../../utils/animations';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 5rem);
  background-color: black;
  overflow: auto;

  .content {
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
      display: flex;
      justify-content: center;
      padding: 1.5rem 0;

      .input + .input,
      button {
        margin-left: 1.5rem;
      }
    }
  }
`;
