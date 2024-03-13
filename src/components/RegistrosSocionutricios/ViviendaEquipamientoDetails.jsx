import styles from "./DetailsStyles.module.css";

export default function ViviendaEquipamientoDetails({ viviendaEquipamiento }){
    return (
      <div className={styles["dataContainer"]}>
        <h3>Vivienda y Equipamiento</h3>
        <p>Casa: {viviendaEquipamiento.Casa}</p>
        <p>Piso: {viviendaEquipamiento.Piso}</p>
        <p>Tenencia: {viviendaEquipamiento.Tenencia}</p>
        <p>Techo: {viviendaEquipamiento.Techo}</p>
        <p>Muros: {viviendaEquipamiento.Muros}</p>
        <p>No. de Cuartos: {viviendaEquipamiento.Caracteristicas.NoCuartos}</p>
        <p>No. de Cuartos para Dormir: {viviendaEquipamiento.Caracteristicas.CuartosDormir}</p>
        <p>Cocina Separada: {viviendaEquipamiento.Caracteristicas.CocinaSeparada}</p>
        <p>Baño Exclusivo: {viviendaEquipamiento.Caracteristicas.BanoExclusivo}</p>
        {/* Render Equipamiento properties */}
      </div>
    );
  };