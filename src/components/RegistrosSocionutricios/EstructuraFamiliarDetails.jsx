import styles from "./DetailsStyles.module.css";

export default function EstructuraFamiliarDetails({ estructuraFamiliar }){
    return (
      <div className={styles["dataContainer"]}>
        <h3>Estructura Familiar</h3>
        {estructuraFamiliar.DatosFamilia.map((integrante, index) => (
          <div key={index} className={styles["dataContainer"]}>
            <h4>Integrante {index + 1}</h4>
            <p>Nombre: {integrante.Nombre}</p>
            <p>Primer Apellido: {integrante.PrimerApellido}</p>
            <p>Segundo Apellido: {integrante.SegundoApellido}</p>
            <p>Sexo: {integrante.Sexo}</p>
            <p>Fecha de Nacimiento: {integrante.FechaNacimiento.toString()}</p>
            <p>Entidad de Nacimiento: {integrante.EntidadNacimiento}</p>
            <p>Tarjeta de Identidad: {integrante.TarjetaIdentidad}</p>
            <p>Estado Civil: {integrante.EstadoCivil}</p>
            <p>Parentesco: {integrante.Parentesco}</p>
          </div>
        ))}
      </div>
    );
  };