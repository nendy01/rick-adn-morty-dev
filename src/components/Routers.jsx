import { Spinner } from '@chakra-ui/react';
import React, { lazy, Suspense } from 'react'
import {
Routes,
Route,
} from "react-router-dom";
/* import About from '../pages/About';
import Favorite from '../pages/Favorite';
import Home from '../pages/Home';
import Index from '../pages/Index';
import InfoCharacter from '../pages/InfoCharacter';
import Notfound from '../pages/Notfound';
import Advanced from '../pages/Advanced'; */

const Index = lazy(() => import('../pages/Index'))
const Home = lazy(() => import('../pages/Home'))
const InfoCharacter = lazy(() => import('../pages/InfoCharacter'))
const About = lazy(() => import('../pages/About'))
const Favorite = lazy(() => import('../pages/Favorite'))
const Advanced = lazy(() => import('../pages/Advanced'))
const Notfound = lazy(() => import('../pages/Notfound'))




 


const Routers = () => {
  return (
      <>
            <Suspense fallback={<Spinner mx="auto"/>}>
                  <Routes>
                        <Route index element={<Index />}/>
                        <Route path='/characters' element={<Home/>}/>
                        <Route path='/characters/:id' element={<InfoCharacter/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/favorite' element={<Favorite/>}/>
                        <Route path='/advanced' element={<Advanced/>}/>
                        <Route path='*' element={<Notfound/>}/>
                  </Routes>
            </Suspense>
      </>
  )
}

export default Routers