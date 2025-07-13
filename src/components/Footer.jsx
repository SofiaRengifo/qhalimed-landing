import { Link } from 'react-router-dom';
import logo from '/src/assets/img/LOGO QHALIMED.png';
function Footer() {
  return (
    <>
    <div className='footer'>
      <div className='container pb-4 d-flex flex-column flex-md-row justify-content-between'>
        <div>
          {/* <img height="50px" src={logo} alt="Logo" />   */}
          <h4>QHALIMED</h4>
          <p className='mb-md-0'>Cuidamos tu salud con profesionalismo y calidez.</p>
        </div>
        <div className='redes-sociales d-flex gap-4 flex-wrap'>
          <div><i className="fa-brands fa-youtube"></i></div>
          <div><i className="fa-brands fa-facebook"></i></div>
          <div><i className="fa-brands fa-instagram"></i></div>

        </div>
      </div>  
      <div className='border-top pt-3 text-center'><p className='mb-0'>© 2025 QHALIMED. Todos los derechos reservados.</p></div>
    </div>
    </>
);
}

export default Footer;