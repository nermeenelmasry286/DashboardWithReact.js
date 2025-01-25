import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Container for the entire form
export const Container = styled.div`
  max-width: 100%;
  background: #f8f9fd;
  background: linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(244, 247, 251) 100%);
  border-radius: 15px; /* Reduced border-radius */
  padding: 10px; /* Reduced padding */
  border: 2px solid rgb(255, 255, 255); /* Reduced border thickness */
  box-shadow: rgba(133, 189, 215, 0.88) 0px 10px 10px -8px; /* Smaller shadow */
  margin: 10px; /* Reduced margin */
`;

// Heading style
export const Heading = styled.h2`
  font-weight: 500;
  font-size: 14px; /* Reduced font size */
  color: rgb(16, 137, 211);
  margin-bottom: 10px; /* Added spacing below heading */
`;

// Styled Form
export const StyledForm = styled(Form)`
  margin-top: 10px; /* Reduced spacing above form */

  .form-control {
    width: 100%;
    background: white;
    border: none;
    border-radius: 10px; /* Reduced border-radius */
    margin-top: 2px; /* Reduced space between label and input */
    padding: 5px 10px; /* Reduced padding inside inputs */
    box-shadow: #cff0ff 0px 4px 4px -3px; /* Reduced shadow intensity */
    font-size: 12px; /* Adjusted font size */

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
    margin-bottom: 1px; /* Minimal space between label and checkbox */
  }

  label {
    margin-bottom: 2px; /* Minimal spacing between label and input */
    font-size: 13px; /* Slightly smaller label text */
  }
`;

// Styled Button
export const StyledButton = styled(Button)`
  display: block;
  width: 100%;
  font-size: 13px; /* Reduced font size */
  font-weight: bold;
  background: linear-gradient(45deg, rgb(16, 137, 211) 0%, rgb(18, 177, 209) 100%);
  color: white;
  padding: 7px; /* Reduced padding for smaller button height */
  margin: 10px auto; /* Reduced margin */
  border-radius: 10px; /* Reduced border-radius */
  box-shadow: rgba(133, 189, 215, 0.88) 0px 8px 6px -8px; /* Smaller shadow */
  border: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.01); /* Slightly reduced hover effect */
    box-shadow: rgba(133, 189, 215, 0.88) 0px 10px 6px -9px;
  }

  &:active {
    transform: scale(0.97);
    box-shadow: rgba(133, 189, 215, 0.88) 0px 6px 6px -8px;
  }
`;
