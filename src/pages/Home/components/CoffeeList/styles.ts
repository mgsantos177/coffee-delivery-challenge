import { styled } from 'styled-components';

export const CoffeeListContainer = styled.div`
  h4 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    color: ${(props) => props.theme['gray-800']};
  }

  main {
    display: flex;
    flex-wrap: wrap;
    margin-top: 3.375rem;
    gap: 2rem;
  }
`;
