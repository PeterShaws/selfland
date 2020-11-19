import styled from 'styled-components';

export const Container = styled.button`
  padding: 1.5rem;
  font-weight: 500;
  color: var(--gainsboro);
  background-color: var(--claret);
  border: 0.1rem solid var(--gainsboro-ghost);
  border-radius: var(--length-border-radius);
  transition: border-color 0.2s, background-color 0.2s;
  cursor: pointer;

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:not([disabled]) {
    &:hover,
    &:focus {
      background-color: var(--claret-dark);
      border-color: var(--claret-light);
    }
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
  }
`;
