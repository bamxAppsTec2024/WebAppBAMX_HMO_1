import styles from "./DetailsStyles.module.css";

export default function ResolucionDetails({ resolucion }){
    return (
        <div className={styles["dataContainer"]}> 
        <h3>Resolución</h3>
        <h4>Evaluación</h4>
        <p>Puntaje: {resolucion.Evaluacion.Puntaje}</p>
        <p>Inseguridad Alimentaria: {resolucion.Evaluacion.InseguridadAlimentaria}</p>
        <p>Indicador Servicio Básico: {resolucion.Evaluacion.IndicadorServicioBasico}</p>
        <p>Indicador Rezago Educativo: {resolucion.Evaluacion.IndicadorRezagoEducativo}</p>
        <p>Indicador Calidad Vivienda: {resolucion.Evaluacion.IndicadorCalidadVivienda}</p>
        <p>Indicador Acceso Salud: {resolucion.Evaluacion.IndicadorAccesoSalud}</p>
        <p>Indicador Seguridad Social: {resolucion.Evaluacion.IndicadorSeguridadSocial}</p>
        <p>Indicador Línea Bienestar: {resolucion.Evaluacion.IndicadorLineaBienestar}</p>
        <p>Clasificación Pobreza: {resolucion.Evaluacion.ClasificacionPobreza}</p>
        
        <h4>Resolución</h4>
        <p>Tipo: {resolucion.Tipo}</p>
        <p>Frecuencia: {resolucion.Frecuencia}</p>
        <p>Duración: {resolucion.Duracion}</p>
        
        {/* Optional Questions */}
        <p>Mayores de Doce Trabajan: {resolucion.MayoresDoceTrabajan !== null ? resolucion.MayoresDoceTrabajan : "N/A"}</p>
        <p>Personas Trabajan Por Su Cuenta: {resolucion.PersonasTrabajanPorSuCuenta !== null ? resolucion.PersonasTrabajanPorSuCuenta : "N/A"}</p>
        <p>Personas de Doce a Quince Trabajaron Este Mes: {resolucion.PersonasDoceQuinceTrabajaronEsteMes !== null ? resolucion.PersonasDoceQuinceTrabajaronEsteMes : "N/A"}</p>
        <p>Personas de Dieciséis a Dieciocho Trabajaron: {resolucion.PersonasDieciseisDiesiochoTrabajaron !== null ? resolucion.PersonasDieciseisDiesiochoTrabajaron : "N/A"}</p>
        <p>Sistema Recolección Basura: {resolucion.SistemaRecoleccionBasura !== null ? resolucion.SistemaRecoleccionBasura : "N/A"}</p>
      </div>
    );
  };