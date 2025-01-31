import React from 'react';
import { StyledButton } from './../Custom/MainButton';
import {ProductList} from '../components/ProductList';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../styles/style.module.css';
export function Products() {
  return (

    <>
    <main className={`container ${styles.customMargin}`}>
    <h3 className={`${styles.mainHeader}`}>Our Product</h3>
    
<div className="d-flex justify-content-between align-items-center">
  <Link to={'0/edit'}>
  <StyledButton>
    Add New Product
  </StyledButton>
  </Link>
  
  <Form.Control
    type="text"
    placeholder="Search Product..."
    style={{ width: '200px' , display:'inline'}}
  />
</div>

    <ProductList/>

    </main>
    

    </>

  );
}

