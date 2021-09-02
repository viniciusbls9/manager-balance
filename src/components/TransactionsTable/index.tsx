import { useEffect } from 'react'
import { api } from '../../services/api'
import * as Styled from './styles'

export function TransactionsTable() {

  useEffect(() => {
    api.get('/transactions')
      .then(response => console.log(response.data))
  }, [])

  return (
    <Styled.Container>
      <Styled.Table>
        <Styled.Thead>
          <Styled.Tr>
            <Styled.Th>Título</Styled.Th>
            <Styled.Th>Valor</Styled.Th>
            <Styled.Th>Categoria</Styled.Th>
            <Styled.Th>Data</Styled.Th>
          </Styled.Tr>
        </Styled.Thead>
        <Styled.Tbody>
          <Styled.Tr>
            <Styled.Td>Desenvolvimento de website</Styled.Td>
            <Styled.Td>R$ 12000</Styled.Td>
            <Styled.Td>Desenvolvimento</Styled.Td>
            <Styled.Td>20/02/2021</Styled.Td>
          </Styled.Tr>
          <Styled.Tr>
            <Styled.Td>Desenvolvimento de website</Styled.Td>
            <Styled.Td>- R$ 1000</Styled.Td>
            <Styled.Td>Desenvolvimento</Styled.Td>
            <Styled.Td>20/02/2021</Styled.Td>
          </Styled.Tr>
          <Styled.Tr>
            <Styled.Td>Desenvolvimento de website</Styled.Td>
            <Styled.Td>R$ 12000</Styled.Td>
            <Styled.Td>Desenvolvimento</Styled.Td>
            <Styled.Td>20/02/2021</Styled.Td>
          </Styled.Tr>
        </Styled.Tbody>
      </Styled.Table>
    </Styled.Container>
  )
}
