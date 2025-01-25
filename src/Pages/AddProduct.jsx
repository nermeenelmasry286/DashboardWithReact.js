import React from 'react';
import { GeneralForm } from '../components/AddProductComponents/GeneralForm';
import { PriceAndStock } from '../components/AddProductComponents/PriceAndStock';
import { UploadImgForm} from '../components/AddProductComponents/UploadImg';



export function AddProduct() {
  return (
    <main style={{ width: '100%' }}>
    <header>product</header>
      <div className="row " style={{ width: '100%' }}>
        <div className="col-12 col-md-6">
          <GeneralForm />
          <PriceAndStock/>
        </div>
        <div className="col-12 col-md-6">
          <UploadImgForm/>
         
        </div>
      </div>
    </main>
  );
}
