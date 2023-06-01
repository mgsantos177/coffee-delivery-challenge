import { useContext, useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import * as zod from 'zod';
import { CoffeeContext } from '../../context/CoffeeContext';
import {
  CheckoutContainer,
  Divider,
  SelectedCoffeesContainer,
  SelectedCoffeesContent,
  SelectedCoffeesFooter,
} from './styles';

import { AddressForm } from './AddressForm';
import { CoffeeOnCart } from './CoffeeOnCart';
import { useNavigate } from 'react-router-dom';

const addressFormSchema = zod.object({
  cep: zod
    .string()
    .min(8, 'Insira um CEP valido')
    .regex(/[0-9]{5}-[0-9]{3}/, 'Insira um CEP valido'),
  street: zod.string().min(1, 'Insira a rua do endereço de entrega'),
  number: zod
    .string({
      required_error: 'Insira o número do endereço de entrega',
    })
    .min(1, 'Insira o número do endereço de entrega'),

  complement: zod.string().optional(),
  district: zod.string().min(1, 'Insira o bairro do endereço de entrega'),
  city: zod.string().min(1, 'Insira a cidade do endereço de entrega'),
  UF: zod
    .string()
    .min(2, 'Insira o UF do endereço de entrega')
    .max(2, 'Insira o UF do endereço de entrega'),
  paymentOption: zod.enum(['credit-card', 'debit-card', 'cash']),
});

type AddressFormInputs = zod.infer<typeof addressFormSchema>;

export function Checkout() {
  const [total, setTotal] = useState(0);
  const { coffeeOnCart, addressData, setAddressData } =
    useContext(CoffeeContext);

  const navigate = useNavigate();
  const newCycleForm = useForm<AddressFormInputs>({
    resolver: zodResolver(addressFormSchema),
    defaultValues: {
      ...addressData,
      paymentOption: 'debit-card',
    },
  });

  const { handleSubmit } = newCycleForm;

  function handleAddAddress(data: AddressFormInputs) {
    console.log(data);
    setAddressData(data);
    navigate('/sucesso');
  }

  useEffect(() => {
    setTotal(
      coffeeOnCart.reduce((total, product) => {
        return total + product.price * product.amount;
      }, 0),
    );
  }, [total, coffeeOnCart]);

  const deliveryTax = 3.5;

  const isConfirmButtonDisabled = total === 0;

  return (
    <CheckoutContainer>
      <FormProvider {...newCycleForm}>
        <form onSubmit={handleSubmit(handleAddAddress)}>
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
                  <span>R$ {total}</span>
                </div>
                <div>
                  <span>Entrega</span>
                  <span>R$ {!isConfirmButtonDisabled ? deliveryTax : 0}</span>
                </div>
                <div>
                  <h3>Total</h3>
                  <h3>R$ {total ? total + deliveryTax : 0}</h3>
                </div>
                <button type="submit" disabled={isConfirmButtonDisabled}>
                  {' '}
                  Confirmar pedido
                </button>
              </SelectedCoffeesFooter>
            </SelectedCoffeesContent>
          </SelectedCoffeesContainer>
        </form>
      </FormProvider>
    </CheckoutContainer>
  );
}
