import React from 'react';
import { SharedLayout } from './SharedLayout';
import { ProductForm } from '../Pages/ProductForm';
import { Products } from '../Pages/Products';
import { ProductDetails } from '../Pages/ProductDetails';
import { NotFound } from '../Pages/NotFound';
import { Home } from '../Pages/Home';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function MainLayout() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id/edit" element={<ProductForm />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
