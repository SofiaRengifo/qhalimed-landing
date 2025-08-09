import ServicioDetalle from "../../../components/ServicioDetalle";
import imagen from "../../../assets/img/servicios/pediatria.jpg";
function Pediatria() {
  return (
    <ServicioDetalle
      title="Pediatría"
      description="Cuidamos la salud de los más pequeños con calidez y dedicación"
      definicion="La Pediatría se especializa en el cuidado integral de la salud de niños y adolescentes, desde el nacimiento hasta los 17 años. En QHALIMED, nuestros pediatras brindan controles de crecimiento y desarrollo, vacunación, diagnóstico y tratamiento de enfermedades comunes e infecciones, así como orientación a padres sobre nutrición y prevención. Nuestro enfoque es acompañar cada etapa del crecimiento con atención personalizada y cercana."
      tittleConsulta="¿Cuándo acudir a consulta?"
      precontent="Recomendamos acudir a una consulta de pediatría si presentas:"
      consulta={[
        "Controles periódicos de crecimiento y desarrollo.",
        "Fiebre persistente, tos, dificultad para respirar o malestar general.",
        "Infecciones recurrentes o problemas digestivos.",
        "Asesoría en lactancia y alimentación saludable.",
        "Vacunación y revisión de calendario de inmunizaciones.",
      ]}
      imagen={imagen}
    />
  );
}

export default Pediatria;