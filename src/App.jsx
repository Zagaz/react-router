import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Contacts from './Components/Contacts'
import Home from './Components/Home'
import Services from './Components/Services'
import Error from './Components/Error'

function App() {


  return (
    <>
      <BrowserRouter>
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
