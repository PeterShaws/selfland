import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background-color: black;
  border: solid var(--gainsboro-ghost);
  border-width: 0.1rem 0;
  box-shadow: inset 0 0px 10px 10px #000000aa;

  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem;

    h1 {
      text-transform: lowercase;
    }

    section {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 3rem;

      img {
        height: 3rem;

        &[alt='macrohard'] {
          height: 5rem;
        }

        &[alt='mugpad'] {
          height: 4rem;
        }

        & + img {
          margin-left: 5rem;
        }
      }
    }
  }
`;
