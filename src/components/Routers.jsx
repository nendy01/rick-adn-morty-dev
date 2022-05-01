import React from 'react'

import {
Routes,
Route,
} from "react-router-dom";
import About from '../pages/About';
import Favorite from '../pages/Favorite';
import Home from '../pages/Home';
import Index from '../pages/Index';
import InfoCharacter from '../pages/InfoCharacter';
import Notfound from '../pages/Notfound';
import Advanced from '../pages/Advanced';

const Routers = () => {
  return (
      <>
            <Routes>
                  <Route index element={<Index />}/>
                  <Route path='/characters' element={<Home/>}/>
                  <Route path='/characters/:id' element={<InfoCharacter/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/favorite' element={<Favorite/>}/>
                  <Route path='/advanced' element={<Advanced/>}/>
                  <Route path='*' element={<Notfound/>}/>
            </Routes>
      </>
  )
}

export default Routers