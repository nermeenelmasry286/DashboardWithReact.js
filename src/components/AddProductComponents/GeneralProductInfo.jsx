// GeneralForm.jsx
import React from 'react';
import Form from 'react-bootstrap/Form';
import { Container, Heading, StyledForm } from '../../Custom/MainFormSection';

export function GeneralProductInfo({ productDetails, handleInputChange }) {
  return (
    <Container className="container-fluid">
    <Heading>General Form</Heading>
    <StyledForm>
      <Form.Group className="mb-3" controlId="productName">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
         type="text" 
        placeholder="Enter Product Name"
        name='name'
        value={productDetails.name}
        onChange={handleInputChange}
         />
      </Form.Group>
  
      <Form.Group className="mb-3" controlId="productDescription">
        <Form.Label>Product Description</Form.Label>
        <Form.Control as="textarea" 
        rows={3} 
        placeholder="Enter Product Description" 
        name='description'
        value={productDetails.description}
        onChange={handleInputChange}
        />
      </Form.Group>
  
      {/* Gender and Size Selection */}
      <div className="row">
        <div className="col-12 col-md-6 mb-3">
          <Form.Group controlId="gender">
            <Form.Label>Gender</Form.Label>
            <div className="d-flex gap-3">
              <Form.Check
               type="radio"
                id="male" 
                label="Male"
                 name="gender"
                  value="male"
                  checked={productDetails.gender==='male'} 
                  onChange={handleInputChange}
                  
                  />
              <Form.Check 
              type="radio" 
              id="female" 
              label="Female" 
              name="gender" 
              value="female"
              checked={productDetails.gender==='female'} 
              onChange={handleInputChange} 
              />
            </div>
          </Form.Group>
        </div>
  
        <div className="col-12 col-md-6 mb-3">
          <Form.Group controlId="size">
            <Form.Label>Size</Form.Label>
            <div className="d-flex gap-3">
              <Form.Check 
              type="radio"
               id="small" 
               label="S" 
               name="size" 
               value="s"
               checked={productDetails.size==='s'} 
               onChange={handleInputChange}  />
              <Form.Check type="radio" id="medium" label="M" name="size" value="m"  checked={productDetails.size==='m'} onChange={handleInputChange}  />
              <Form.Check type="radio" id="large" label="L" name="size" value="l"  checked={productDetails.size==='l'}   onChange={handleInputChange} />
            </div>
          </Form.Group>
        </div>
      </div>
    </StyledForm>
  </Container>
  
  );
}
