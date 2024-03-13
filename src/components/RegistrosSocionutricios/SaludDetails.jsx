import styles from "./DetailsStyles.module.css";

export default function SaludDetails({ salud }){
    return (
      <div className={styles["dataContainer"]}>
        <h3>Salud</h3>
        {salud.SaludIntegrante.map((integrante, index) => (
          <div key={index} className={styles["dataContainer"]}>
            <h4>Salud del Integrante {index + 1}</h4>
            <p>Discapacidades: {integrante.Discapacidades}</p>
            <p>Condiciones de Salud: {integrante.CondicionesSalud}</p>
            <p>Adicciones: {integrante.Adicciones}</p>
            <p>Peso: {integrante.Peso}</p>
            <p>Talla: {integrante.Talla}</p>
            <p>IMC: {integrante.IMC}</p>
            <p>Pueblo Indígena: {integrante.PuebloIndigena}</p>
          </div>
        ))}
      </div>
    );
  };
  