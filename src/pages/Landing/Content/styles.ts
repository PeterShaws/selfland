import styled from 'styled-components';

import background from '../../../assets/landing-background.png';

export const Container = styled.section`
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