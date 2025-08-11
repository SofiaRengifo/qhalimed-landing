import "./Medicos.css";
import Banner from "../../components/Banner";
import portadaMedicos from "../../assets/img/portadas/medicos.jpg";
import medico1 from '../../assets/img/medicos/medico1.jpg';
import medico2 from '../../assets/img/medicos/medico2.jpg';
function Medicos() {
  return (
    <>
      <Banner title="Médicos" image={portadaMedicos} />
      <section>
        <div class="container py-6 pb-10">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-12 mb-4">
              <div class="custom-block custom-block-overlay">
                <a href="detail-page.html" class="custom-block-image-wrap">
                  <img src={medico1} class="custom-block-image img-fluid" alt=""/>
                  <div className="portafolio">
                      <p>Ver más <i class="fa-solid fa-circle-plus"></i></p>                    
                  </div>
                </a>

                <div class="custom-block-info custom-block-overlay-info">
                  <h5 class="mb-1">
                    <a href="listing-page.html">
                      Neurología
                    </a>
                  </h5>
                  <p class="mb-0">Dra. Gonzalez Olaechea Gallardo Camila</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12 mb-4 ">
              <div class="custom-block custom-block-overlay">
                <a href="detail-page.html" class="custom-block-image-wrap">
                  <img src={medico2} class="custom-block-image img-fluid" alt=""/>
                 <div className="portafolio">
                      <p>Ver más <i class="fa-solid fa-circle-plus"></i></p>                   
                  </div>
                </a>

                <div class="custom-block-info custom-block-overlay-info">
                  <h5 class="mb-1">
                    <a href="listing-page.html">
                      Traumatología
                    </a>
                  </h5>
                  <p class="mb-0">Dr. Pérez Lu Julio Enrique</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12 mb-4">
              <div class="custom-block custom-block-overlay">
                <a href="detail-page.html" class="custom-block-image-wrap">
                  <img src={medico1} class="custom-block-image img-fluid" alt=""/>
                 <div className="portafolio">
                      <p>Ver más <i class="fa-solid fa-circle-plus"></i></p>                      
                  </div>
                </a>

                <div class="custom-block-info custom-block-overlay-info">
                  <h5 class="mb-1">
                    <a href="listing-page.html">
                      Ginecología
                    </a>
                  </h5>
                  <p class="mb-0">Dra. Gonzalez Olaechea Gallardo Camila</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12 mb-4 ">
              <div class="custom-block custom-block-overlay">
                <a href="detail-page.html" class="custom-block-image-wrap">
                  <img src={medico2} class="custom-block-image img-fluid" alt=""/>
                 <div className="portafolio">
                      <p>Ver más <i class="fa-solid fa-circle-plus"></i></p>      
                  </div>
                </a>

                <div class="custom-block-info custom-block-overlay-info">
                  <h5 class="mb-1">
                    <a href="listing-page.html">
                      Pediatría
                    </a>
                  </h5>
                  <p class="mb-0">Dr. Pérez Lu Julio Enrique</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12 mb-4 ">
              <div class="custom-block custom-block-overlay">
                <a href="detail-page.html" class="custom-block-image-wrap">
                  <img src={medico1} class="custom-block-image img-fluid" alt=""/>
                  <div className="portafolio">
                      <p>Ver más <i class="fa-solid fa-circle-plus"></i></p>                    
                  </div>
                </a>

                <div class="custom-block-info custom-block-overlay-info">
                  <h5 class="mb-1">
                    <a href="listing-page.html">
                      Neurología
                    </a>
                  </h5>
                  <p class="mb-0">Dra. Gonzalez Olaechea Gallardo Camila</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12 mb-4">
              <div class="custom-block custom-block-overlay">
                <a href="detail-page.html" class="custom-block-image-wrap">
                  <img src={medico2} class="custom-block-image img-fluid" alt=""/>
                 <div className="portafolio">
                      <p>Ver más <i class="fa-solid fa-circle-plus"></i></p>                   
                  </div>
                </a>

                <div class="custom-block-info custom-block-overlay-info">
                  <h5 class="mb-1">
                    <a href="listing-page.html">
                      Traumatología
                    </a>
                  </h5>
                  <p class="mb-0">Dr. Pérez Lu Julio Enrique</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12 mb-4">
              <div class="custom-block custom-block-overlay">
                <a href="detail-page.html" class="custom-block-image-wrap">
                  <img src={medico1} class="custom-block-image img-fluid" alt=""/>
                 <div className="portafolio">
                      <p>Ver más <i class="fa-solid fa-circle-plus"></i></p>                      
                  </div>
                </a>

                <div class="custom-block-info custom-block-overlay-info">
                  <h5 class="mb-1">
                    <a href="listing-page.html">
                      Ginecología
                    </a>
                  </h5>
                  <p class="mb-0">Dra. Gonzalez Olaechea Gallardo Camila</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12 mb-4">
              <div class="custom-block custom-block-overlay">
                <a href="detail-page.html" class="custom-block-image-wrap">
                  <img src={medico2} class="custom-block-image img-fluid" alt=""/>
                 <div className="portafolio">
                      <p>Ver más <i class="fa-solid fa-circle-plus"></i></p>      
                  </div>
                </a>

                <div class="custom-block-info custom-block-overlay-info">
                  <h5 class="mb-1">
                    <a href="listing-page.html">
                      Pediatría
                    </a>
                  </h5>
                  <p class="mb-0">Dr. Pérez Lu Julio Enrique</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12 mb-4">
              <div class="custom-block custom-block-overlay">
                <a href="detail-page.html" class="custom-block-image-wrap">
                  <img src={medico1} class="custom-block-image img-fluid" alt=""/>
                  <div className="portafolio">
                      <p>Ver más <i class="fa-solid fa-circle-plus"></i></p>                    
                  </div>
                </a>

                <div class="custom-block-info custom-block-overlay-info">
                  <h5 class="mb-1">
                    <a href="listing-page.html">
                      Neurología
                    </a>
                  </h5>
                  <p class="mb-0">Dra. Gonzalez Olaechea Gallardo Camila</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12 mb-4">
              <div class="custom-block custom-block-overlay">
                <a href="detail-page.html" class="custom-block-image-wrap">
                  <img src={medico2} class="custom-block-image img-fluid" alt=""/>
                 <div className="portafolio">
                      <p>Ver más <i class="fa-solid fa-circle-plus"></i></p>                   
                  </div>
                </a>

                <div class="custom-block-info custom-block-overlay-info">
                  <h5 class="mb-1">
                    <a href="listing-page.html">
                      Traumatología
                    </a>
                  </h5>
                  <p class="mb-0">Dr. Pérez Lu Julio Enrique</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12 mb-4">
              <div class="custom-block custom-block-overlay">
                <a href="detail-page.html" class="custom-block-image-wrap">
                  <img src={medico1} class="custom-block-image img-fluid" alt=""/>
                 <div className="portafolio">
                      <p>Ver más <i class="fa-solid fa-circle-plus"></i></p>                      
                  </div>
                </a>

                <div class="custom-block-info custom-block-overlay-info">
                  <h5 class="mb-1">
                    <a href="listing-page.html">
                      Ginecología
                    </a>
                  </h5>
                  <p class="mb-0">Dra. Gonzalez Olaechea Gallardo Camila</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12 mb-4">
              <div class="custom-block custom-block-overlay">
                <a href="detail-page.html" class="custom-block-image-wrap">
                  <img src={medico2} class="custom-block-image img-fluid" alt=""/>
                 <div className="portafolio">
                      <p>Ver más <i class="fa-solid fa-circle-plus"></i></p>      
                  </div>
                </a>

                <div class="custom-block-info custom-block-overlay-info">
                  <h5 class="mb-1">
                    <a href="listing-page.html">
                      Pediatría
                    </a>
                  </h5>
                  <p class="mb-0">Dr. Pérez Lu Julio Enrique</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Medicos;
