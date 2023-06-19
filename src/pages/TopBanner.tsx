import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';


const TopBanner: React.FC = () => {
  
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  );
};

export default TopBanner;