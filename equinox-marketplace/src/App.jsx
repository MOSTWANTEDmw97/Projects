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

        <div>
          <footer>
            <p>&copy; 2024 Equinox Marketplace. All rights reserved.</p>
          </footer>
        </div>

      </div>
    </Router>

  );
}

export default App;
