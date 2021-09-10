import Modal from "react-modal";
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

        <Styled.ModalInput placeholder="Categoria" type="number" />

        <button type="submit">Cadastrar</button>
      </Styled.Container>
    </Modal>
  );
}
