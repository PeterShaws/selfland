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
      font-weight: normal;
      text-transform: lowercase;

      @media (max-width: 1024px) {
        font-size: 3rem;
      }

      @media (max-width: 600px) {
        font-size: 2rem;
      }
    }

    section {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 0.5rem;

      img {
        height: 3rem;
        margin: 2.5rem;

        &[alt='macrohard'] {
          height: 5rem;
        }

        &[alt='mugpad'] {
          height: 4rem;
        }
      }

      @media (max-width: 1024px) {
        flex-wrap: wrap;

        img {
          height: 2rem;
          margin: 1.65rem;

          &[alt='macrohard'] {
            height: 3.3rem;
          }

          &[alt='mugpad'] {
            height: 2.64rem;
          }
        }
      }

      @media (max-width: 600px) {
        flex-wrap: wrap;

        img {
          height: 1.32rem;
          margin: 1rem;

          &[alt='macrohard'] {
            height: 2.178rem;
          }

          &[alt='mugpad'] {
            height: 1.7424rem;
          }
        }
      }
    }

    @media (max-width: 680px) {
      padding: 2rem 2rem 0;
    }

    @media (max-width: 640px) {
      padding: 1rem 1rem 0;
    }
  }
`;
