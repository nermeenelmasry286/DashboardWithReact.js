import styled from 'styled-components';
import Form from 'react-bootstrap/Form';


export const Container = styled.div`
  max-width: 100%;
  background: #f8f9fd;
  background: linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(244, 247, 251) 100%);
  border-radius: 15px; 
  padding: 10px; 
  border: 2px solid rgb(255, 255, 255); 
  box-shadow: rgba(133, 189, 215, 0.88) 0px 10px 10px -8px; 
  margin: 10px; 
`;


export const Heading = styled.h2`
  font-weight: 500;
  font-size: 14px; 
  color: rgb(16, 137, 211);
  margin-bottom: 10px;
`;


export const StyledForm = styled(Form)`
  margin-top: 10px; 

  .form-control {
    width: 100%;
    background: white;
    border: none;
    border-radius: 10px;
    margin-top: 2px; 
    padding: 5px 10px; 
    box-shadow: #cff0ff 0px 4px 4px -3px; 
    font-size: 12px; 

    &::placeholder {
      font-size: 12px;
      color: rgb(170, 170, 170);
    }

    &:focus {
      outline: none;
      border-inline: 1px solid #12b1d1;
    }
  }

  .form-check-label {
    font-size: 12px;
    margin-bottom: 1px; 
  }

  label {
    margin-bottom: 2px; 
    font-size: 13px; 
  }
`;

