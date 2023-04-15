import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Gem from './pages/Gem';
import Digest from './pages/Digest';
import Explore from './pages/Explore';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gems' element={<Gem />} />
        <Route path='/digest' element={<Digest />} />
        <Route path='/explore' element={<Explore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
