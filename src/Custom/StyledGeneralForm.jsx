import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Container for the entire form
export const Container = styled.div`
  max-width: 100%;
  background: #f8f9fd;
  background: linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(244, 247, 251) 100%);
  border-radius: 20px;
  padding: 15px;
  border: 3px solid rgb(255, 255, 255);
  box-shadow: rgba(133, 189, 215, 0.88) 0px 15px 15px -10px;
  margin: 15px;
`;

// Heading style
export const Heading = styled.h2`
  font-weight: 500;
  font-size: 16px;
  color: rgb(16, 137, 211);
`;

// Styled Form
export const StyledForm = styled(Form)`
  margin-top: 15px;

  .form-control {
    width: 100%;
    background: white;
    border: none;
    border-radius: 15px;
    margin-top: 3px; /* Reduced space between label and input */
    box-shadow: #cff0ff 0px 5px 5px -3px;
    border-inline: 1px solid transparent;

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
    margin-bottom: 2px; /* Reduced space between label and checkbox */
  }

  label {
    margin-bottom: 3px; /* Reduced spacing between label and associated input */
    font-size: 14px; /* Optional: Make label text smaller for a compact look */
  }
`;


// Styled Button
export const StyledButton = styled(Button)`
  display: block;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  background: linear-gradient(45deg, rgb(16, 137, 211) 0%, rgb(18, 177, 209) 100%);
  color: white;
  padding-block: 10px;
  margin: 15px auto;
  border-radius: 15px;
  box-shadow: rgba(133, 189, 215, 0.88) 0px 10px 8px -10px;
  border: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: rgba(133, 189, 215, 0.88) 0px 13px 8px -12px;
  }

  &:active {
    transform: scale(0.95);
    box-shadow: rgba(133, 189, 215, 0.88) 0px 8px 8px -8px;
  }
`;
