import ServicioDetalle from "../../../components/ServicioDetalle";
import imagen from "../../../assets/img/servicios/ginecologia.jpg";
function Ginecologia() {
  return (
    <ServicioDetalle
      title="Ginecología"
      description="Salud femenina en todas las etapas de tu vida"
      definicion="La Ginecología se encarga del diagnóstico, tratamiento y prevención de enfermedades del sistema reproductor femenino. En QHALIMED ofrecemos controles ginecológicos, planificación familiar, chequeos preventivos, atención en salud sexual y reproductiva, así como manejo de trastornos hormonales y problemas ginecológicos. Nuestro equipo brinda atención discreta, respetuosa y basada en evidencia médica."
      tittleConsulta="¿Cuándo acudir a consulta?"
      precontent="Recomendamos acudir a una consulta de ginecología si presentas:"
      consulta={[
        "Controles ginecológicos preventivos anuales.",
        "Alteraciones menstruales o dolor pélvico.",
        "Planificación familiar y anticoncepción.",
        "Evaluación de infecciones o síntomas ginecológicos.",
        "Seguimiento durante el embarazo en conjunto con obstetricia.",
      ]}
      imagen={imagen}
    />
  );
}

export default Ginecologia;