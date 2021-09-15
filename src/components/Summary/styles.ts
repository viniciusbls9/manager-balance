import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;
`;

interface CardSummaryProps {
  background?: string;
  color?: string;
}

export const CardSummary = styled.div<CardSummaryProps>`
  background: ${(props) => props.background || 'var(--shape)'};
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: ${(props) => props.color || 'var(--text-title)'};
`;

export const HeaderCard = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ParagraphCard = styled.p``;

export const IconCard = styled.img``;

export const ValueCard = styled.strong`
  display: block;
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 500;
  line-height: 3rem;
`;
