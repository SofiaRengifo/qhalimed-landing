import "./Conocenos.css";
import historiaimg from "../../assets/img/historiaimg.png";
function About() {
  return (
    <>
      <div>
        <div className="bg-head">
          <div className="container">
            <h1 className="py-4">Nosotros</h1>
          </div>
        </div>
        <div className="container py-6 text-center">
          <p>En QHALIMED, somos una clínica comprometida con el cuidado integral de la salud, brindando atención médica personalizada, oportuna y de calidad. Nuestro propósito es acompañar a cada paciente en su camino hacia el bienestar, ofreciendo un servicio humano que combina conocimiento médico, tecnología actualizada y un trato cálido.</p>
        </div>
        <div className="historia">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 align-content-end">
                <img src={historiaimg} alt="" style={{ width: '90%', height: 'auto' }} />
              </div>
              <div className="col-lg-7 d-flex align-content-between flex-wrap">
                <div className="d-none d-sm-flex caracteristicas">
                  <div><i className="fa-solid fa-heart-pulse fa-2xl"></i><h5>Diagnóstico preciso</h5></div>
                  <div><i className="fa-solid fa-user-doctor fa-2xl"></i><h5>Seguimiento continuo</h5></div>
                  <div className="d-none d-xl-block"><i className="fa-solid fa-laptop-medical fa-2xl"></i><h5>Innovación constante</h5></div>
                  <div><i className="fa-solid fa-hospital fa-2xl"></i><h5>Resultados confiables</h5></div>
                </div>
                <div className="content pt-5 py-6">
                  <h2 className="mb-4">Historia</h2>
                  <p>QHALIMED nace del compromiso con la salud y la convicción de que cada paciente merece una atención cercana, innovadora y digna. Iniciamos este camino con la visión de transformar la forma en que se brinda el cuidado médico, integrando tecnología, calidez humana y un enfoque personalizado en cada diagnóstico y tratamiento. Desde nuestros inicios, trabajamos con pasión para que más personas accedan a servicios de salud confiables, oportunos y centrados en su bienestar.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#EDF2F1" }}>
          <div className="container">
            <div className="row py-6">
              <div className="col-md-6 mision">
                <h2>Misión</h2>
                <div className="mision-content">
                  <p>Ofrecer atención médica integral y confiable, uniendo innovación tecnológica, diagnóstico preciso y un trato humano cercano, para cuidar la salud y mejorar la calidad de vida de nuestros pacientes, tanto de forma presencial como mediante telemedicina.</p>
                </div>
              </div>
              <div className="col-md-6 mision">
                <h2>Visión</h2>
                <div className="mision-content">                 
                  <p>Consolidarnos como la clínica líder en atención ambulatoria y diagnóstico médico en la región, reconocida por transformar la experiencia del paciente a través de la empatía, la innovación y la excelencia en cada servicio.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-6">
          <div className="text-center justify-items-center" data-aos="fade-up">
            <h2>Nuestros <span style={{ color: "#fe6f63" }}>valores</span></h2>
         
          </div>
          <div className="valores mt-4">
            <p><span><i class="fa-solid fa-circle-check me-2"></i>Humanidad: </span>Ponemos a la persona en el centro de todo lo que hacemos, con respeto, escucha activa y calidez en cada consulta.</p>
            <p><span><i class="fa-solid fa-circle-check me-2"></i>Innovación: </span>Ponemos a la persona en el centro de todo lo que hacemos, con respeto, escucha activa y calidez en cada consulta.</p>
            <p><span><i class="fa-solid fa-circle-check me-2"></i>Confianza: </span>Ponemos a la persona en el centro de todo lo que hacemos, con respeto, escucha activa y calidez en cada consulta.</p>
            <p><span><i class="fa-solid fa-circle-check me-2"></i>Excelencia médica: </span>Nuestro equipo está en constante capacitación y mejora para ofrecer servicios seguros, actualizados y eficaces.</p>
            <p><span><i class="fa-solid fa-circle-check me-2"></i>Accesibilidad: </span>Acercamos la salud a más personas mediante modelos flexibles de atención y canales digitales amigables.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
