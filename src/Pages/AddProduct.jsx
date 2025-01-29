import React from 'react';
import { GeneralForm } from '../components/AddProductComponents/GeneralForm';
import { PriceAndStock } from '../components/AddProductComponents/PriceAndStock';
import { UploadImgForm} from '../components/AddProductComponents/UploadImg';
import {AddCategoryForm} from '../components/AddProductComponents/AddCategory';
import {StyledButton} from '../Custom/MainButton';
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';
import styles from '../styles/style.module.css';
export function AddProduct() {
  return (
    <main className={`container ${styles.customMargin}`}>
     <header style={{  margin: '2px' }}>
        <h3 className={`${styles.mainHeader}`}>Add New Product</h3>
       
       <Link to={'/Products'}>
       <StyledButton >
        <FaCheck /> Add Product 
        </StyledButton>
       </Link> 
      </header>
      <div className="row w-100 " >
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
