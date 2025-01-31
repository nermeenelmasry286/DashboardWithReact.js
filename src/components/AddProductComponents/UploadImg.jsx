import React from 'react';
import Form from 'react-bootstrap/Form';
import { Container, Heading, StyledForm } from '../../Custom/MainFormSection';

export function UploadImgForm({ imagePreview, handleImageChange }) {
  return (
    <Container className="container-fluid">
      <Heading>Upload Image</Heading>
      <StyledForm>
        <Form.Group className="mb-3" controlId="productImage">
          <Form.Label>Product Photo</Form.Label>
          <Form.Control 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange}
          />
        </Form.Group>
        <div className="mt-3">
          {!imagePreview ? (
            <div 
              style={{
                width: '100%',
                maxWidth: '300px',
                height: '200px',
                borderRadius: '8px',
                border: '2px dashed #ccc',
                display: 'block',
                margin: '0 auto',
                textAlign: 'center',
                lineHeight: '200px',
                color: '#ccc'
              }}
            >
              No image uploaded
            </div>
          ) : (
            <img 
              src={imagePreview} 
              alt="Product Preview" 
              style={{
                width: '100%',
                maxWidth: '300px',
                borderRadius: '8px',
                display: 'block',
                margin: '0 auto'
              }}
            />
          )}
        </div>
      </StyledForm>
    </Container>
  );
}
