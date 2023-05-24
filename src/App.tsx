import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/style.css';
import TopBanner from './pages/TopBanner';
import Home from './pages/Home';
import WebSocketPage from './pages/WebSocketPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <TopBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Home />} />
        <Route path="/battle" element={<Home />} />
        <Route path="/websocket" element={<WebSocketPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
