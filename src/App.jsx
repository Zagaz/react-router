import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'

import Contacts from './Components/Contacts'
import Home from './Components/Home'
import Services from './Components/Services'
import Error from './Components/Error'
import Navbar from './Navbar'


function App() {


  return (
    <>
    <h1>App</h1>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/Contacts' element={<Contacts />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </BrowserRouter>
   
    </>
  )
}

export default App
