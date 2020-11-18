import { keyframes } from 'styled-components';

export const springUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(5rem) scale(0.75);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-5rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(5rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
