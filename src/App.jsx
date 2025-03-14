import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import { Footer } from './components/footer';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      {/* footer */}
      <Footer/>
      
    </div>
  );
};

export default App;
