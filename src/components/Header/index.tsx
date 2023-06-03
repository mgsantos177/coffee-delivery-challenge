import { MapPin, ShoppingCart } from 'phosphor-react';

import {
  ActionsContent,
  CartIcon,
  Counter,
  HeaderContainer,
  LocationLabel,
} from './styles';

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg';
import { NavLink } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { CoffeeContext } from '../../context/CoffeeContext';

export function Header() {
  const { coffeeOnCart, addressData } = useContext(CoffeeContext);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(
      coffeeOnCart.reduce((total, coffee) => {
        return total + coffee.amount;
      }, 0),
    );
  }, [coffeeOnCart]);

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img
          src={logoCoffeeDelivery}
          alt="Simbolo roxo no formato de um copo de café com os dizeres Coffee Delivery"
        />
      </NavLink>
      <ActionsContent>
        <LocationLabel>
          <MapPin size={27} weight="fill" />
          {addressData.city && `${addressData.city} - ${addressData.UF}`}
        </LocationLabel>

        <CartIcon to="/carrinho" title="Carrinho">
          <ShoppingCart size={22} weight="fill" />
          <Counter>{quantity}</Counter>
        </CartIcon>
      </ActionsContent>
    </HeaderContainer>
  );
}
