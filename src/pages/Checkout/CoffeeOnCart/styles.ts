import { styled } from 'styled-components';

export const CoffeeCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;

  .info {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 20px;

    width: 255px;
    height: 64px;

    img {
      width: 64px;
      height: 64px;
    }
  }

  .price {
    h4 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 130%;
      color: #574f4d;
    }
  }
`;

export const CoffeeCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: #403937;
  }

  .actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;
  }
`;

export const RemoveCoffeeButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  padding: 0px 8px;
  gap: 4px;
  width: 91px;
  height: 2.375rem;
  border: none;
  background-color: #e6e5e5;
  border-radius: 6px;

  &:hover {
    background-color: #d7d5d5;
  }

  svg {
    color: #8047f8;
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;

    text-transform: uppercase;

    color: #574f4d;
  }
`;
