import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Container, Heading, StyledForm,StyledButton } from '../../Custom/StyledGeneralForm';

export function AddCategoryForm() {
  const [categoryName, setCategoryName] = useState('');
  const [addedCategory, setAddedCategory] = useState(null);

  // Handle category name change
  const handleCategoryChange = (event) => {
    setCategoryName(event.target.value);
  };

  // Handle adding the category
  const handleAddCategory = () => {
    if (categoryName.trim()) {
      setAddedCategory(categoryName);  // Store the added category
      setCategoryName('');  // Clear the input after adding
    }
  };

  return (
    <Container className="container-fluid">
      <Heading>Add Category</Heading>
      <StyledForm>
        {/* Category Name Input */}
        <Form.Group className="mb-3" controlId="categoryName">
          <Form.Label>Category Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter Category Name" 
            value={categoryName}
            onChange={handleCategoryChange}
          />
        </Form.Group>

        {/* Add Category Button */}
        <StyledButton 
          
          onClick={handleAddCategory}
        >
          Add Category
        </StyledButton>

        {/* Display Added Category */}
        {addedCategory && (
          <div className="mt-3">
            <p><strong>Added Category: </strong>{addedCategory}</p>
          </div>
        )}
      </StyledForm>
    </Container>
  );
}
