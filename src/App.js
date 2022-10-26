import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Homepage/Homepage';
import Profile from './components/profile/profile';
import Messages from './components/messages/messages';
import Likes from './components/likes/likes';
import Explore from './components/explore/explore';
import Navbar from './components/navbar/navbar';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/likes' element={<Likes />} />
          <Route path='/explore' element={<Explore />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
