import styled from 'styled-components';

export const Container = styled.form`
  button[type='submit'] {
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

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;

interface TransactionButtonProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: 'rgba(51, 204, 149, 0.1)',
  red: 'rgba(229, 46, 77, 0.1)',
};

export const TransactionButton = styled.button<TransactionButtonProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background: ${(props) =>
    props.isActive ? colors[props.activeColor] : 'transparent'};

  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.3s;

  &:hover {
    border-color: #aaa;
  }
`;

export const TransactionImgButton = styled.img`
  width: 20px;
  height: 20px;
`;

export const TransactionTextType = styled.span`
  display: inline-block;
  margin-left: 1rem;
  font-size: 1rem;
  color: var(--text-title);
`;
