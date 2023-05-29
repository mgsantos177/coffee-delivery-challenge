import { useContext } from 'react';
import { CoffeeContext } from '../../context/CoffeeContext';
import {
  CheckoutContainer,
  CoffeeCard,
  CoffeeCardDetails,
  Divider,
  RemoveCoffeeButton,
  SelectedCoffeesContainer,
  SelectedCoffeesContent,
} from './styles';
import { Minus, Plus, Trash } from 'phosphor-react';
import { FormProvider, useForm } from 'react-hook-form';
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
              <>
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
                  <div className="price">
                    <h4>R$ {coffee.price}</h4>
                  </div>
                </CoffeeCard>
                <Divider />
              </>
            ))}
            <footer>
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
            </footer>
          </SelectedCoffeesContent>
        </SelectedCoffeesContainer>
      </FormProvider>
    </CheckoutContainer>
  );
}
