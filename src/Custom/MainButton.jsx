
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
export const StyledButton = styled(Button)`

  font-size: 13px; 
  font-weight: bold;
  background: linear-gradient(45deg, rgb(16, 137, 211) 0%, rgb(18, 177, 209) 100%);
  color: white;
  padding: 7px; 
  margin: 10px auto; 
  border-radius: 10px; 
  box-shadow: rgba(133, 189, 215, 0.88) 0px 8px 6px -8px; 
  border: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.01); 
    box-shadow: rgba(133, 189, 215, 0.88) 0px 10px 6px -9px;
  }

  &:active {
    transform: scale(0.97);
    box-shadow: rgba(133, 189, 215, 0.88) 0px 6px 6px -8px;
  }
`;
