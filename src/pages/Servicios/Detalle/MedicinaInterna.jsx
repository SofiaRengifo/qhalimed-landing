import ServicioDetalle from "../../../components/ServicioDetalle";
import imagen from "../../../assets/img/servicios/MedicinaInterna.jpg";
function MedicinaInterna() {
  return (
    <ServicioDetalle
      title="Medicina Interna"
      description="Cuidado integral para adultos con un enfoque clínico especializado"
      definicion="La Medicina Interna es una especialidad médica que se enfoca en la prevención, diagnóstico y tratamiento de enfermedades en pacientes adultos. En QHALIMED, nuestros médicos internistas evalúan de forma integral al paciente, considerando múltiples sistemas del cuerpo, especialmente en casos complejos o con enfermedades crónicas como diabetes, hipertensión, enfermedades cardiovasculares, respiratorias, digestivas, entre otras. Es la puerta de entrada para una atención clínica completa y coordinada."
      tittleConsulta="¿Cuándo acudir a consulta?"
      precontent="Recomendamos acudir a una consulta de Medicina Interna si presentas:"
      consulta={[
        "Síntomas generales como fatiga, fiebre prolongada, dolor torácico o abdominal.",
        "Enfermedades crónicas como hipertensión, diabetes, colesterol alto.",
        "Problemas multisistémicos o varios síntomas sin causa clara.",
        "Seguimiento de tratamientos prolongados o evaluación médica general.",
        "Si no sabes a qué especialista acudir, el médico internista puede orientarte y derivarte si es necesario.",
      ]}
      imagen={imagen}
    />
  );
}

export default MedicinaInterna;