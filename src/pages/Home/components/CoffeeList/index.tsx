import { CoffeeListContainer } from './styles';

import { coffeeData } from '../../../../data/coffees';
import { CoffeeCard, ICoffee } from '../CoffeeCard';

export function CoffeeList() {
  const data: ICoffee[] = coffeeData;

  return (
    <CoffeeListContainer>
      <h4>Nossos cafés</h4>
      <main>
        {data.map((coffee) => (
          <CoffeeCard coffee={coffee} key={coffee.id} />
        ))}
      </main>
    </CoffeeListContainer>
  );
}
