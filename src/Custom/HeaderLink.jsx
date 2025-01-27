import styled from 'styled-components';
import { NavLink } from 'react-router-dom'; 
// Styled Components
export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  color: #1091d3;
  font-size: 18px; 
  font-weight: 600;
  text-decoration: none;
  &:hover {
    color: #0056b3;
  }
`;

export const NavIcon = styled.div`
  margin-right: 10px;
  font-size: 20px; 
`;

export const UserPhoto = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const DarkModeToggle = styled.div`
  display: flex;
  gap: 5px;
  cursor: pointer;
  color: #1091d3;
  font-size: 20px;
  align-items: center;
`;
