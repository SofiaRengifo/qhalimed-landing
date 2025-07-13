import { NavLink } from 'react-router-dom';
import logo from '/src/assets/img/LOGO QHALIMED.png';
import { useEffect } from "react";

function Navbar() {
    useEffect(() => {
    const toggleScrolled = () => {
      const body = document.body;
      const header = document.querySelector("#header");

      if (
        !header ||
        (
          !header.classList.contains("scroll-up-sticky") &&
          !header.classList.contains("sticky-top") &&
          !header.classList.contains("fixed-top")
        )
      ) {
        return;
      }

      if (window.scrollY > 100) {
        body.classList.add("scrolled");
      } else {
        body.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", toggleScrolled);
    window.addEventListener("load", toggleScrolled);

    // Ejecutar una vez al montar
    toggleScrolled();

    // Limpieza cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", toggleScrolled);
      window.removeEventListener("load", toggleScrolled);
    };
  }, []);

  return (
    <>
      <header id="header" className="header sticky-top">
        <div className="topbar d-flex align-items-center">
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
              <div className="d-flex align-items-center">
                 <i className="fa-solid fa-envelope"></i>
                <a href="mailto:contact@example.com">contact@example.com</a>
              </div>
              <div className="d-flex align-items-center ms-4">
                <i className="fa-solid fa-phone"></i>
                <a>+1 5589 55488 55</a>
              </div>
            </div>
            <div className="social-links d-none d-md-flex align-items-center">
              <a href="#" className="youtube"><i className="fa-brands fa-youtube"></i></a>
              <a href="#" className="facebook"><i className="fa-brands fa-facebook"></i></a>
              <a href="#" className="instagram"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="branding d-flex align-items-center">
          <div className="container position-relative d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo d-flex align-items-center me-auto">
              <img src={logo} alt="Qhalimed Logo" />
            </a>
            <i className="mobile-nav-toggle d-xl-none fa-solid fa-bars"
                onClick={() => {const nav = document.getElementById('navmenu');nav.classList.toggle('open');}}></i>
            <nav id="navmenu" className="navmenu">
              <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><a >Nosotros</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="">Médicos</a></li>
                <li><a href="">Blog</a></li>
                  <a className="cta-btn" href="#appointment">Agendar una cita</a>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
