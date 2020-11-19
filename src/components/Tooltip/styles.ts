import styled, { css } from 'styled-components';

interface ContainerProps {
  direction: 'top' | 'bottom';
}

export const Container = styled.div<ContainerProps>`
  position: relative;

  &:hover .tooltip {
    opacity: 1;
    z-index: 999;

    ${props =>
      props.direction === 'top'
        ? css`
            bottom: calc(100% + 1rem);
          `
        : css`
            top: calc(100% + 1rem);
          `}
  }

  .tooltip {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.25rem 1rem;
    white-space: nowrap;
    text-align: center;
    font-size: 1.4rem;
    line-height: 1.9rem;
    color: var(--rich-black);
    background-color: var(--gainsboro);
    border-radius: var(--length-border-radius);
    opacity: 0;
    pointer-events: none;
    box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.16),
      0 0.3rem 0.6rem rba(0, 0, 0, 0.23);

    ${props =>
      props.direction === 'top'
        ? css`
            bottom: 100%;
            transition: opacity 0.2s, bottom 0.2s;
          `
        : css`
            top: 100%;
            transition: opacity 0.2s, top 0.2s;
          `};

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      display: block;
      width: 0;
      height: 0;
      border-style: solid;

      ${props =>
        props.direction === 'top'
          ? css`
              top: 100%;
              border-color: var(--gainsboro) transparent transparent;
              border-width: 0.6rem 0.6rem 0;
            `
          : css`
              bottom: 100%;
              border-color: transparent transparent var(--gainsboro);
              border-width: 0 0.6rem 0.6rem;
            `};
    }
  }
`;
