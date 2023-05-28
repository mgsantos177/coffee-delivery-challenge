import { styled } from 'styled-components';

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 2rem;
`;

export const FormHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['yellow-700']};
  }

  h4 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;

    color: ${(props) => props.theme['gray-800']};
  }

  p {
    color: ${(props) => props.theme['gray-700']};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    word-wrap: wrap;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 1rem;
`;

export const AddressInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 6px;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['gray-200']};

  .input-together {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
`;

interface InputProps {
  widthSize: string;
}
export const AddressInput = styled.input<InputProps>`
  background-color: ${(props) => props.theme['gray-300']};
  border: 1px solid ${(props) => props.theme['gray-400']};
  padding: 0.75rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme['gray-700']};
  border-radius: 4px;
  width: ${(props) => props.widthSize};

  &:focus {
    outline: 1px solid ${(props) => props.theme['yellow-700']};
  }
`;

export const PaymentContent = styled.div`
  background-color: ${(props) => props.theme['gray-200']};
  margin-top: 0.75rem;
  border-radius: 6px;
  padding: 2.5rem;
  gap: 32px;
  width: 100%;

  .payment-header {
    display: flex;
    justify-content: flex-start;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['purple-500']};
    }

    h4 {
      font-size: 1rem;
      line-height: 130%;
      font-weight: 400;
      color: ${(props) => props.theme['gray-800']};
    }

    p {
      color: ${(props) => props.theme['gray-700']};
      line-height: 130%;
      font-size: 0.875rem;
    }
  }

  .payment-options {
    .radioButton {
      display: inline-block;
      margin-right: 10px;
      padding: 10px 20px;
      border: 1px solid #ccc;
      background-color: #f1f1f1;
      color: #333;
      cursor: pointer;
    }

    .radioButton input[type='radio'] {
      display: none;
    }

    .radioButton input[type='radio']:checked + span {
      background-color: #2196f3;
      color: #fff;
    }

    .radioButton:hover {
      background-color: #e0e0e0;
    }
  }
`;

export const PaymentOptions = styled.input``;
