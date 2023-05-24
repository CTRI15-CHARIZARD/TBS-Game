import "./styles/style.css";
import React, {useState} from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import TopBanner from "./pages/TopBanner";
import Home from "./pages/Home";
import Battle from "./pages/Battle";
import PokemonSelector from "./pages/PokemonSelector";
import { PokemonContext } from "./store/pokemonContext";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<TopBanner />}>
      <Route index element={<Home />} />
      <Route path='/select' element={<PokemonSelector />}/>
      <Route path='/battle' element={<Battle />}/>
    </Route>
  )
);

const App = () => {
  const [pokemon, setPokemon] = useState('');
  const pokemonInfo = { pokemon, setPokemon}

  return (
      <PokemonContext.Provider value={pokemonInfo}>
        <RouterProvider router={router} />
      </PokemonContext.Provider>
    )
};

export default App;