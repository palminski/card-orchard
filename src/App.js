import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import Card from './pages/Card';
import AllCards from './pages/AllCards';
import NotFound from './pages/NotFound';

import { BrowserRouter as Router, Routes, Route, Link, HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <h1>Orchard Cards</h1>

        <Link to="/"><h3>home</h3></Link>
        <Link to="/all-cards"><h3>all cards</h3></Link>
        <Link to="/card"><h3>card</h3></Link>
        <Link to={"/card/"+"CARDNAME-TESTID-00000000"}><h3>test link</h3></Link>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/all-cards" element={<AllCards />}></Route>
          <Route path="/card" >
            <Route path='' element={<Card />}></Route>
            <Route path=':id' element={<Card />}></Route>
          </Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>

        

      </div>
    </HashRouter>

  );
}

export default App;
