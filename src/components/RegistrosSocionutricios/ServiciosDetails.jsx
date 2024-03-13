import styles from "./DetailsStyles.module.css";

export default function ServiciosDetails({ servicios }){
    return (
      <div className={styles["dataContainer"]}>
        <h3>Servicios</h3>
        <p>Electricidad: {servicios.Electricidad}</p>
        <p>Drenaje: {servicios.Drenaje}</p>
        <p>Baño Excusado: {servicios.BanoExcusado}</p>
        <p>Combustible: {servicios.Combustible}</p>
        <p>Agua: {servicios.Agua}</p>
      </div>
    );
  };