import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom';
import styles from '../styles/style.module.css'; 
import { StyledButton } from '../Custom/MainButton';
import { selectProductById } from "../store/Slices/productsSlice";
import { useSelector } from "react-redux";

export function ProductDetails() {
  const { id } = useParams();
  const product = useSelector((state) => selectProductById(state, id));

  return (
    <main className={`container ${styles.customMargin}`}>
      <h3 className={`${styles.mainHeader}`}>
        Product Details
      </h3>

      <div className={styles.tableContainer}>
        <Container>
          <Row className="align-items-center">
            {/* Left Section */}
            <Col xs={12} md={6} className="text-center">
              <Image className={styles.productImage} src={product?.img} alt="Product" />
            </Col>

            {/* Right Section */}
            <Col xs={12} md={6} className="text-center text-md-start mt-3">
              <h2 className={styles.productTitle}>
                Product Name: <span>{product?.name}</span>
              </h2>
              <p className={styles.productDescripition}>{product?.description}</p>
              <h3 className={styles.productDetails}>Product Price: {product?.basePrice}</h3>
              <h3 className={styles.productDetails}>Product Quantity: {product?.stock}</h3>
              <h4 className={styles.productDetails}>Size: {product?.size}</h4>
              <h4 className={styles.productDetails}>Gender: {product?.gender}</h4>
              <h4 className={styles.productDetails}>Category: {product?.category}</h4>
              <Link to={'/Products'}>
                <StyledButton>Back to Products</StyledButton>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
}