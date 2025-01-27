import React from 'react';
import { Header } from '../components/Header';
import { Outlet } from 'react-router-dom'; // Import Outlet for nested routes

export function SharedLayout() {
  return (
    <div className="container-fluid p-0">
      <Header />
      
      
      <div className="content-wrapper">
        <Outlet /> 
      </div>
    </div>
  );
}
