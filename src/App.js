import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from '../src/components/layout/WebsiteLayout'

import Home from '../src/components/pages/Inicio/Home'
import Propiedades from '../src/components/pages/Propiedades/Propiedades'
import Nosotros from "./components/pages/Nosotros/Nosotros"
import Preguntas from "./components/pages/Preguntas/Preguntas"
import Contacto from "./components/pages/Contacto/Contacto"
import SignIn from "./components/pages/SignIn/SignIn"
import Propiedad from "./components/pages/Propiedades/Propiedad"
import ScrollToTop from './components/ScrollToTop'
import NuevaPropiedad from "./components/pages/Admin/NuevaPropiedad"
import EditarPropiedad from "./components/pages/Admin/EditarPropiedad"

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/propiedades' element={<Propiedades />}/>
          <Route path='/nosotros' element={<Nosotros />}/>
          <Route path='/preguntas' element={<Preguntas />}/>
          <Route path='/contacto' element={<Contacto />}/>
          <Route path='/admin' element={<SignIn />}/>
          <Route path='/admin/agregar' element={<NuevaPropiedad />}/>
          <Route path='/admin/editar' element={<EditarPropiedad />}/>
          <Route path='/propiedades/:id' element={<Propiedad />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

