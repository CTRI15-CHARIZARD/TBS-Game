import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./styles/style.css"
import TopBanner from "./pages/TopBanner"
import Home from "./pages/Home";
import Battle from "./pages/Battle";
import PokemonSelector from "./pages/PokemonSelector";

const App: React.FC = () => {


    return (
      
        <BrowserRouter>
        <div className="app-container">
        <TopBanner />
          <Routes>
            {/* <Route path='/login' element={<Home />}/> */}
            <Route path='/select' element={<PokemonSelector />}/>
            <Route path='/battle' element={<Battle />}/>
            <Route path='/' element={<Home />}>
            </Route>
          </Routes>
        </div>
        </BrowserRouter>
      );

};

export default App;