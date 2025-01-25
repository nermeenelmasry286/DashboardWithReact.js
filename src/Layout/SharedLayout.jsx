import React from 'react';
import { OffCanvas } from '../components/OffCanvas';
import { Header } from '../components/Header';
import { AddProduct } from '../Pages/AddProduct';

export function SharedLayout() {
  return (
    <div className="container-fluid p-0">
  <button
    className="btn btn-primary d-md-none m-2"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasSidebar"
    aria-controls="offcanvasSidebar"
  >
    Toggle Sidebar
  </button>

  <div className="row g-0 w-100">
    {/* Offcanvas Sidebar */}
    <div
      className="offcanvas offcanvas-start d-md-none"
      id="offcanvasSidebar"
      tabIndex="-1"
      aria-labelledby="offcanvasSidebarLabel"
    >
      <div className="offcanvas-header">
        <h5 id="offcanvasSidebarLabel">Sidebar</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <OffCanvas />
      </div>
    </div>

    {/* Sidebar for Larger Screens */}
    <div className="col-md-2 d-none d-md-block">
      <OffCanvas />
    </div>

    {/* Main Content */}
    <div className="col-md-10">
      <Header />
      <AddProduct />
    </div>
  </div>
</div>

  );
}
