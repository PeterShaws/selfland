import styled from 'styled-components';

export const Container = styled.div`
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

      a + a {
        margin-left: 3rem;
      }
    }

    svg {
      width: 2rem;
      height: 2rem;
      margin-left: 3rem;
    }
  }
`;
