import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import * as Styled from './styles';

export function Summary() {
  return (
    <Styled.Container>
      <Styled.CardSummary>
        <Styled.HeaderCard>
          <Styled.ParagraphCard>Entradas</Styled.ParagraphCard>
          <Styled.IconCard src={incomeImg} alt="Entradas" />
        </Styled.HeaderCard>
        <Styled.ValueCard>R$ 1000,00</Styled.ValueCard>
      </Styled.CardSummary>
      <Styled.CardSummary>
        <Styled.HeaderCard>
          <Styled.ParagraphCard>Saídas</Styled.ParagraphCard>
          <Styled.IconCard src={outcomeImg} alt="Saídas" />
        </Styled.HeaderCard>
        <Styled.ValueCard>- R$ 500,00</Styled.ValueCard>
      </Styled.CardSummary>
      <Styled.CardSummary background="#33cc95" color="#fff">
        <Styled.HeaderCard>
          <Styled.ParagraphCard>Total</Styled.ParagraphCard>
          <Styled.IconCard src={totalImg} alt="Total" />
        </Styled.HeaderCard>
        <Styled.ValueCard>R$ 500,00</Styled.ValueCard>
      </Styled.CardSummary>
    </Styled.Container>
  );
}
