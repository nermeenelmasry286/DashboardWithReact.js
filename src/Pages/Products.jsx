import React from 'react';
import { StyledButton } from './../Custom/MainButton';
import {ProductList} from '../components/ProductList';
import { Form } from 'react-bootstrap';

export function Products() {
  return (

    <>
    <main className='container'>
    <h3 style={{ color: '#1091d3',textAlign:'center',marginTop:'15px'}}>our Product</h3>
    
<div className="d-flex justify-content-between align-items-center">
  <StyledButton>
    Add New Product
  </StyledButton>
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

