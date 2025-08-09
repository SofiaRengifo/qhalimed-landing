import './App.css'
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio/Inicio';
import Nosotros from './pages/Conocenos/Conocenos';    
import Servicios from './pages/Servicios/Servicios';   
import Contacto from './pages/Contacto/Contacto';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


// Detalle de servicios (rutas hijas)
import Pediatria from './pages/Servicios/Detalle/Pediatria';
import Ginecologia from './pages/Servicios/Detalle/Ginecologia';
import Endocrinologia from './pages/Servicios/Detalle/Endocrinologia';
import MedicinaInterna from './pages/Servicios/Detalle/MedicinaInterna';
import Neurologia from './pages/Servicios/Detalle/Neurologia';
import Traumatologia from './pages/Servicios/Detalle/Traumatologia';
import Ecografias from './pages/Servicios/Detalle/Ecografias';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
     <Router basename="/qhalimed-landing">
      <Navbar />
        <Routes>
        {/* Rutas principales */}
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios/*" element={<Servicios />}>
          {/* Rutas hijas de servicios */}
          <Route index element={<Navigate to="pediatria" replace />} />
          <Route path="pediatria" element={<Pediatria />} />
          <Route path="ginecologia" element={<Ginecologia />} />
          <Route path="endocrinologia" element={<Endocrinologia />} />
          <Route path="medicina-interna" element={<MedicinaInterna />} />
          <Route path="neurologia" element={<Neurologia />} />
          <Route path="traumatologia" element={<Traumatologia />} />
          <Route path="ecografias" element={<Ecografias />} />
        </Route>
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
