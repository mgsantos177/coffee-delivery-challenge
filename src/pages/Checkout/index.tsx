import { useContext } from 'react';
import { CoffeeContext } from '../../context/CoffeeContext';
import {
  AddressInfo,
  AddressInput,
  CheckoutContainer,
  FormContainer,
  FormContent,
  FormHeader,
  PaymentContent,
  PaymentOptions,
} from './styles';
import { CurrencyDollar, MapPinLine } from 'phosphor-react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { AddressForm } from './AddressForm';

interface NewCycleFormData {
  weather: string;
}

export function Checkout() {
  const { coffeeOnCart } = useContext(CoffeeContext);

  const newCycleForm = useForm<NewCycleFormData>({
    defaultValues: {
      weather: '',
    },
  });

  return (
    <CheckoutContainer>
      <FormProvider {...newCycleForm}>
        <AddressForm />
        <div>
          <h4>Cafés selecionados</h4>
          {coffeeOnCart.map((coffee) => (
            <div key={coffee.id}>{coffee.description}</div>
          ))}
        </div>
      </FormProvider>
    </CheckoutContainer>
  );
}
