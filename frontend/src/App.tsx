import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Naycol from './pages/edu/Naycol';
import Gymoberwil from './pages/edu/Gymoberwil';
import Sektherwil from './pages/edu/Sektherwil';
import Primtherwil from './pages/edu/Primtherwil';
import Chess from './pages/proj/Chess';
import TicTacToe from './pages/proj/TicTacToe';
import Other from './pages/proj/Other';

import NaycolCert from './pages/cert/NaycolCert';

export default function App() {
  return (
    <Router>
      <div className="bg-black text-white w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edu/naycol" element={<Naycol />} />
          <Route path="/edu/gymoberwil" element={<Gymoberwil />} />
          <Route path="/edu/sektherwil" element={<Sektherwil />} />
          <Route path="/edu/primtherwil" element={<Primtherwil />} />
          <Route path="/cert/naycol" element={<NaycolCert />} />
          <Route path="/proj/chess" element={<Chess />} />
          <Route path="/proj/tictactoe" element={<TicTacToe />} />
          <Route path="/proj/other" element={<Other />} />
          {/* Future routes will go here */}
        </Routes>
      </div>
    </Router>
  );
}