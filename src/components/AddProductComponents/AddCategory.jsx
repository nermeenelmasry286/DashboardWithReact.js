import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Container, Heading, StyledForm } from '../../Custom/StyledGeneralForm';
import {StyledButton} from '../../Custom/MainButton';

export function AddCategoryForm() {
  const [categoryName, setCategoryName] = useState('');
  const [addedCategory, setAddedCategory] = useState(null);


  const handleCategoryChange = (event) => {
    setCategoryName(event.target.value);
  };

  const handleAddCategory = () => {
    if (categoryName.trim()) {
      setAddedCategory(categoryName);  
      setCategoryName(''); 
    }
  };

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
            onChange={handleCategoryChange}
          />
        </Form.Group>

      
        <StyledButton 
          
          onClick={handleAddCategory}
        >
          Add Category
        </StyledButton>

      
        {addedCategory && (
          <div className="mt-3">
            <p><strong>Added Category: </strong>{addedCategory}</p>
          </div>
        )}
      </StyledForm>
    </Container>
  );
}
