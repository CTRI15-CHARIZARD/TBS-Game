import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './styles/style.css';
import TopBanner from './pages/TopBanner';
import Home from './pages/Home';
import WebSocket from './pages/Websocket';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopBanner />} /> {/* </Route> */}
        <Route index element={<Home />} />
        <Route path="/websocket" element={<WebSocket />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
