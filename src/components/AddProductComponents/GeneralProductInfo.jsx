
import React from 'react';
import Form from 'react-bootstrap/Form';
import styles from '../../styles/productForm.module.css';

export function GeneralProductInfo({ productDetails, handleInputChange }) {
  return (
      <div className={styles.containerFluid}>
          <h2 className={styles.heading}>General Form</h2>
          <div className={styles.styledForm}>
              <Form.Group className="mb-3" controlId="productName">
                  <Form.Label className={styles.label}>Product Name</Form.Label>
                  <Form.Control
                      className={styles.formControl}
                      type="text"
                      placeholder="Enter Product Name"
                      name="name"
                      value={productDetails.name}
                      onChange={handleInputChange}
                  />
              </Form.Group>

              <Form.Group className="mb-3" controlId="productDescription">
                  <Form.Label className={styles.label}>Product Description</Form.Label>
                  <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter Product Description"
                      name="description"
                      value={productDetails.description}
                      onChange={handleInputChange}
                      className={styles.formControl}
                  />
              </Form.Group>

              {/* Gender and Size Selection */}
              <div className="row">
                  <div className="col-12 col-md-6 mb-3">
                      <Form.Group controlId="gender">
                          <Form.Label className={styles.label}>Gender</Form.Label>
                          <div className="d-flex gap-3">
                              <Form.Check
                                  type="radio"
                                  id="male"
                                  label="Male"
                                  name="gender"
                                  value="male"
                                  checked={productDetails.gender === 'male'}
                                  onChange={handleInputChange}
                              />
                              <Form.Check
                                  type="radio"
                                  id="female"
                                  label="Female"
                                  name="gender"
                                  value="female"
                                  checked={productDetails.gender === 'female'}
                                  onChange={handleInputChange}
                              />
                          </div>
                      </Form.Group>
                  </div>

                  <div className="col-12 col-md-6 mb-3">
                      <Form.Group controlId="size">
                          <Form.Label className={styles.label}>Size</Form.Label>
                          <div className="d-flex gap-3">
                              <Form.Check
                                  type="radio"
                                  id="small"
                                  label="S"
                                  name="size"
                                  value="s"
                                  checked={productDetails.size === 's'}
                                  onChange={handleInputChange}
                              />
                              <Form.Check
                                  type="radio"
                                  id="medium"
                                  label="M"
                                  name="size"
                                  value="m"
                                  checked={productDetails.size === 'm'}
onChange={handleInputChange}
                              />
                              <Form.Check
                                  type="radio"
                                  id="large"
                                  label="L"
                                  name="size"
                                  value="l"
                                  checked={productDetails.size === 'l'}
                                  onChange={handleInputChange}
                              />
                          </div>
                      </Form.Group>
                  </div>
              </div>
          </div>
      </div>
  );
}
