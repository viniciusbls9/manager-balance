import { Summary } from '../Summary'
import { TransactionsTable } from '../TransactionsTable'
import * as Styled from './styles'

export function Dashboard() {
  return (
    <Styled.Container>
      <Summary />
      <TransactionsTable />
    </Styled.Container>
  )
}
