
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Trayectoria from './pages/Trayectoria';

import Valores from './pages/Valores';
import Tienda from './pages/Tienda';
import Checkout from './pages/Checkout';
import CartDrawer from './components/CartDrawer';

function App() {
  return (
    <Router>
      <div className="app">
        <CartDrawer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trayectoria" element={<Trayectoria />} />
          <Route path="/valores" element={<Valores />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
