import React, { createContext } from 'react';
import { Header } from '../components/Header';
import { Outlet, useLocation } from 'react-router-dom'; 

export const ThemeContext = createContext();



export function SharedLayout() {
  const location = useLocation();

  // Define routes where the Header should be hidden
  const hideHeaderRoutes = ['/login', '/signup'];

  return (
    
      <div className="container-fluid p-0">
        {/* Only show Header if the current route is NOT in hideHeaderRoutes */}
        {!hideHeaderRoutes.includes(location.pathname) && <Header />}
        
        <div className="content-wrapper">
          <Outlet />
        </div>
      </div>
  
  );
}
