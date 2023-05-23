import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const linkbtn = 'mt-4 inline-block lg:mt-0 text-blue-200 hover:text-white mr-4';

function Navbar() {
  //STATE DECLARATION (dbSpy3.0)

  //END: STATE DECLARATION

  //this is a function to toggle class between light and dark using vanilla DOM manipulation and local state.
  //FOR FUTURE DEVS: there's probably a more elegant way to do this with settings store and sharing that state globally but tailwind cascades dark mode from the top element so this works

  return (
    <>
      <nav className="fixed top-0 flex w-full flex-wrap items-center justify-between bg-sky-800 p-6">
        <div className="navItems text-base">
          <NavLink to="/" className={linkbtn}>
            Home
          </NavLink>
          <NavLink to="/display" data-testid="navbar-display" className={linkbtn}>
            Display
          </NavLink>
        </div>
        <div>

            <>
              <span className="mt-4 inline-block text-blue-200 lg:mt-0">
              </span>
            </>

            <div>
              <NavLink
                to="/login"
                className="mt-1 inline-block text-blue-200 shadow-2xl hover:text-white lg:mt-0"
              >
                Login
              </NavLink>
            </div>

        </div>
      </nav>
      <div className="h-[64px]"></div>
    </>
  );
}

export default Navbar;