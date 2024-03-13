import styles from "./DetailsStyles.module.css";


export default function EscolaridadDetails({ escolaridad }){
    return (
      <div className={styles["dataContainer"]}>
        <h3>Escolaridad</h3>
        {escolaridad.Escolaridades.map((integrante, index) => (
          <div key={index} className={styles["dataContainer"]}>
            <h4>Escolaridad de Integrante {index + 1}</h4>
            <p>Escolaridad: {integrante.Escolaridad}</p>
            <p>Grado: {integrante.Grado}</p>
            <p>Asiste a la Escuela: {integrante.AsisteEscuela}</p>
            <p>Ocupación: {integrante.Ocupacion}</p>
            <p>Tipo de Empleo: {integrante.TipoEmpleo}</p>
            <p>Prestaciones Laborales: {integrante.PrestacionesLaborales.join(', ')}</p>
            <p>Jubilación/Pensión: {integrante.JubilacionPension}</p>
            <p>Derecho a la Seguridad Social: {integrante.DerechoHabiencia}</p>
            <p>Motivo del Derecho a la Seguridad Social: {integrante.MotivoDerechoHabiencia}</p>
          </div>
        ))}
      </div>
    );
  };