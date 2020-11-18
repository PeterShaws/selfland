import styled, { css } from 'styled-components';

interface ContainerProps {
  hasFocus?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
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

  ${props =>
    props.hasFocus &&
    css`
      background-color: var(--prussian-blue-dark);
      border-color: var(--prussian-blue-light);
    `}

  & + div {
    margin-top: 0.8rem;
  }

  svg {
    flex-shrink: 0;
    width: 1.8rem;
    height: 1.8rem;
    margin-right: 1.6rem;
    cursor: text;
  }

  input {
    flex: 1;
    color: var(--color-white);
    background-color: transparent;
    border: none;
    outline: none;

    &::placeholder {
      font-style: italic;
      color: var(--gainsboro);
      opacity: 0.5;
    }
  }
`;
