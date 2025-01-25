import React from 'react';
import { GeneralForm } from '../components/AddProductComponents/GeneralForm';


export function AddProduct() {
  return (
    <main style={{ width: '100%' }}>
      <div className="row " style={{ width: '100%' }}>
        <div className="col-12 col-md-6">
          <GeneralForm />
          
        </div>
        <div className="col-12 col-md-6">
          
         
        </div>
      </div>
    </main>
  );
}
