import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav';

import Home from './pages/Home';
import Card from './pages/Card';
import AllCards from './pages/AllCards';
import NotFound from './pages/NotFound';

import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (

    <div className="App">

      <div id='flexBody'>
        <div id='mainBody'>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/all-cards" element={<AllCards />}></Route>
            <Route path="/card" >
              <Route path='' element={<Card />}></Route>
              <Route path=':id' element={<Card />}></Route>
            </Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>


        <div id='footer' className='bg-dark'>Made by William Bolls</div>
      </div>


    </div>




  );
}

export default App;
