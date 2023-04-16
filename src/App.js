import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Gem from './pages/Gem';
import Digest from './pages/Digest';
import Explore from './pages/Explore';

function App() {
  const [userData, setUserData] = useState(null);
  const userId = 6;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://us-east-2.compute.amazonaws.com:8080/api/v1/blocks', {
          headers: {
            user_id: userId,
          },
        });
        setUserData(response.data.user);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <BrowserRouter>
      <NavBar userData={userData}/>
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
