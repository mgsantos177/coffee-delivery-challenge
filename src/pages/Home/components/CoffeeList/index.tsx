import { CoffeeListContainer } from './styles';

import expressoTradicional from '../../../../assets/coffeeImages/expresso-tradicional.svg';

import { CoffeeCard, ICoffee } from '../CoffeeCard';

export function CoffeeList() {
  const data: ICoffee[] = [
    {
      id: '1',
      title: 'Expresso tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      img: expressoTradicional,
      tagList: ['Tradicional'],
    },
    {
      id: '2',
      title: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 8.7,
      img: expressoTradicional,
      tagList: ['Tradicional'],
    },
  ];

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
