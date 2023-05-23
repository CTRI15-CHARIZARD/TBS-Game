import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import Navbar from '../components/Navbar';


const TopBanner: React.FC = () => {
  //STATE DECLARATION (dbSpy3.0)

  //END: STATE DECLARATION

  
  return (
    <>
    {/* <div className="h-screen"> */}
    <Navbar/>
    <Outlet/>
    {/* </div> */}
    </>
  )
}

export default TopBanner;