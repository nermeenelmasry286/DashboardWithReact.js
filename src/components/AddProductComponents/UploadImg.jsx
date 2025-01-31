import React from 'react';
import Form from 'react-bootstrap/Form';
import styles from '../../styles/productForm.module.css';

export function UploadImgForm({ imagePreview, handleImageChange }) {
  return (
      <div className={styles.containerFluid}>
          <h2 className={styles.heading}>Upload Image</h2>
          <div className={styles.styledForm}>
              <Form.Group className="mb-3" controlId="productImage">
                  <Form.Label className={styles.label}>Product Photo</Form.Label>
                  <Form.Control
                      className={styles.formControl}
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                  />
              </Form.Group>
              <div className="mt-3">
                  {!imagePreview ? (
                      <div
                          className={styles.formControl}
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
                              color: '#ccc',
                          }}
                      >
                          No image uploaded
                      </div>
                  ) : (
                      <img
                          src={imagePreview}
                          alt="Product Preview"
                          className={styles.formControl}
                          style={{
                              width: '100%',
                              maxWidth: '300px',
                              borderRadius: '8px',
                              display: 'block',
                              margin: '0 auto',
                          }}
                      />
                  )}
              </div>
          </div>
      </div>
  );
}