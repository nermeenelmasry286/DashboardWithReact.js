// GeneralForm.jsx
import React from 'react';
import Form from 'react-bootstrap/Form';
import { Container, Heading, StyledForm } from '../../Custom/MainForm';

export function GeneralForm() {
  return (
    <Container className="container-fluid">
    <Heading>General Form</Heading>
    <StyledForm>
      <Form.Group className="mb-3" controlId="productName">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Product Name" />
      </Form.Group>
  
      <Form.Group className="mb-3" controlId="productDescription">
        <Form.Label>Product Description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter Product Description" />
      </Form.Group>
  
      {/* Gender and Size Selection */}
      <div className="row">
        <div className="col-12 col-md-6 mb-3">
          <Form.Group controlId="gender">
            <Form.Label>Gender</Form.Label>
            <div className="d-flex gap-3">
              <Form.Check type="radio" id="male" label="Male" name="gender" value="male" />
              <Form.Check type="radio" id="female" label="Female" name="gender" value="female" />
            </div>
          </Form.Group>
        </div>
  
        <div className="col-12 col-md-6 mb-3">
          <Form.Group controlId="size">
            <Form.Label>Size</Form.Label>
            <div className="d-flex gap-3">
              <Form.Check type="radio" id="small" label="S" name="size" value="s" />
              <Form.Check type="radio" id="medium" label="M" name="size" value="m" />
              <Form.Check type="radio" id="large" label="L" name="size" value="l" />
            </div>
          </Form.Group>
        </div>
      </div>
    </StyledForm>
  </Container>
  
  );
}
