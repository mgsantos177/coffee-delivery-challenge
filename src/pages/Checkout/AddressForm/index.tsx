import { CurrencyDollar, MapPinLine, Money } from 'phosphor-react';
import {
  AddressInfo,
  AddressInput,
  FormContainer,
  FormContent,
  FormHeader,
  PaymentContent,
  PaymentOptions,
} from './styles';
import { useFormContext } from 'react-hook-form';

export function AddressForm() {
  const { register } = useFormContext();
  return (
    <FormContainer>
      <h3>Complete seu pedido</h3>
      <AddressInfo>
        <FormHeader>
          <MapPinLine size={22} />
          <div>
            <h4>Endereço de entrega</h4>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </FormHeader>
        <FormContent>
          <AddressInput placeholder="CEP" widthSize={'12.5rem'} />
          <AddressInput placeholder="Rua" widthSize={'100%'} />
          <div className="input-together">
            <AddressInput placeholder="Número" widthSize={'12.5rem'} />
            <AddressInput placeholder="Complemento" widthSize={'21.75rem'} />
          </div>
          <div className="input-together">
            <AddressInput placeholder="Bairro" widthSize={'12.5rem'} />
            <AddressInput placeholder="Cidade" widthSize={'17.25rem'} />
            <AddressInput placeholder="UF" widthSize={'3.75rem'} />
          </div>
        </FormContent>
      </AddressInfo>
      <PaymentContent>
        <div className="payment-header">
          <CurrencyDollar size={22} />
          <div>
            <h4>Pagamento</h4>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </div>
        <PaymentOptions>
          <label htmlFor="credit-card" className="radio-label">
            <input
              {...register('selectPayment')}
              type="radio"
              value="credit"
              id="credit-card"
              className="radio-input"
            />
            <span className="radio-custom">
              <Money className="radio-icon" />
              <p className="radio-text">Cartão de Crédito</p>
            </span>
          </label>
          <label htmlFor="debit-card" className="radio-label">
            <input
              {...register('selectPayment')}
              type="radio"
              value="debit"
              id="debit-card"
              className="radio-input"
            />
            <span className="radio-custom">
              <Money className="radio-icon" />
              <p className="radio-text">Cartão de Débito</p>
            </span>
          </label>
          <label htmlFor="cash" className="radio-label">
            <input
              {...register('selectPayment')}
              type="radio"
              value="rain"
              id="cash"
              className="radio-input"
            />
            <span className="radio-custom">
              <Money className="radio-icon" />
              <p className="radio-text">Dinheiro</p>
            </span>
          </label>
        </PaymentOptions>
      </PaymentContent>
    </FormContainer>
  );
}
