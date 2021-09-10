import Modal from "react-modal";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import closeImg from "../../assets/close.svg";
import * as Styled from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
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
      <Styled.Container>
        <Styled.ModalTitle>Cadastrar transação</Styled.ModalTitle>

        <Styled.ModalInput placeholder="Título" />

        <Styled.ModalInput placeholder="Valor" type="number" />

        <Styled.TransactionTypeContainer>
          <Styled.TransactionButton type="button">
            <Styled.TransactionImgButton src={incomeImg} alt="Entrada" />
            <Styled.TransactionTextType>entrada</Styled.TransactionTextType>
          </Styled.TransactionButton>

          <Styled.TransactionButton type="button">
            <Styled.TransactionImgButton src={outcomeImg} alt="Entrada" />
            <Styled.TransactionTextType>saída</Styled.TransactionTextType>
          </Styled.TransactionButton>
        </Styled.TransactionTypeContainer>

        <Styled.ModalInput placeholder="Categoria" type="number" />

        <button type="submit">Cadastrar</button>
      </Styled.Container>
    </Modal>
  );
}
