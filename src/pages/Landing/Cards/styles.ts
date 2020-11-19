import styled from 'styled-components';

import { springUp } from '../../../utils/animations';

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  align-items: stretch;
  margin: -0.75rem;
  list-style-type: none;

  .card {
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

    @media (max-width: 1024px) {
      width: calc(50% - 1.5rem);
    }

    @media (max-width: 640px) {
      width: calc(100% - 1.5rem);

      header {
        flex-direction: row;
        justify-content: center;
        margin-bottom: 0.75rem;

        svg {
          width: 2rem;
          height: 2rem;
          margin: 0 0.75rem;
        }
      }
    }
  }
`;
