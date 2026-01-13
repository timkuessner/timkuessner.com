import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <div className="bg-black text-white w-full">
      <Routes>
      <Route path="/" element={<Home />} />
      {/* Future routes will go here */}
      </Routes>
      </div>
    </Router>
  );
}