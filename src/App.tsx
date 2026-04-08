import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Donors from './pages/Donors';
import BloodRequests from './pages/BloodRequests';
import Statistics from './pages/Statistics';
import AboutUs from './pages/AboutUs';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donors" element={<Donors />} />
          <Route path="/requests" element={<BloodRequests />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}
