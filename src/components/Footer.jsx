import { Link } from 'react-router-dom';
import logo from '/src/assets/img/LOGO QHALIMED.png';
function Footer() {
  return (
    <>
      <div className='position-relative'>
        <div className="container absolute">
          <div className="row contact justify-content-center text-white p-5">
            <div className="col-lg-4">
              <div className="media">
                <div className="media-body ml-3"><a className="text-light fs-1 font-weight-semi-bold mb-0" href="tel:12345678910"><h4>+(123) 456 78910</h4></a>
                  <p className="fs--1 mb-0">¿Tienes alguna pregunta? Llámanos ahora</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-3 mt-lg-0">
              <div className="media">
                <div className="media-body ml-3"><a className="text-white fs-1 font-weight-semi-bold mb-0" href="mailto:help@qhalimed.com"><h4>ayuda@qhalimed.com</h4></a>
                  <p className="fs--1 mb-0">¿Necesitas ayuda? Escríbenos.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-3 mt-lg-0">
              <div className="media">
                <div className="media-body ml-3">
                  <h4>Lun – Sáb 07:00 – 21:00</h4>
                  <p className="fs--1 mb-0">Horario de atención</p>
                </div>
              </div>
            </div>
          </div>
        </div>


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
      </div>
    </>
  );
}

export default Footer;