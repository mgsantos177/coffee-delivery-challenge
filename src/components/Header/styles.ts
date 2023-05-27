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

export const CartIcon = styled(NavLink)`
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme['yellow-300']};
  border-radius: 6px;
  padding: 8px;
  color: ${(props) => props.theme['yellow-700']};
`;

export const LocationLabel = styled.button`
  width: 9rem;
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
