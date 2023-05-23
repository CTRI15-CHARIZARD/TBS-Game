import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./styles/style.css"
import TopBanner from "./pages/TopBanner"
import Home from "./pages/Home";

const App: React.FC = () => {


    return (
      
        <BrowserRouter>
        <TopBanner />
          <Routes>
            
            <Route path='/' element={<Home />}>
            {/* <Route index element={<Home />} /> */}
            <Route path='login' element={<Home />}/>

            </Route>
          </Routes>
        </BrowserRouter>
      );

};

export default App;