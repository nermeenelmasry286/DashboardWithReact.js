import React from 'react';
import { SharedLayout } from './SharedLayout';
import { ProductForm } from '../Pages/ProductForm';
import { Products } from '../Pages/Products';
import { ProductDetails } from '../Pages/ProductDetails';
import { NotFound } from '../Pages/NotFound';
import { Home } from '../Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function MainLayout() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<SharedLayout />}>
          
          <Route index element={<Home />} /> 

          
          <Route path="Products" element={<Products />} />
          <Route path="Products/:id/edit" element={<ProductForm />} />
          <Route path="Products/:id" element={<ProductDetails />} />
          
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
