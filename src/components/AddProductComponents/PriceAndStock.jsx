import React from 'react';
import Form from 'react-bootstrap/Form';
import { Container, Heading, StyledForm } from '../../Custom/MainFormSection';
import { styled } from 'styled-components';

export function PriceAndStock({ productDetails, handleInputChange }) {
  return (
    <Container className="container-fluid">
      <Heading>Price And Stock</Heading>
      <StyledForm>
        <div className="row">
          <div className="col-12 col-md-6 mb-2"> 
            <Form.Group controlId="productPrice">
              <Form.Label>Base Price</Form.Label>
              <Form.Control type="number" min="1" placeholder="Enter Product Price" name='price'
        value={productDetails.price}
        onChange={handleInputChange} />
            </Form.Group>
          </div>

          <div className="col-12 col-md-6 mb-2"> 
            <Form.Group controlId="stock">
              <Form.Label>Stock</Form.Label>
              <Form.Control type="number" min="1" placeholder="Enter Product Stock" name='stock'
        value={productDetails.stock}
        onChange={handleInputChange} />
            </Form.Group>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6 mb-2"> 
            <Form.Group controlId="productDiscount">
              <Form.Label>Product Discount</Form.Label>
              <Form.Control type="number" placeholder="Enter Product Discount" name='discount'
        value={productDetails.discount}
        onChange={handleInputChange} />
            </Form.Group>
          </div>

          <div className="col-12 col-md-6 mb-2"> 
            <Form.Group controlId="productName">
              <Form.Label>Discount Type</Form.Label>
              <Form.Control type="text" placeholder="Type of Discount"  name='discountType'
        value={productDetails.discountType}
        onChange={handleInputChange}/>
             
            </Form.Group>
          </div>
        </div>
      </StyledForm>
    </Container>
  );
}
