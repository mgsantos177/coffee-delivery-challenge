import {
  OrdemInfoItem,
  OrderInfo,
  SuccessPageContainer,
  SuccessPageContent,
} from './styles';
import illustration from '../../assets/illustration.png';
import { MapPin } from 'phosphor-react';
import { CoffeeContext } from '../../context/CoffeeContext';
import { useContext } from 'react';

export function SuccessPage() {
  const { addressData } = useContext(CoffeeContext);

  const { street, UF, cep, city, district, number, paymentOption, complement } =
    addressData;

  return (
    <SuccessPageContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <h4>Agora é só aguardar que logo o café chegará até você</h4>
      <SuccessPageContent>
        <OrderInfo>
          <OrdemInfoItem>
            <MapPin />
            <p>{`Entrega em ${street}, ${number} ${complement} ${district} - ${city}, ${UF}`}</p>
          </OrdemInfoItem>
          <OrdemInfoItem>
            <MapPin />
            <div>
              <p>Previsão de entrega </p>
              <strong>20 min - 30 min</strong>
            </div>
          </OrdemInfoItem>
          <OrdemInfoItem>
            <MapPin />
            <div>
              <p>Pagamento na entrega</p>
              <p>{paymentOption}</p>
            </div>
          </OrdemInfoItem>
        </OrderInfo>
        <img src={illustration} alt="motoboy" />
      </SuccessPageContent>
    </SuccessPageContainer>
  );
}
