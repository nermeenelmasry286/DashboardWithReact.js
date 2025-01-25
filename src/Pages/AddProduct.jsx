import React from 'react';
import { GeneralForm } from '../components/AddProductComponents/GeneralForm';
import { PriceAndStock } from '../components/AddProductComponents/PriceAndStock';
import { UploadImgForm} from '../components/AddProductComponents/UploadImg';
import {AddCategoryForm} from '../components/AddProductComponents/AddCategory';
import {StyledButton} from '../Custom/MainButton';
import { FaCheck } from "react-icons/fa";
export function AddProduct() {
  return (
    <main style={{ width: '100%' }}>
     <header style={{  margin: '2px' }}>
        <h6 style={{ color: '#1091d3', display:'inline-block',margin:'10px'}}>Add New Product</h6>
        <StyledButton >
        <FaCheck /> Add Product 
        </StyledButton>
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
