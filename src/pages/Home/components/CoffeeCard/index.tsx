import { useContext, useEffect, useState } from 'react';
import {
  ButtonAddToCart,
  CoffeeCardContent,
  CoffeeFooter,
  CoffeeImage,
  CoffeeInfo,
  CoffeeInput,
  CoffeePrice,
  CoffeeTag,
  CurrencySymbol,
  TagList,
} from './styles';

import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { CoffeeContext } from '../../../../context/CoffeeContext';

export interface ICoffee {
  id: string;
  title: string;
  description: string;
  price: number;
  img: string;
  tagList: string[];
}

interface CoffeeCardProps {
  coffee: ICoffee;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { title, description, img, price, tagList } = coffee;

  const { addCoffeeOnCart, coffeeOnCart } = useContext(CoffeeContext);

  const [amount, setAmount] = useState<number>(1);

  useEffect(() => {
    console.log(coffeeOnCart);
  }, [coffeeOnCart]);

  function onDecrementCoffeeAmount() {
    setAmount((state) => {
      if (state > 1) {
        return state - 1;
      }

      return state;
    });
  }

  function onIncrementCoffeeAmount() {
    setAmount((state) => state + 1);
  }

  function handleAddCoffeeToCart() {
    addCoffeeOnCart(coffee, amount);
  }

  return (
    <CoffeeCardContent>
      <CoffeeInfo>
        <CoffeeImage src={img} alt="Coffee" />
        <TagList>
          {tagList.map((tag) => (
            <CoffeeTag key={tag}>{tag}</CoffeeTag>
          ))}
        </TagList>
        <h4>{title}</h4>
        <p>{description}</p>
      </CoffeeInfo>
      <CoffeeFooter>
        <div className="price">
          <CurrencySymbol>R$</CurrencySymbol>
          <CoffeePrice>{price}</CoffeePrice>
        </div>
        <CoffeeInput>
          <button onClick={onDecrementCoffeeAmount} type="button">
            <Minus />
          </button>
          <span>{amount}</span>
          <button onClick={onIncrementCoffeeAmount} type="button">
            <Plus />
          </button>
        </CoffeeInput>
        <ButtonAddToCart onClick={handleAddCoffeeToCart}>
          <ShoppingCart size={22} weight="fill" />
        </ButtonAddToCart>
      </CoffeeFooter>
    </CoffeeCardContent>
  );
}
