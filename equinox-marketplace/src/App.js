import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import MainContent from './mainContent';

function App() {
  return (
    <div>
      
    <div>
        <header>
            <Navbar />
            
        </header>           
      </div>

      <div>
        <main>
          <MainContent />
        </main>
      </div>

      <div>
        <footer>
          <p>&copy; 2024 Equinox Marketplace. All rights reserved.</p>
        </footer>
      </div>

    </div>

  );
}

export default App;
