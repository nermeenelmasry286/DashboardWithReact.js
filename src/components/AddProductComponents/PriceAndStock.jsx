import React from 'react';
import Form from 'react-bootstrap/Form';
import { Container, Heading, StyledForm } from '../../Custom/MainForm';

export function PriceAndStock() {
  return (
    <Container className="container-fluid">
      <Heading>Price And Stock</Heading>
      <StyledForm>
        <div className="row">
          <div className="col-12 col-md-6 mb-2"> 
            <Form.Group controlId="productPrice">
              <Form.Label>Base Price</Form.Label>
              <Form.Control type="number" min="1" placeholder="Enter Product Price" />
            </Form.Group>
          </div>

          <div className="col-12 col-md-6 mb-2"> 
            <Form.Group controlId="stock">
              <Form.Label>Stock</Form.Label>
              <Form.Control type="number" min="1" placeholder="Enter Product Stock" />
            </Form.Group>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6 mb-2"> 
            <Form.Group controlId="productDiscount">
              <Form.Label>Product Discount</Form.Label>
              <Form.Control type="number" placeholder="Enter Product Discount" />
            </Form.Group>
          </div>

          <div className="col-12 col-md-6 mb-2"> 
            <Form.Group controlId="productName">
              <Form.Label>Discount Type</Form.Label>
              <Form.Control type="text" placeholder="type of discount" />
             
            </Form.Group>
          </div>
        </div>
      </StyledForm>
    </Container>
  );
}
