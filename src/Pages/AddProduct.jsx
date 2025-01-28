import React from 'react';
import { GeneralForm } from '../components/AddProductComponents/GeneralForm';
import { PriceAndStock } from '../components/AddProductComponents/PriceAndStock';
import { UploadImgForm} from '../components/AddProductComponents/UploadImg';
import {AddCategoryForm} from '../components/AddProductComponents/AddCategory';
import {StyledButton} from '../Custom/MainButton';
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';
export function AddProduct() {
  return (
    <main className='container' style={{marginTop:'73px'}}>
     <header style={{  margin: '2px' }}>
        <h3 style={{ color: '#1091d3', display:'inline-block',margin:'10px'}}>Add New Product</h3>
       
       <Link to={'/Products'}>
       <StyledButton >
        <FaCheck /> Add Product 
        </StyledButton>
       </Link> 
      </header>
      <div className="row " style={{ width: '100%' }}>
        <div className="col-12 col-md-6">
          <GeneralForm />
          <PriceAndStock/>
        </div>
        <div className="col-12 col-md-6">
          <UploadImgForm/>
          <AddCategoryForm/>

         
        </div>
      </div>
    </main>
  );
}
