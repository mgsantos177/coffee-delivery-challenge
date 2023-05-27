import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import {
  BackgroundImage,
  BannerContainer,
  BannerImage,
  BannerItem,
  BannerItems,
  BannerLeftSide,
  Subtitle,
  Title,
  TitleArea,
} from './styles';
import bannerBackground from '../../../../assets/banner-background.svg';
import bannerImage from '../../../../assets/banner-image.svg';

export function Banner() {
  return (
    <BannerContainer>
      <BackgroundImage backgroundImage={bannerBackground} />
      <BannerLeftSide>
        <TitleArea>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Subtitle>
        </TitleArea>
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
      <div>
        <BannerImage src={bannerImage} alt="" />
      </div>
    </BannerContainer>
  );
}
