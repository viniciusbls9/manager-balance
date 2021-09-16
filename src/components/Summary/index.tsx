import { useContext } from 'react';
import { useTransactions } from 'hooks/useTransactions';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import * as Styled from './styles';

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      console.log(transaction);
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws -= transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Styled.Container>
      <Styled.CardSummary>
        <Styled.HeaderCard>
          <Styled.ParagraphCard>Entradas</Styled.ParagraphCard>
          <Styled.IconCard src={incomeImg} alt="Entradas" />
        </Styled.HeaderCard>
        <Styled.ValueCard>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.deposits)}
        </Styled.ValueCard>
      </Styled.CardSummary>
      <Styled.CardSummary>
        <Styled.HeaderCard>
          <Styled.ParagraphCard>Saídas</Styled.ParagraphCard>
          <Styled.IconCard src={outcomeImg} alt="Saídas" />
        </Styled.HeaderCard>
        <Styled.ValueCard>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.withdraws)}
        </Styled.ValueCard>
      </Styled.CardSummary>
      <Styled.CardSummary background="#33cc95" color="#fff">
        <Styled.HeaderCard>
          <Styled.ParagraphCard>Total</Styled.ParagraphCard>
          <Styled.IconCard src={totalImg} alt="Total" />
        </Styled.HeaderCard>
        <Styled.ValueCard>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.total)}
        </Styled.ValueCard>
      </Styled.CardSummary>
    </Styled.Container>
  );
}
