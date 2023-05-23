import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./styles/index.css"
import TopBanner from "./pages/TopBanner"

const App: React.FC = () => {

    return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TopBanner />}>

            </Route>
          </Routes>
        </BrowserRouter>
      );

};

export default App;