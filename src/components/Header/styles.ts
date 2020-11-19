import styled, { css } from 'styled-components';

interface ContainerProps {
  showNav: boolean;
}

export const Container = styled.header<ContainerProps>`
  position: relative;
  height: 5rem;
  background-color: black;
  border-bottom: 1px solid #ffffff20;
  /* box-shadow: 0 0px 10px 10px #000000aa; */

  .center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  h1 {
    font-weight: normal;
    color: var(--gainsboro);
    opacity: 0.75;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }

  .right {
    display: flex;

    nav {
      display: flex;

      a {
        &.log-in {
          color: var(--gainsboro);

          &:hover {
            color: white;
          }
        }

        & + a {
          margin-left: 3rem;
        }
      }

      a + div,
      div + a,
      div + div {
        margin-left: 3rem;
      }

      @media (max-width: 680px) {
        position: absolute;
        left: 0;
        top: 5rem;
        width: 100vw;
        height: calc(100vh - 5rem);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.9);

        a + a,
        a + div,
        div + a,
        div + div {
          margin-left: 0;
          margin-top: 3rem;
        }

        ${props =>
          props.showNav
            ? css`
                display: flex;
              `
            : css`
                display: none;
              `}
      }

      @media (max-width: 600px) {
        top: 3rem;
        height: calc(100vh - 3rem);
      }
    }

    svg {
      width: 2rem;
      height: 2rem;

      &.toggle {
        @media (min-width: 681px) {
          display: none;
        }

        @media (max-width: 680px) {
          &.show-nav {
            ${props =>
              props.showNav
                ? css`
                    display: none;
                  `
                : css`
                    display: block;
                  `}
          }
          &.hide-nav {
            ${props =>
              props.showNav
                ? css`
                    display: block;
                  `
                : css`
                    display: none;
                  `}
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    height: 3rem;

    h1 {
      font-size: 2.16rem;
    }
  }
`;
