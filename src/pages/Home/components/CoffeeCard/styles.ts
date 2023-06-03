import { styled } from 'styled-components';

export const CoffeeCardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 16rem;
  height: 19.375rem;
  background: ${(props) => props.theme['gray-200']};
  border-radius: 0.375rem 2.25rem;
  padding: 1.5rem 1.25rem;
  margin: auto 1rem;

  @media (max-width: 1048px) {
    margin: auto 0.3rem;
  }
`;

export const CoffeeInfo = styled.div`
  margin: -20px auto;
  text-align: center;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 1.25rem;
    margin-top: 1rem;
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['gray-800']};
  }

  p {
    text-align: center;
    max-width: 13.5rem;
    margin-top: 0.5rem;
    color: ${(props) => props.theme['gray-600']};
    font-size: 0.875rem;
  }
`;

export const CoffeeImage = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  margin-top: -20px;
`;

export const TagList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 2px;
  flex-wrap: wrap;
  margin-top: 0.75rem;
`;

export const CoffeeTag = styled.span`
  border-radius: 100px;
  font-size: 0.625rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  background-color: ${(props) => props.theme['yellow-300']};
  color: ${(props) => props.theme['yellow-700']};
`;

export const CoffeeFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;

  .price {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;
  }
`;

export const CurrencySymbol = styled.p`
  color: ${(props) => props.theme['base-text']};
`;

export const CoffeePrice = styled.p`
  color: ${({ theme }) => theme['gray-800']};
  font-size: 1.5rem;
  font-weight: 700;
`;

export const CoffeeInput = styled.div`
  display: flex;
  flex-direction: row;
  background: ${(props) => props.theme['gray-400']};
  color: ${(props) => props.theme['gray-900']};
  align-items: center;
  border: 0;
  border-radius: 6px;
  width: 4.5rem;
  height: 2.375rem;
  padding: 0.5rem;
  gap: 0.25rem;

  button {
    border: 0;
    background: none;
    color: ${(props) => props.theme['purple-500']};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875;
    &:hover {
      color: ${(props) => props.theme['purple-700']};
      cursor: pointer;
    }
  }

  span {
    min-width: 1.25rem;
    text-align: center;
  }
`;

export const ButtonAddToCart = styled.button`
  background-color: ${(props) => props.theme['purple-700']};
  color: ${(props) => props.theme.white};
  border: none;
  border-radius: 6px;
  padding: 0.5rem;
  width: 2.375rem;
  height: 2.375rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['purple-500']};
  }

  span {
    color: ${(props) => props.theme.white};
  }
`;
