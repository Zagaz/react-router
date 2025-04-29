import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // Corrigido: usar 'react-router-dom'
import MainLayout from './Layouts/MainLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './Components/Contacts'
import Home from './Components/Home'
import Services from './Components/Services'
import Error from './Components/Error'

function App() {
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
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
