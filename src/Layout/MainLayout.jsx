import React from 'react';
import { SharedLayout } from './SharedLayout';
import { ProductForm } from '../Pages/ProductForm';
import { Products } from '../Pages/Products';
import { ProductDetails } from '../Pages/ProductDetails';
import { NotFound } from '../Pages/NotFound';
import { Home } from '../Pages/Home';

import SignUp from '../components/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from '../Pages/Login'; // Updated import

export function MainLayout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginPage />} /> {/* Changed from Login to LoginPage */}
          <Route path="products" element={<Products />} />
          <Route path="products/:id/edit" element={<ProductForm />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
