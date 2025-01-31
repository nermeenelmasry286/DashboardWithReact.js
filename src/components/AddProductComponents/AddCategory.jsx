import React from 'react';
import Form from 'react-bootstrap/Form';
import { StyledButton } from '../../Custom/MainButton';
import styles from '../../styles/productForm.module.css';

export function AddCategoryForm({ categoryName, handleAddCategory }) {
  return (
      <div className={styles.containerFluid}>
          <h2 className={styles.heading}>Add Category</h2>
          <div className={styles.styledForm}>
              <Form.Group className="mb-3" controlId="categoryName">
                  <Form.Label className={styles.label}>Category Name</Form.Label>
                  <Form.Control
                      className={styles.formControl}
                      type="text"
                      placeholder="Enter Category Name"
                      value={categoryName}
                      onChange={handleAddCategory}
                  />
              </Form.Group>
          </div>
      </div>
  );
}