import React, { createContext } from 'react';
import { Header } from '../components/Header';
import { Outlet } from 'react-router-dom'; 


export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = React.useState('light'); 

 
  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
   
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function SharedLayout() {
  return (
    <ThemeProvider>
      <div className="container-fluid p-0">
        <Header />
        <div className="content-wrapper">
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
}
