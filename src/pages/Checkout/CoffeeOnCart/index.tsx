import { Minus, Plus, Trash } from 'phosphor-react';
import { CoffeeInput } from '../../Home/components/CoffeeList/styles';
import { CoffeeCard, CoffeeCardDetails, RemoveCoffeeButton } from './styles';
import { CoffeeContext, ICoffeeOnCart } from '../../../context/CoffeeContext';
import { useContext, useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';

interface ICoffeeOnCartProps {
  coffee: ICoffeeOnCart;
}

export function CoffeeOnCart({ coffee }: ICoffeeOnCartProps) {
  const { removeCoffeeFromCart, updateCoffeeAmount } =
    useContext(CoffeeContext);

  const [amount, setAmount] = useState(coffee.amount);

  function onDecrementCoffeeAmount() {
    setAmount((state) => {
      if (state > 0) {
        return state - 1;
      }

      return state;
    });
  }

  function onIncrementCoffeeAmount() {
    setAmount((state) => state + 1);
  }

  useEffect(() => {
    updateCoffeeAmount(coffee.id, amount);
  }, [amount, coffee.id, updateCoffeeAmount]);

  return (
    <CoffeeCard key={coffee.id}>
      <div className="info">
        <img src={coffee.img} alt="" />
        <CoffeeCardDetails>
          <p>{coffee.title}</p>
          <div className="actions">
            <CoffeeInput>
              <button onClick={onDecrementCoffeeAmount} type="button">
                <Minus />
              </button>
              <span>{amount}</span>
              <button onClick={onIncrementCoffeeAmount} type="button">
                <Plus />
              </button>
            </CoffeeInput>

            <RemoveCoffeeButton onClick={() => removeCoffeeFromCart(coffee.id)}>
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
  );
}
