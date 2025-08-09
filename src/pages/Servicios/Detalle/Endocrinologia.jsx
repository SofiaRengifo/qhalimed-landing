import ServicioDetalle from "../../../components/ServicioDetalle";
import imagen from "../../../assets/img/servicios/endocrinologia.jpg";
function Endocrinologia() {
  return (
    <ServicioDetalle
      title="Endocrinología"
      description="Equilibrio hormonal para una vida saludable"
      definicion="La Endocrinología estudia y trata los trastornos hormonales y metabólicos que afectan glándulas como la tiroides, páncreas, glándulas suprarrenales y hipófisis. En QHALIMED diagnosticamos y manejamos enfermedades como diabetes, hipotiroidismo, hipertiroidismo, osteoporosis, problemas de crecimiento y desórdenes hormonales complejos. Nuestro objetivo es mejorar la calidad de vida de los pacientes mediante un control preciso y seguimiento continuo."
      tittleConsulta="¿Cuándo acudir a consulta?"
      precontent="Recomendamos acudir a una consulta de endocrinología si presentas:"
      consulta={[
        "Diagnóstico o seguimiento de diabetes.",
        "Síntomas como cansancio extremo, cambios de peso sin causa aparente o alteraciones en la piel y el cabello.",
        "Problemas de crecimiento o desarrollo.",
        "Evaluación y tratamiento de enfermedades tiroideas.",
        "Alteraciones hormonales en la menopausia o adolescencia.",
      ]}
      imagen={imagen}
    />
  );
}

export default Endocrinologia;