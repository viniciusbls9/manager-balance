import styled from 'styled-components'

export const Container = styled.form`
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: var(--shape);
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: filter 0.2s;
    font-weight: 600;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const ModalTitle = styled.h2`
  color: var(--text-title);
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

export const ModalInput = styled.input`
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  border-radius: 0.25rem;

  border: 1px solid #d7d7d7;
  background: #e7e9ee;

  font-weight: 400;
  font-size: 1rem;

  &::placeholder {
    color: var(--text-body);
  }

  & + input {
    margin-top: 1rem;
  }

  
`;
