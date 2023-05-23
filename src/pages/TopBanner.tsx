import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import Navbar from '../components/Navbar';


function TopBanner() {
  //STATE DECLARATION (dbSpy3.0)

  //END: STATE DECLARATION

  
  return (
    <>
    <Navbar/>
    {/* Outlet renders child elements */}
    <Outlet/>
    </>
  )
}

export default TopBanner;