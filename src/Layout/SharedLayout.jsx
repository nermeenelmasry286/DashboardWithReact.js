import React from 'react';
import { Header } from '../components/Header';
// import { AddProduct } from '../Pages/AddProduct';
import {Products} from '../Pages/Products';
// import {ProductDetails} from '../Pages/ProductDetails';


export function SharedLayout() {
  return (
    <div className="container-fluid p-0">
  

    {/* Main Content */}
    <div className="col-md-12">
      <Header />
      {/* <AddProduct /> */}
      <Products/>
      {/* <ProductDetails /> */}
      

    </div>
  </div>


  );
}
