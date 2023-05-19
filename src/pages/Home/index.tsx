import { BannerContent, HomeContainer } from './styles';
import bannerBackground from '../../assets/banner-background.svg';
export function Home() {
  return (
    <HomeContainer>
      <BannerContent backgroundImage={bannerBackground} />
      <h1>Encontre o café perfeito para qualquer hora do dia</h1>
      <h1>
        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
      </h1>
    </HomeContainer>
  );
}
