import ServicioDetalle from "../../../components/ServicioDetalle";
import imagen from "../../../assets/img/servicios/neurologia.jpg";
function Neurologia() {
  return (
    <ServicioDetalle
      title="Neurología"
      description="Cuidamos la salud de tu sistema nervioso"
      definicion="La Neurología se encarga del diagnóstico y tratamiento de enfermedades del cerebro, médula espinal, nervios y músculos. En QHALIMED ofrecemos atención para casos como migrañas, epilepsia, accidentes cerebrovasculares, enfermedades neurodegenerativas y trastornos del movimiento. Nuestros especialistas brindan un enfoque integral que incluye evaluación clínica, estudios diagnósticos y tratamiento personalizado."
      tittleConsulta="¿Cuándo acudir a consulta?"
      precontent="Recomendamos acudir a una consulta de neurología si presentas:"
      consulta={[
        "Dolores de cabeza intensos o recurrentes.",
        "Mareos, pérdida de equilibrio o coordinación.",
        "Convulsiones o pérdida de conciencia.",
        "Alteraciones de memoria o del lenguaje.",
        "Adormecimiento o debilidad en alguna parte del cuerpo.",
      ]}
      imagen={imagen}
    />
  );
}

export default Neurologia;