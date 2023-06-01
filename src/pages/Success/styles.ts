import { styled } from 'styled-components';

export const SuccessPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem auto;

  h1 {
    /* Title/Title L */

    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;

    color: #c47f17;
  }

  h4 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;

    color: #403937;
    font-stretch: 100;
  }
`;

export const SuccessPageContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3rem;

  img {
    position: absolute;
    width: 492px;
    height: 293px;
    left: calc(50% - 492px / 2 + 314px);
    top: 284px;
  }
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;

  width: 600px;
  height: 270px;
  border-radius: 6px 36px;

  border-right: 1px solid ${(props) => props.theme['purple-500']};
  border-bottom: 1px solid ${(props) => props.theme['purple-500']};
  border-left: 1px solid #dbac2c;
  border-top: 1px solid #dbac2c;
`;

export const OrdemInfoItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0px;
  gap: 12px;

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;

    color: #574f4d;
  }

  svg {
    padding: 8px;
    gap: 8px;
    margin-right: 1rem;
    width: 32px;
    height: 32px;

    color: ${(props) => props.theme.white};
    background: #c47f17;
    border-radius: 1000px;
  }
`;
