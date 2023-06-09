import { CurrencyDollar, MapPinLine, Money } from 'phosphor-react';
import { Controller, useFormContext } from 'react-hook-form';

import {
  AddressInfo,
  AddressInput,
  ErrorMessage,
  FormContainer,
  FormContent,
  FormHeader,
  PaymentContent,
  PaymentOptions,
} from './styles';
import { useContext } from 'react';
import { CoffeeContext } from '../../../context/CoffeeContext';

export function AddressForm() {
  const { control } = useFormContext();

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
          <Controller
            control={control}
            name="cep"
            render={({ field, fieldState }) => {
              return (
                <>
                  <AddressInput
                    placeholder="CEP"
                    widthSize={'12.5rem'}
                    value={field.value}
                    onChange={(event) => {
                      const inputValue = event.target.value;
                      field.onChange(inputValue);
                    }}
                  />
                  {fieldState.error && (
                    <ErrorMessage>{fieldState.error.message}</ErrorMessage>
                  )}
                </>
              );
            }}
          />
          <Controller
            control={control}
            name="street"
            render={({ field, fieldState }) => {
              return (
                <>
                  <AddressInput
                    placeholder="Rua"
                    widthSize={'100%'}
                    value={field.value}
                    onChange={(event) => {
                      const inputValue = event.target.value;
                      field.onChange(inputValue);
                    }}
                  />
                  {fieldState.error && (
                    <ErrorMessage>{fieldState.error.message}</ErrorMessage>
                  )}
                </>
              );
            }}
          />

          <div className="input-together">
            <Controller
              control={control}
              name="number"
              render={({ field, fieldState }) => {
                return (
                  <div>
                    <AddressInput
                      placeholder="Número"
                      widthSize={'12.5rem'}
                      value={field.value}
                      onChange={(event) => {
                        const inputValue = event.target.value;
                        field.onChange(inputValue);
                      }}
                    />
                    {fieldState.error && (
                      <ErrorMessage>{fieldState.error.message}</ErrorMessage>
                    )}
                  </div>
                );
              }}
            />
            <Controller
              control={control}
              name="complement"
              render={({ field, fieldState }) => {
                return (
                  <div>
                    <AddressInput
                      placeholder="Complemento"
                      widthSize={'21.75rem'}
                      value={field.value}
                      onChange={(event) => {
                        const inputValue = event.target.value;
                        field.onChange(inputValue);
                      }}
                    />

                    {fieldState.error && (
                      <ErrorMessage>{fieldState.error.message}</ErrorMessage>
                    )}
                  </div>
                );
              }}
            />
          </div>
          <div className="input-together">
            <Controller
              control={control}
              name="district"
              render={({ field, fieldState }) => {
                return (
                  <div>
                    <AddressInput
                      placeholder="Bairro"
                      widthSize={'12.5rem'}
                      value={field.value}
                      onChange={(event) => {
                        const inputValue = event.target.value;
                        field.onChange(inputValue);
                      }}
                    />

                    {fieldState.error && (
                      <ErrorMessage>{fieldState.error.message}</ErrorMessage>
                    )}
                  </div>
                );
              }}
            />
            <Controller
              control={control}
              name="city"
              render={({ field, fieldState }) => {
                return (
                  <div>
                    <AddressInput
                      placeholder="Cidade"
                      widthSize={'17.25rem'}
                      value={field.value}
                      onChange={(event) => {
                        const inputValue = event.target.value;
                        field.onChange(inputValue);
                      }}
                    />

                    {fieldState.error && (
                      <ErrorMessage>{fieldState.error.message}</ErrorMessage>
                    )}
                  </div>
                );
              }}
            />

            <Controller
              control={control}
              name="UF"
              render={({ field, fieldState }) => {
                return (
                  <div>
                    <AddressInput
                      placeholder="UF"
                      widthSize={'3.75rem'}
                      value={field.value}
                      onChange={(event) => {
                        const inputValue = event.target.value;
                        field.onChange(inputValue);
                      }}
                    />

                    {fieldState.error && (
                      <ErrorMessage>{fieldState.error.message}</ErrorMessage>
                    )}
                  </div>
                );
              }}
            />
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

        <Controller
          control={control}
          name="paymentOption"
          defaultValue=""
          render={({ field: { onChange, value }, fieldState, ...props }) => {
            return (
              <>
                <PaymentOptions>
                  <label htmlFor="credit-card" className="radio-label">
                    <input
                      type="radio"
                      value="credit"
                      id="credit-card"
                      className="radio-input"
                      checked={value === 'credit-card'}
                      onChange={() => onChange('credit-card')}
                      {...props}
                    />
                    <span className="radio-custom">
                      <Money className="radio-icon" />
                      <p className="radio-text">Cartão de Crédito</p>
                    </span>
                  </label>
                  <label htmlFor="debit-card" className="radio-label">
                    <input
                      type="radio"
                      value="debit"
                      id="debit-card"
                      className="radio-input"
                      checked={value === 'debit-card'}
                      onChange={() => onChange('debit-card')}
                      {...props}
                    />
                    <span className="radio-custom">
                      <Money className="radio-icon" />
                      <p className="radio-text">Cartão de Débito</p>
                    </span>
                  </label>
                  <label htmlFor="cash" className="radio-label">
                    <input
                      type="radio"
                      value="rain"
                      id="cash"
                      className="radio-input"
                      checked={value === 'cash'}
                      onChange={() => onChange('cash')}
                      {...props}
                    />
                    <span className="radio-custom">
                      <Money className="radio-icon" />
                      <p className="radio-text">Dinheiro</p>
                    </span>
                  </label>
                </PaymentOptions>

                {fieldState.error && (
                  <ErrorMessage>{fieldState.error.message}</ErrorMessage>
                )}
              </>
            );
          }}
        />
      </PaymentContent>
    </FormContainer>
  );
}
