import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import Card from './pages/Card';
import AllCards from './pages/AllCards';
import NotFound from './pages/NotFound';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Orchard Cards</h1>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/all-cards" element={<AllCards />}></Route>
          <Route path="/card/*" element={<Card />}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>

        

      </div>
    </Router>

  );
}

export default App;
