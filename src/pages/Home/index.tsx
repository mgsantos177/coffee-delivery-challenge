import {
  BannerContainer,
  BannerItem,
  BannerItems,
  BannerLeftSide,
  CoffeeCard,
  HomeContainer,
  HomeList,
} from './styles';
import bannerBackground from '../../assets/banner-background.svg';
import bannerImage from '../../assets/banner-image.svg';
import expressoTradicional from '../../assets/coffeeImages/expresso-tradicional.svg';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
export function Home() {
  return (
    <HomeContainer>
      <BannerContainer backgroundImage={bannerBackground}>
        <BannerLeftSide>
          <div className="title">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <BannerItems>
            <BannerItem iconColor="yellow-700">
              <ShoppingCart size={32} weight="fill" />
              <p>Compra simples e segura</p>
            </BannerItem>
            <BannerItem iconColor="gray-700">
              <Package size={32} weight="fill" />
              <p>Embalagem mantém o café intacto</p>
            </BannerItem>
            <BannerItem iconColor="yellow-500">
              <Timer size={32} weight="fill" />
              <p>Entrega rápida e rastreada</p>
            </BannerItem>
            <BannerItem iconColor="purple-500">
              <Coffee size={32} weight="fill" />
              <p>O café chega fresquinho até você</p>
            </BannerItem>
          </BannerItems>
        </BannerLeftSide>
        <img src={bannerImage} alt="" />
      </BannerContainer>

      <HomeList>
        <div className="header">
          <p>Nossos cafés</p>
          <div className="labels">
            <span>Tradicional</span>
            <span>Especial</span>
            <span>Com Leite</span>
            <span>Alcoólico</span>
            <span>Gelado</span>
          </div>
        </div>
        <div className="header">
          <CoffeeCard>
            <img src={expressoTradicional} alt="Coffee" />
            <div className="tags">
              <span>Tradicional</span>
            </div>

            <h2>Expresso Tradicional</h2>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div className="buy">
              <p>R$ 9,90</p>
              <input type="number" min={1} />
              <ShoppingCart size={22} weight="fill" />
            </div>
          </CoffeeCard>
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </div>
      </HomeList>
    </HomeContainer>
  );
}
