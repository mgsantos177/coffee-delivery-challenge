import { styled } from 'styled-components';

export const CheckoutContainer = styled.div`
  form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 40px;

    h3 {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;

      display: flex;
      align-items: center;

      color: #403937;
    }
  }
`;

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

export const SelectedCoffeesContent = styled.div`
  align-items: flex-start;
  padding: 40px;
  gap: 24px;
  width: 448px;
  background: #f3f2f2;
  border-radius: 6px 44px;
`;

export const SelectedCoffeesFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  div {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: #574f4d;
  }

  h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    color: #403937;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 12px 8px;
    gap: 4px;
    width: 368px;
    height: 46px;
    background: ${(props) => props.theme['yellow-500']};
    border-radius: 6px;
    cursor: pointer;
    transition: 0.5ms;

    color: #ffffff;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;

    &:hover {
      background: ${(props) => props.theme['yellow-700']};
    }

    &:disabled {
      opacity: 60%;
      cursor: not-allowed;
    }
  }
`;

export const Divider = styled.div`
  width: 368px;
  height: 0px;
  border: 1px solid #e6e5e5;
  margin: 24px 0;
`;
