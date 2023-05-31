import { useContext } from 'react';
import { CoffeeContext } from '../../context/CoffeeContext';
import {
  CheckoutContainer,
  Divider,
  SelectedCoffeesContainer,
  SelectedCoffeesContent,
  SelectedCoffeesFooter,
} from './styles';
import { FormProvider, useForm } from 'react-hook-form';
import { AddressForm } from './AddressForm';
import { CoffeeOnCart } from './CoffeeOnCart';

interface NewCycleFormData {
  weather: string;
}

export function Checkout() {
  const { coffeeOnCart, removeCoffeeFromCart } = useContext(CoffeeContext);

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
              <>
                <CoffeeOnCart key={coffee.id} coffee={coffee} />
                <Divider />
              </>
            ))}
            <SelectedCoffeesFooter>
              <div>
                <span>Total dos itens</span>
                <span>R$ 10</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>R$ 0</span>
              </div>
              <div>
                <h3>Total</h3>
                <h3>R$ 10</h3>
              </div>
              <button> Confirmar pedido</button>
            </SelectedCoffeesFooter>
          </SelectedCoffeesContent>
        </SelectedCoffeesContainer>
      </FormProvider>
    </CheckoutContainer>
  );
}
