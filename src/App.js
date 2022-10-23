import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Stories from './components/stories/stories';
import Profile from './components/profile/profile';
import Messages from './components/messages/messages';
import Likes from './components/likes/likes';
import Explore from './components/explore/explore';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/stories' element={<Stories />} />
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