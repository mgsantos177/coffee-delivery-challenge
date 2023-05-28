import { MapPin, ShoppingCart } from 'phosphor-react';

import {
  ActionsContent,
  CartIcon,
  HeaderContainer,
  LocationLabel,
} from './styles';

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg';
import { NavLink } from 'react-router-dom';

export function Header() {
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
          São Paulo, SP
        </LocationLabel>

        <CartIcon to="/carrinho" title="Carrinho">
          <ShoppingCart size={32} weight="fill" />
        </CartIcon>
      </ActionsContent>
    </HeaderContainer>
  );
}
