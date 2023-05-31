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

  h3 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;

    display: flex;
    align-items: center;

    color: #403937;
  }
`;

export const InputErrorMessageText = styled.span`
  font-size: 0.75rem;
  color: ${(props) => props.theme.error};
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
`;

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 12px;

  .radio-label {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    border-radius: 6px;
    cursor: pointer;
  }

  .radio-input {
    display: none;
  }

  .radio-custom {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.9rem;
    border-radius: 5px;
    background: #e6e5e5;
    transition: background-color 0.8s ease;
    width: 178.67px;
    height: 51px;
    padding: 16px;
  }

  .radio-custom:hover {
    background: #d7d5d5;
  }

  .radio-input:checked + .radio-custom {
    background: #ebe5f9;
    border: 1px solid #8047f8;
  }

  .radio-icon {
    width: 16px; /* Adjust the width and height as per your icon size */
    height: 16px;
    color: #8047f8;
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    text-transform: uppercase;
    color: #574f4d;
  }
`;
