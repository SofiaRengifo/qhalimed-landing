import ServicioDetalle from "../../../components/ServicioDetalle";
import imagen from "../../../assets/img/servicios/ecografia.jpg";
function Ecografias() {
  return (
    <ServicioDetalle
      title="Ecografías"
      description="Imágenes precisas para un diagnóstico confiable."
      definicion="La ecografía es un estudio de diagnóstico por imágenes que utiliza ultrasonido para observar en tiempo real órganos, tejidos y estructuras internas del cuerpo. En QHALIMED realizamos ecografías abdominales, pélvicas, obstétricas, mamarias, de partes blandas y especializadas. Es un procedimiento seguro, indoloro y no invasivo que ayuda a detectar y monitorear diversas condiciones médicas."
      tittleConsulta="Tipos de ecografías"
      precontent="Recomendaciones según el tipo de ecografía que solicites:"
      consulta={[
        "Ecografía abdominal: acudir en ayunas.",
        "Ecografía pélvica: tomar agua y no orinar previamente.",
        "Ecografía obstétrica (embarazo)",
        "Ecografía mamaria",
        "Ecografía transvaginal",
        "Ecografía de partes blandas",
        "Otras especializadas",
      ]}
      imagen={imagen}
    />
  );
}

export default Ecografias;