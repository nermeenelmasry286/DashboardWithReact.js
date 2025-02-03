import React from 'react';
import Form from 'react-bootstrap/Form';
import styles from '../../styles/productForm.module.css';

export function PriceAndStock({ productDetails, handleInputChange }) {
  return (
      <div className={styles.containerFluid}>
          <h2 className={styles.heading}>Price And Stock</h2>
          <div className={styles.styledForm}>
              <div className="row">
                  <div className="col-12 col-md-6 mb-2">
                      <Form.Group controlId="productPrice">
                          <Form.Label className={styles.label}>Base Price</Form.Label>
                          <Form.Control
                              className={styles.formControl}
                              type="number"
                              min="1"
                              placeholder="Enter Product Price"
                              name="price"
                              value={productDetails.price}
                              onChange={handleInputChange}
                          />
                      </Form.Group>
                  </div>

                  <div className="col-12 col-md-6 mb-2">
                      <Form.Group controlId="stock">
                          <Form.Label className={styles.label}>Stock</Form.Label>
                          <Form.Control
                              className={styles.formControl}
                              type="number"
                              min="1"
                              placeholder="Enter Product Stock"
                              name="stock"
                              value={productDetails.stock || ''}
                              onChange={handleInputChange}
                          />
                      </Form.Group>
                  </div>
              </div>

              <div className="row">
                  <div className="col-12 col-md-6 mb-2">
                      <Form.Group controlId="productDiscount">
                          <Form.Label className={styles.label}>Product Discount</Form.Label>
                          <Form.Control
                              className={styles.formControl}
                              type="number"
                              placeholder="Enter Product Discount"
                              name="discount"
                              value={productDetails.discount || ''}
                              onChange={handleInputChange}
                          />
                      </Form.Group>
                  </div>

                  <div className="col-12 col-md-6 mb-2">
                      <Form.Group controlId="productName">
                          <Form.Label className={styles.label}>Discount Type</Form.Label>
                          <Form.Control
                              className={styles.formControl}
                              type="text"
                              placeholder="Type of Discount"
                              name="discountType"
                              value={productDetails.discountType}
                              onChange={handleInputChange}
                          />
                      </Form.Group>
                  </div>
              </div>
          </div>
      </div>
  );
}