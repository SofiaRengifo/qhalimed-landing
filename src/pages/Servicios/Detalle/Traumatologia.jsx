import ServicioDetalle from "../../../components/ServicioDetalle";
import imagen from "../../../assets/img/servicios/traumatologia.png";
function Traumatologia() {
  return (
    <ServicioDetalle
      title="Traumatología"
      description="Recupera tu movilidad y calidad de vida"
      definicion="La Traumatología se especializa en el diagnóstico y tratamiento de lesiones del sistema musculoesquelético: huesos, articulaciones, músculos, tendones y ligamentos. En QHALIMED tratamos desde lesiones deportivas y fracturas hasta enfermedades crónicas como la artrosis. Nuestro objetivo es recuperar la movilidad y funcionalidad del paciente, combinando tratamiento médico, rehabilitación y prevención."
      tittleConsulta="¿Cuándo acudir a consulta?"
      precontent="Recomendamos acudir a una consulta de traumatología si presentas:"
      consulta={[
        "Dolor persistente en articulaciones o músculos.",
        "Lesiones deportivas o laborales.",
        "Fracturas, esguinces o luxaciones.",
        "Dificultad para moverse o pérdida de fuerza.",
        "Inflamación o deformidad en articulaciones.",
      ]}
      imagen={imagen}
    />
  );
}

export default Traumatologia;