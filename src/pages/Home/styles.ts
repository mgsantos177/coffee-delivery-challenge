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
  margin-top: 52px;
`;

export const BannerContainer = styled.div<BannerContentProps>`
  max-height: 34rem;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-size: contain;
  background-size: contain;
  background-image: url(${(props) => props.backgroundImage});
  position: absolute;

  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`;

export const BannerLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 588px;
  height: 440px;
  justify-content: space-evenly;

  .title {
    height: 192px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
  }

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 48px;
    line-height: 62px;
    color: ${(props) => props.theme['gray-900']};
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: ${(props) => props.theme['gray-800']};
  }
`;

export const BannerItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 84px;
`;

export const BannerItem = styled.div<ItemProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 294px;
  height: 32px;
  gap: 12px;

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    color: ${(props) => props.theme['gray-700']};
  }

  svg {
    background: ${(props) => props.theme[props.iconColor]};
    color: ${(props) => props.theme.white};
    border-radius: 1000px;
    padding: 6px;
    gap: 8px;
  }
`;
