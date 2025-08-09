import "./Servicios.css";
import Banner from "../../components/Banner";
import portadaService from "../../assets/img/portadas/servicios.jpg";
import {NavLink, Outlet } from 'react-router-dom';

function Servicios() {
  return (
    <>
      <Banner title="Servicios" image={portadaService} style={{ backgroundPosition: 'center' }} />
      <nav className="services-submenu">
        <div className="container d-flex gap-3 py-3 flex-wrap nav-services">
          <NavLink to="/Servicios/pediatria"className={({ isActive }) => isActive ? 'active' : ''}>Pediatría</NavLink>
          <NavLink to="/Servicios/ginecologia"className={({ isActive }) => isActive ? 'active' : ''}>Ginecología</NavLink>
          <NavLink to="/Servicios/endocrinologia"className={({ isActive }) => isActive ? 'active' : ''}>Endocrinología</NavLink>
          <NavLink to="/Servicios/medicina-interna"className={({ isActive }) => isActive ? 'active' : ''}>Medicina interna</NavLink>
          <NavLink to="/Servicios/neurologia"className={({ isActive }) => isActive ? 'active' : ''}>Neurologia</NavLink>
          <NavLink to="/Servicios/traumatologia"className={({ isActive }) => isActive ? 'active' : ''}>Traumatologia</NavLink>
          <NavLink to="/Servicios/ecografias"className={({ isActive }) => isActive ? 'active' : ''}>Ecografías</NavLink>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Servicios;