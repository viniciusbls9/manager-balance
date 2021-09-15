import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import * as Styled from './styles';

interface TransactionProps {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    api
      .get('/transactions')
      .then((response) => setTransactions(response.data.transactions));
  }, []);

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
          {transactions.map((transaction) => (
            <Styled.Tr key={transaction.id}>
              <Styled.Td>{transaction.title}</Styled.Td>
              <Styled.Td
                transactionTypeColor={
                  transaction.type === 'deposit' ? '#33cc95' : '#e52e4d'
                }
              >
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(transaction.amount)}
              </Styled.Td>
              <Styled.Td>{transaction.category}</Styled.Td>
              <Styled.Td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt)
                )}
              </Styled.Td>
            </Styled.Tr>
          ))}
        </Styled.Tbody>
      </Styled.Table>
    </Styled.Container>
  );
}
