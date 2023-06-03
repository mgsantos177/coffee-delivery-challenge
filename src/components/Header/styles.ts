import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`;

export const ActionsContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 12px;
`;

export const LocationLabel = styled.button`
  max-width: 9rem;
  height: 2.375rem;
  border: 0;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 8px;
  gap: 4px;
  background: ${(props) => props.theme['purple-300']};
  color: ${(props) => props.theme['purple-500']};
  flex-grow: 0;

  font-size: 14px;
  font-weight: 400px;
`;

export const CartIcon = styled(NavLink)`
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${(props) => props.theme['yellow-300']};
  border-radius: 6px;
  padding: 8px;
  color: ${(props) => props.theme['yellow-700']};
`;

export const Counter = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  position: absolute;
  width: 20px;
  height: 20px;
  right: -8.35px;
  top: -8px;

  background: #c47f17;
  border-radius: 1000px;
  color: #ffffff;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-align: center;
  letter-spacing: -0.06em;
`;
