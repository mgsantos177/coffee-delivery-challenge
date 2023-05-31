import americano from '../assets/coffeeImages/coffee-americano.png';
import arabe from '../assets/coffeeImages/coffee-arabe.png';
import capuccino from '../assets/coffeeImages/coffee-capuccino.png';
import cremoso from '../assets/coffeeImages/coffee-cremoso.png';
import cubano from '../assets/coffeeImages/coffee-cubano.png';
import expresso from '../assets/coffeeImages/coffee-expresso.png';
import gelado from '../assets/coffeeImages/coffee-gelado.png';
import havaino from '../assets/coffeeImages/coffee-havaino.png';
import hotMilk from '../assets/coffeeImages/coffee-hot-milk.png';
import irlandes from '../assets/coffeeImages/coffee-irlandes.png';
import latte from '../assets/coffeeImages/coffee-latte.png';
import leite from '../assets/coffeeImages/coffee-leite.png';
import macchiato from '../assets/coffeeImages/coffee-macchiato.png';
import mocaccino from '../assets/coffeeImages/coffee-mocaccino.png';

export const coffeeData = [
  {
    id: '1',
    title: 'Expresso tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.99,
    img: expresso,
    tagList: ['Tradicional'],
  },
  {
    id: '2',
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 8.99,
    img: americano,
    tagList: ['Tradicional'],
  },
  {
    id: '3',
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 11.99,
    img: cremoso,
    tagList: ['Tradicional'],
  },
  {
    id: '4',
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 10.99,
    img: gelado,
    tagList: ['Tradicional', 'Gelado'],
  },
  {
    id: '5',
    title: 'Café com leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 13.9,
    img: leite,
    tagList: ['Tradicional', 'Com leite'],
  },
  {
    id: '6',
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 13.9,
    img: latte,
    tagList: ['Tradicional', 'Com leite'],
  },
  {
    id: '7',
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 14.5,
    img: capuccino,
    tagList: ['Tradicional', 'Com leite'],
  },
  {
    id: '8',
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 13.5,
    img: macchiato,
    tagList: ['Tradicional', 'Com leite'],
  },
  {
    id: '9',
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 13.5,
    img: mocaccino,
    tagList: ['Tradicional', 'Com leite'],
  },
  {
    id: '10',
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 15.89,
    img: hotMilk,
    tagList: ['Especial', 'Com leite'],
  },
  {
    id: '11',
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 17.39,
    img: cubano,
    tagList: ['Especial', 'Alcoólico', 'Gelado'],
  },
  {
    id: '12',
    title: 'Havaino',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 13.9,
    img: havaino,
    tagList: ['Especial'],
  },
  {
    id: '13 ',
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e Chantilly',
    price: 13.39,
    img: irlandes,
    tagList: ['Especial'],
  },
  {
    id: '14 ',
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.59,
    img: arabe,
    tagList: ['Especial'],
  },
];
