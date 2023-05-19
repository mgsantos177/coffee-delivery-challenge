import { MapPin, ShoppingCart } from 'phosphor-react';

import {
  ActionsContent,
  CartIcon,
  HeaderContainer,
  LocationLabel,
} from './styles';

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={logoCoffeeDelivery}
        alt="Simbolo roxo no formato de um copo de café com os dizeres Coffee Delivery"
      />
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
