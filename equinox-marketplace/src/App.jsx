import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import MainContent from './mainContent';
import Profile from './Profile';
import Login from './Login';
import Register from './Register';
import Logout from './Logout';
import Marketplace from './MarketplacePage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        
        <div>
          <header>
            <Navbar />        
          </header>           
        </div>

        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/Marketplace" element={<Marketplace />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Logout" element={<Logout />} />
        </Routes>


       


        <div className="bg-light border-top mt-5">
  <footer className="container py-4 text-center">
    <p className="mb-1 text-muted">&copy; 2024 <strong>Equinox Marketplace</strong>. All rights reserved.</p>
    <small className="text-secondary">Built with ❤️ for book lovers and marketplace explorers.</small>
    <br />
    <small>Check out our github repository <a href="https://github.com/MOSTWANTEDmw97/Projects" target="_blank" rel="noopener noreferrer">here</a>.</small>
  </footer>
  </div>

      </div>
    </Router>

  );
}

export default App;
