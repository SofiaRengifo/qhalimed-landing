import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio/Inicio';
import Conocenos from './pages/Conocenos/Conocenos';    
import Certificado from './pages/Certificado/Certificado';   
import Contacto from './pages/Contacto/Contacto';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
     <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Conocenos" element={<Conocenos />} />
          <Route path="/Certificado" element={<Certificado />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
