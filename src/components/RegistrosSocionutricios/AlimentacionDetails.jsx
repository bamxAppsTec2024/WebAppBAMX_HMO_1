import styles from "./DetailsStyles.module.css";


export default function AlimentacionDetails({ alimentacion }){
    return (
      <div className={styles["dataContainer"]}>
        <h3>Alimentación</h3>
        <h4>Para Mayores de 18</h4>
        <p>Poca Variedad: {alimentacion.PocaVariedad}</p>
        <p>Dejó de Comer: {alimentacion.DejoComer}</p>
        <p>Comió Menos: {alimentacion.ComerMenos}</p>
        <p>Sin Comida: {alimentacion.SinComida}</p>
        <p>Hambre pero no Comió: {alimentacion.HambreNoComio}</p>
        <p>Comió una Vez: {alimentacion.ComerUnaVez}</p>
  
        <h4>Para Menores de 18</h4>
        <p>Poca Variedad (Menor): {alimentacion.MenorPocaVariedad}</p>
        <p>Comió Menos (Menor): {alimentacion.MenorComioMenos}</p>
        <p>Disminuyó Cantidad (Menor): {alimentacion.DisminuirCantidadMenor}</p>
        <p>Con Hambre pero no Comió (Menor): {alimentacion.MenorConHambreNoComio}</p>
        <p>Durmió con Hambre (Menor): {alimentacion.MenorDurmioConHambre}</p>
        <p>Comió una Vez (Menor): {alimentacion.MenorComioUnaVez}</p>
      </div>
    );
  };