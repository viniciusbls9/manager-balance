import logoImg from '../../assets/logo.svg';
import * as Styled from './styles';
interface HeaderProps {
  onOpenNewTransactionModalOpen: () => void;
}

export function Header({ onOpenNewTransactionModalOpen }: HeaderProps) {
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Logo src={logoImg} alt="dtmoney" />
        <Styled.Button type="button" onClick={onOpenNewTransactionModalOpen}>
          Nova transação
        </Styled.Button>
      </Styled.Content>
    </Styled.Container>
  );
}
