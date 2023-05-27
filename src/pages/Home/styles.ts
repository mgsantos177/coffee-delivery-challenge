import { styled } from 'styled-components';

interface BannerContentProps {
  backgroundImage: string;
}

interface ItemProps {
  iconColor: string;
}

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HomeList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px;
  margin-top: 5rem;
  flex-wrap: wrap;

  .labels {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }

  .header {
    display: flex;
    flex-direction: row;
    gap: 8px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 54px;
  }

  .coffeeCards {
    display: flex;
    flex-direction: row;
  }
`;

export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 256px;
  height: 310px;
  background: #f3f2f2;
  border-radius: 6px 36px;

  h2 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    text-align: center;
    color: #403937;
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    padding: 0 20px;
    text-align: center;

    color: #8d8686;
  }

  img {
    width: 120px;
    height: 120px;
    margin-top: -20px;
  }

  .tags {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 4px;
    width: 139px;
    height: 21px;
    span {
      padding: 4px 8px;
      background: #f1e9c9;
      border-radius: 100px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 10px;
      line-height: 130%;
      text-transform: uppercase;

      color: #c47f17;
    }
  }

  .buy {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;

    p {
      font-size: 14px;
      margin-right: 2rem;
    }

    & p span {
      color: ${({ theme }) => theme['gray-800']};
      font-family: 'Roboto';
      font-weight: bold;
      font-size: 24px;
    }

    .counter {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      width: 72px;
      height: 38px;

      background: #e6e5e5;
      border-radius: 6px;

      p {
        width: 20px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        text-align: center;
        color: #272221;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: none;
        width: 14px;
        height: 3.2rem;
        transition: 0.25s;

        cursor: pointer;

        & svg {
          font-size: 1.5rem;
        }
        &:hover {
          color: ${({ theme }) => theme['gray-700']};
        }
      }
    }
  }
`;
