import styled, { css } from 'styled-components';

interface ContainerProps {
  hasFocus: boolean;
  hasValue: boolean;
  hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  position: relative;
  padding: 1.5rem;
  color: var(--gainsboro);
  background-color: var(--prussian-blue);
  border: 0.1rem solid var(--gainsboro-ghost);
  border-radius: var(--length-border-radius);
  transition: border-color 0.2s, background-color 0.2s;
  cursor: text;

  &:hover {
    background-color: var(--prussian-blue-dark);
    border-color: var(--prussian-blue-light);
  }

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: -0.1rem;
    height: 0;
    padding: 0.2rem 1rem;
    font-size: 1.2rem;
    color: var(--gainsboro);
    background-color: var(--claret);
    border-bottom-left-radius: var(--length-border-radius);
    border-bottom-right-radius: var(--length-border-radius);
    opacity: 0;
    transition: height 0.2s, opacity 0.2s, margin-bottom 0.2s;
  }

  ${props =>
    props.hasFocus &&
    css`
      background-color: var(--prussian-blue-dark);
      border-color: var(--prussian-blue-light);
    `}

  ${props =>
    props.hasError &&
    css`
      border-color: var(--claret);
      border-bottom-left-radius: 0;

      &::after {
        content: attr(data-error);
        height: auto;
        opacity: 1;
      }
    `}

  svg {
    flex-shrink: 0;
    width: 1.8rem;
    height: 1.8rem;
    margin-right: 1.6rem;
    color: var(--gainsboro);
    opacity: 0.5;
    transition: color 0.2s, opacity 0.2s;
    cursor: text;

    ${props =>
      props.hasValue &&
      css`
        color: var(--gainsboro);
        opacity: 1;
      `}

    ${props =>
      props.hasError &&
      css`
        color: var(--claret-light);
        opacity: 1;
      `}
  }

  input {
    flex: 1;
    color: var(--gainsboro);
    background-color: transparent;
    border: none;
    outline: none;

    &::placeholder {
      font-style: italic;
      color: var(--gainsboro);
      opacity: 0.5;
    }
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;

    ${props =>
      props.hasError &&
      css`
        margin-bottom: 1.5rem;
      `}
  }
`;
