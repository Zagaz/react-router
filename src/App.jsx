import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import MainLayout from './Layouts/MainLayout';

import Contacts from './Components/Contacts'
import Home from './Components/Home'
import Services from './Components/Services'
import Error from './Components/Error'
import Navbar from './Components/Navbar'


function App() {


  return (
    <>
  

      <BrowserRouter>
    <MainLayout />

        <Routes>
        <Route path="/" element={<MainLayout />} />
          <Route path="/home" element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/Contacts' element={<Contacts />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </BrowserRouter>
   
    </>
  )
}

export default App
