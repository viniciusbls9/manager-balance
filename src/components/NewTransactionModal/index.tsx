import React, { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';
import { api } from '../../services/api';
import * as Styled from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      title,
      value,
      category,
      type,
    };

    api.post('/transactions', data);
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Styled.Container onSubmit={handleCreateNewTransaction}>
        <Styled.ModalTitle>Cadastrar transação</Styled.ModalTitle>

        <Styled.ModalInput
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <Styled.ModalInput
          placeholder="Valor"
          type="number"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />

        <Styled.TransactionTypeContainer>
          <Styled.TransactionButton
            type="button"
            onClick={() => {
              setType('deposit');
            }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <Styled.TransactionImgButton src={incomeImg} alt="Entrada" />
            <Styled.TransactionTextType>entrada</Styled.TransactionTextType>
          </Styled.TransactionButton>

          <Styled.TransactionButton
            type="button"
            onClick={() => {
              setType('withdraw');
            }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <Styled.TransactionImgButton src={outcomeImg} alt="Entrada" />
            <Styled.TransactionTextType>saída</Styled.TransactionTextType>
          </Styled.TransactionButton>
        </Styled.TransactionTypeContainer>

        <Styled.ModalInput
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Styled.Container>
    </Modal>
  );
}
