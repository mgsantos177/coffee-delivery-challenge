import { styled } from 'styled-components';

interface BannerContentProps {
  backgroundImage: string;
}

interface ItemProps {
  iconColor: string;
}

export const BannerContainer = styled.div`
  width: 100%;
  margin: 6rem 0;
  display: flex;
  align-items: flex-start;

  @media (max-width: 1048px) {
    flex-wrap: wrap;
  }
`;

export const BannerLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4rem;

  @media (max-width: 1048px) {
    align-items: flex-start;
  }
`;

export const BannerImage = styled.img`
  width: 29.75rem;
  height: 22.5rem;

  @media (max-width: 1048px) {
    display: none;
  }
`;

export const BackgroundImage = styled.div<BannerContentProps>`
  background-size: contain;
  background-image: url(${(props) => props.backgroundImage});
  position: absolute;
  min-width: 90rem;
  filter: blur(80px);
  height: 300px;
`;

export const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 48px;
  line-height: 62px;
  color: ${(props) => props.theme['gray-900']};
`;

export const Subtitle = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  color: ${(props) => props.theme['gray-800']};
`;

export const BannerItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem 0;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

export const BannerItem = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;

    color: ${(props) => props.theme['gray-700']};
  }

  svg {
    background: ${(props) => props.theme[props.iconColor]};
    color: ${(props) => props.theme.white};
    border-radius: 1000px;
    padding: 7px;
  }
`;
