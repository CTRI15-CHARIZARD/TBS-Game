import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import pokeballimage from '../../images/pokeballimage.png';

const Navbar: React.FC = () => {

  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex justify-center items-center py-4 text-slate-700 text-4xl border-b-4 border-pokemonYellow rounded bg-gradient-to-b from-pokemonYellowDarker to-pokemonYellow">
        <div className="mr-8 text-pokemonPurple hover:text-pokemonPurpleLight">
          <NavLink to="/">
            Home
          </NavLink>
        </div>
        <img src={pokeballimage} alt="pokeball" className="max-w-10 max-h-12"></img>
        <div className="flex items-center">
          <div className="mr-4">
            <NavLink to="/login" className="text-pokemonPurple hover:text-pokemonPurpleLight ml-8">
              Login
            </NavLink>
          </div>
          {/* Additional elements can be added here */}
        </div>
      </nav>
      {/* <div className="h-8 bg-pokemonBlue"></div> */}
    </>
  );
}

export default Navbar;