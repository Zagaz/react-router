import './App.css'
import { BrowserRouter, Routes, Route , Navigate } from 'react-router-dom' // Corrigido: usar 'react-router-dom'
import MainLayout from './Layouts/MainLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './Components/Contacts'
import Home from './Components/Home'
import Services from './Components/Services'
import About from './Components/About';
import Error from './Components/Error'
import LoggedArea from './Components/LoggedArea';
import { useState } from 'react';


function App() {
  const [logged] = useState(true)
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout principal */}
        <Route path="" element={<MainLayout />}>
          {/* Páginas dentro do layout */}
          <Route index element={<Home />} /> {/* Quando acessar '/', mostra Home */}
          <Route path="home" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="about" element={<About />} />
          
          
          <Route path="logged-area" element={
            logged ? <LoggedArea /> : <Navigate to="/" />
            } />
          
          
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
