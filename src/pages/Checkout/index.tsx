import { useContext } from 'react';
import { CoffeeContext } from '../../context/CoffeeContext';
import {
  CheckoutContainer,
  CoffeeCard,
  CoffeeCardDetails,
  RemoveCoffeeButton,
  SelectedCoffeesContainer,
  SelectedCoffeesContent,
} from './styles';
import { CurrencyDollar, MapPinLine, Minus, Plus, Trash } from 'phosphor-react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { AddressForm } from './AddressForm';
import { CoffeeInput } from '../Home/components/CoffeeCard/styles';

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

  console.log(coffeeOnCart);

  return (
    <CheckoutContainer>
      <FormProvider {...newCycleForm}>
        <AddressForm />
        <SelectedCoffeesContainer>
          <h3>Cafés selecionados</h3>
          <SelectedCoffeesContent>
            {coffeeOnCart.map((coffee) => (
              <CoffeeCard key={coffee.id}>
                <div className="info">
                  <img src={coffee.img} alt="" />
                  <CoffeeCardDetails>
                    <p>{coffee.title}</p>
                    <div className="actions">
                      <CoffeeInput>
                        <button onClick={() => {}} type="button">
                          <Minus />
                        </button>
                        <span>{coffee.amount}</span>
                        <button onClick={() => {}} type="button">
                          <Plus />
                        </button>
                      </CoffeeInput>
                      <RemoveCoffeeButton onClick={() => {}}>
                        <Trash />
                        <p>REMOVER</p>
                      </RemoveCoffeeButton>
                    </div>
                  </CoffeeCardDetails>
                </div>
              </CoffeeCard>
            ))}
          </SelectedCoffeesContent>
        </SelectedCoffeesContainer>
      </FormProvider>
    </CheckoutContainer>
  );
}
