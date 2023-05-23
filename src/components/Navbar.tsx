import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {

  return (
    <>
      <nav className="flex justify-center items-center text-slate-700 text-4xl">
        <div className="mr-4">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            <NavLink
              to="/login"
              className="text-blue-200 shadow-2xl hover:text-slate-700"
            >
              Login
            </NavLink>
          </div>
          {/* Additional elements can be added here */}
        </div>
      </nav>
      <div className="h-64"></div>
    </>
  );
}

export default Navbar;