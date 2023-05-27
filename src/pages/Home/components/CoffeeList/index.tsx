import {
  ButtonAddToCart,
  CoffeeCard,
  CoffeeFooter,
  CoffeeImage,
  CoffeeInfo,
  CoffeeInput,
  CoffeeListContainer,
  CoffeePrice,
  CoffeeTag,
  CurrencySymbol,
  TagList,
} from './styles';

import expressoTradicional from '../../../../assets/coffeeImages/expresso-tradicional.svg';
import { Minus, Plus, ShoppingCart } from 'phosphor-react';

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h4>Nossos cafés</h4>
      <main>
        <CoffeeCard>
          <CoffeeInfo>
            <CoffeeImage src={expressoTradicional} alt="Coffee" />
            <TagList>
              <CoffeeTag>Tradicional</CoffeeTag>
              <CoffeeTag>Expresso</CoffeeTag>
            </TagList>
            <h4>Expresso Tradicional</h4>
            <p>O tradicional café feito com água quente e grãos moídos</p>
          </CoffeeInfo>
          <CoffeeFooter>
            <div className="price">
              <CurrencySymbol>R$</CurrencySymbol>
              <CoffeePrice>9,90</CoffeePrice>
            </div>

            <CoffeeInput>
              <button onClick={() => {}} type="button">
                <Minus />
              </button>

              <span>1</span>
              <button onClick={() => {}} type="button">
                <Plus />
              </button>
              <ButtonAddToCart>
                <ShoppingCart size={22} weight="fill" />
              </ButtonAddToCart>
            </CoffeeInput>
          </CoffeeFooter>
        </CoffeeCard>
      </main>
    </CoffeeListContainer>
  );
}
