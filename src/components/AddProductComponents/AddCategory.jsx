import React from 'react';
import Form from 'react-bootstrap/Form';
import { Container, Heading, StyledForm } from '../../Custom/MainFormSection';
import { StyledButton } from '../../Custom/MainButton';

export function AddCategoryForm({ categoryName, handleAddCategory }) {
  return (
    <Container className="container-fluid">
      <Heading>Add Category</Heading>
      <StyledForm>
        <Form.Group className="mb-3" controlId="categoryName">
          <Form.Label>Category Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter Category Name" 
            value={categoryName}
            onChange={handleAddCategory}
          />
        </Form.Group>
        {/* <StyledButton >
          Add Category
        </StyledButton> */}
      </StyledForm>
    </Container>
  );
}
