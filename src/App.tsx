import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./styles/style.css"
import TopBanner from "./pages/TopBanner"
import Home from "./pages/Home";

const App: React.FC = () => {

    return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TopBanner />}>
            <Route index element={<Home />} />

            </Route>
          </Routes>
        </BrowserRouter>
      );

};

export default App;