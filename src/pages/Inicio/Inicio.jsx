// src/pages/Home.jsx
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState, useEffect } from 'react';

import portada2 from "../../assets/img/portada3.jpg";
import portada3 from "../../assets/img/portada2.jpg";
import videoPortada1 from "../../assets/img/portada1.mp4";


import iconoEco from '../../assets/img/ecografias.png';
import iconoEndo from '../../assets/img/endocrinologia.png';
import iconoTrauma from '../../assets/img/hueso.png';

import blog1 from '../../assets/img/blog/news1.jpg';
import blog2 from '../../assets/img/blog/news2.jpg';
import blog3 from '../../assets/img/blog/news3.jpg';

import "./Inicio.css"; 

function Inicio() {
  useEffect(() => {
    const getDirection = (e, el) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const top = y;
      const bottom = rect.height - y;
      const left = x;
      const right = rect.width - x;

      const min = Math.min(top, bottom, left, right);

      switch (min) {
        case top: return 'top';
        case bottom: return 'bottom';
        case left: return 'left';
        case right: return 'right';
        default: return 'top';
      }
    };

    const boxes = document.querySelectorAll(".service-box");

    boxes.forEach((box) => {
      box.addEventListener("mouseenter", (e) => {
        const dir = getDirection(e, box);
        box.setAttribute("data-direction-in", dir);
        box.classList.add("hovered");
      });

      box.addEventListener("mouseleave", (e) => {
        const dir = getDirection(e, box);
        box.setAttribute("data-direction-out", dir);
        box.classList.remove("hovered");
      });
    });

    // Limpieza
    return () => {
      boxes.forEach((box) => {
        box.removeEventListener("mouseenter", () => { });
        box.removeEventListener("mouseleave", () => { });
      });
    };
  }, []);



  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow next-arrow" onClick={onClick}>
        <i className="fa-solid fa-angle-right"></i>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow prev-arrow" onClick={onClick}>
        <i className="fa-solid fa-angle-left"></i>
      </div>
    );
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    afterChange: (index) => setCurrentSlide(index),
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    fade: true,
  };

  const slides = [
    {
      img: portada2,
      emfasis: "Nuestros especialistas",
      title: " tu mejor respaldo",    
      text: "En QHALIMED, estamos comprometidos para que tú y tus seres queridos estén siempre en las mejores manos.",
      align: "start", animation: "fade-right"
    },
    {
      img: portada2,
      emfasis: "Infórmate",
      title: " con nuestras publicaciones médicas",
      text: "Contamos con un equipo de médicos altamente capacitados en diversas especialidades, siempre enfocados en el bienestar de cada paciente.",
      align: "center", animation: "fade-up"
    },
    {
      img: portada3,
      emfasis: "Cuidamos",
      title: " a los que más amas",
      text: "Accede a consejos de salud, noticias y novedades de la clínica.",
      align: "end", animation: "fade-left"
    },
  ];
  const blogSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // celular
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div className="slider-slide" key={index}>
              {index === 0 ? (
                <div className="video-slide" style={{ position: "relative", height: "500px", overflow: "hidden" }}>
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      width: "100%",
                      height: "500px",
                      objectFit: "cover",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      zIndex: 1
                    }}
                    src={videoPortada1}
                  />
                  <div className={`container d-flex align-items-center justify-content-${slide.align}`} style={{ height: "500px", position: "relative", zIndex: 2 }}>
                    <div className={`text-content ${index === currentSlide ? `fade-in ${slide.animation}` : ""}`} style={{ width: "50%", textAlign: slide.align, color: "#fff" }}>
                      <h1 className="mb-3 slider-title"><span style={{ color: "#FE6F63" }}>{slide.emfasis}</span>{slide.title}</h1>
                      <p>{slide.text}</p>
                      <Link className="btn mt-3" to={slide.link}>Ver más</Link>
                    </div>
                  </div>
                </div>
              ) : (
              <div
                className="bg-slide"
                style={{
                  backgroundImage: `url(${slide.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center bottom",
                  height: "500px",
                }}
              >
                <div className={`container d-flex align-items-center justify-content-${slide.align}`} style={{ height: "500px" }}>
                  <div className={`text-content ${index === currentSlide ? `fade-in ${slide.animation}` : ""}`} style={{ width: "50%", textAlign: slide.align }}>
                    <h1 className="mb-3 slider-title"><span style={{ color: "#FE6F63" }}>{slide.emfasis}</span>{slide.title} </h1>
                    <p>{slide.text}</p>
                    <Link className="btn mt-3" to={slide.link}>Ver más</Link>
                  </div>
                </div>
              </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
      <div className="back-white">
        <div className="container">
          <div className="row py-6">
            <div className="col-lg-3 service-head">
              <h2><span style={{ color: "white" }}>Conoce nuestros</span> servicios</h2>
              <p className="text-light mt-3">
                Te ofrecemos una atención médica completa, con especialidades y procedimientos pensados para cuidar tu salud en cada etapa de la vida.
              </p>
              <Link to="/Servicios" onClick={() => window.scrollTo(0, 0)} className="btn light mt-3">Ver servicios <i className="ms-2 fa-solid fa-circle-right"></i></Link>
            </div>

            <div className="col-lg-9 service-content pt-4 pt-lg-0 ps-lg-3 pe-lg-0">
              <div className="service-grid h-100">
                <div className="service-box position-relative" data-aos="fade-left">
                  <i className="fa-solid fa-stethoscope bg-icon"></i>
                  <div className="content">
                    <h5>Medicina interna</h5>
                    <p className="mt-3 mb-0">Diagnóstico y tratamiento integral de enfermedades en adultos, con enfoque en la prevención y el seguimiento personalizado.</p>
                  </div>
                </div>
               
                <div className="service-box position-relative" data-aos="fade-left" data-aos-delay="300">
                  <img src={iconoEco} alt="ecografía" />
                  <div className="content">
                    <h5>Ecografías</h5>
                    <p className="mt-3 mb-0">Estudios ecográficos precisos y confiables, apoyando el diagnóstico médico con imágenes de alta calidad.</p>
                  </div>
                </div>
                <div className="service-box position-relative" data-aos="fade-left">
                   <img src={iconoTrauma} alt="traumatologia" />
                  <div className="content">
                    <h5>Traumatología</h5>
                    <p className="mt-3 mb-0">Atención integral para prevenir y tratar lesiones óseas, articulares y musculares, promoviendo la movilidad del paciente.</p>
                  </div>
                </div>
                <div className="service-box position-relative" data-aos="fade-left">
                  <i className="fa-solid fa-baby bg-icon"></i>
                  <div className="content">
                    <h5>Pediatría</h5>
                    <p className="mt-3 mb-0">Cuidado médico para niños y adolescentes, con un enfoque cálido y profesional en cada etapa de su desarrollo.</p>
                  </div>
                </div>
                <div className="service-box position-relative" data-aos="fade-left" data-aos-delay="300">
                  <img src={iconoEndo} alt="endocrinologia" />
                  <div className="content">
                    <h5>Endocrinología</h5>
                    <p className="mt-3 mb-0">Diagnóstico y manejo de trastornos hormonales como diabetes, tiroides y otros desequilibrios endocrinos.</p>
                  </div>
                </div>
                <div className="service-box position-relative" data-aos="fade-left" data-aos-delay="600">
                  <i className="fa-solid fa-venus bg-icon"></i>
                  <div className="content">
                    <h5>Ginecología</h5>
                    <p className="mt-3 mb-0">Atención especializada en la salud femenina, desde controles preventivos hasta tratamientos ginecológicos avanzados.</p>
                  </div>
                </div>
                
              </div>
            </div>


          </div>
        </div>
      </div>
      <div className="emergency" style={{ marginTop: "-60px" }}>
        <div className="container">
          <div className="col text-center py-6 " data-aos="fade-up">
            <h2>¿Necesitas ayuda?</h2>
            <h1 className="text-light text-shadow my-3">+51 992 654 854</h1>
            <p>Llámanos o escribenos para agendar tu cita.</p>
          </div>
        </div>
      </div>
      <div className="blog" style={{ marginTop: "-60px" }}>
        <div className="container py-6 pb-10">
          <div className="text-center justify-items-center" data-aos="fade-up">
            <h2>Consejos de <span style={{ color: "#fe6f63" }}>salud y novedades</span></h2>
            <p className="w-70 mt-3">Infórmate con artículos escritos por nuestros especialistas. Encuentra recomendaciones, noticias médicas y tips para cuidar tu salud y la de tu familia.</p>
          </div>
          <Slider {...blogSettings} className="blog-slider mt-5">
            <div className="blog-card">
              <div className="card-content">
                <img src={blog1} alt="" />
                <div className="categoria"><i className="fa-solid fa-newspaper"></i></div>
                <div className="blog-text">
                <h5>Cómo difieren los síntomas de un ataque cardíaco en hombres y mujeres</h5>
                <p>¿Existe igualdad de género en los infartos? La respuesta corta es no. Esto es lo que necesitas saber...</p>
                <a href="">Ver más <i className="fa-solid fa-angles-right"></i></a>
                </div>
              </div>
            </div>
            <div className="blog-card">
              <div className="card-content">
                <img src={blog2} alt="" />
                <div className="categoria"><i className="fa-solid fa-heart"></i></div>
                <div className="blog-text">
                <h5>Cómo difieren los síntomas de un ataque cardíaco en hombres y mujeres</h5>
                <p>¿Existe igualdad de género en los infartos? La respuesta corta es no. Esto es lo que necesitas saber...</p>
                <a href="">Ver más <i className="fa-solid fa-angles-right"></i></a>
                </div>
              </div>
            </div>
            <div className="blog-card">
              <div className="card-content">
                <img src={blog3} alt="" />
                <div className="categoria"><i className="fa-solid fa-newspaper"></i></div>
                <div className="blog-text">
                <h5>Cómo difieren los síntomas de un ataque cardíaco en hombres y mujeres</h5>
                <p>¿Existe igualdad de género en los infartos? La respuesta corta es no. Esto es lo que necesitas saber...</p>
                <a href="">Ver más <i className="fa-solid fa-angles-right"></i></a>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
  
    </div>
  );
}

export default Inicio;
