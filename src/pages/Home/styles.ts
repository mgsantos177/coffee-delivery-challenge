import { styled } from 'styled-components';

interface BannerContentProps {
  backgroundImage: string;
}

export const HomeContainer = styled.div`
  min-width: 90rem;
  min-height: 34rem;
  display: flex;
`;

export const BannerContent = styled.div<BannerContentProps>`
  background-size: contain;
  background-image: url(${(props) => props.backgroundImage});
  position: absolute;
  min-width: 90rem;
  min-height: 34rem;
  filter: blur(80px);
`;
