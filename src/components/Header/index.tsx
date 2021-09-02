import logoImg from '../../assets/logo.svg'
import * as Styled from './styles'

export function Header() {
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Logo src={logoImg} alt="dtmoney" />
        <Styled.Button type="button">Nova transação</Styled.Button>
      </Styled.Content>
    </Styled.Container>
  )
}
