import React from 'react';
import { StyledButton } from './../Custom/MainButton';
import {ProductList} from '../components/ProductList';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export function Products() {
  return (

    <>
    <main className='container' style={{marginTop:'90px'}}>
    <h3 style={{ color: '#1091d3',textAlign:'center',marginTop:'15px'}}>Our Product</h3>
    
<div className="d-flex justify-content-between align-items-center">
  <Link to={'3/edit'}>
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

