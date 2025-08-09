function ServicioDetalle({ title, description, definicion, consulta, imagen, tittleConsulta, precontent }) {
  return (
    <section className="servicesDetails">
      <div className="container position-relative">

        <div className="agenda text-center">
          <h4 className="text-light">Agenda tu cita hoy</h4>
          <p className="text-light mt-3">Solicita tu cita para <br />{title}</p>
          <a className="btn light mt-2">Agendar <i className="ms-2 fa-solid fa-circle-right"></i></a>
        </div>
        <div className="row align-items-center text-center justify-content-end">
          <div className="col-12 py-6 pb-5">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <div className="col-md-6">
            <div className="imagen">
              {imagen && <img src={imagen} alt={title} />}
            </div>
          </div>
          <div className="col-md-6 definicion">
            <h2>¿En qué consiste este servicio?</h2>
            <p className="mt-4">{definicion}</p>
          </div>
        </div>
      </div>
      <div className="consulta">
        <div className="container">
          <div className="row pb-10 justify-content-end">
            <div className="col-lg-6">
              <h2>{tittleConsulta}</h2>
              <p className="mt-4">{precontent}</p>
              <ul className="list-unstyled">
                {consulta.map((item, index) => (
                  <li key={index} className="mb-2 custom-li">
                    <i className="fa-solid fa-circle-check me-2"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicioDetalle;