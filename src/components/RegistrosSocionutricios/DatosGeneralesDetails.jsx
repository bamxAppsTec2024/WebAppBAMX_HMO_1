import styles from "./DetailsStyles.module.css";

export default function DatosGeneralesDetails({ datosGenerales }){
    return (
      <div className={styles["dataContainer"]}>
        <h3>Datos Generales</h3>
        <p>Comunidad: {datosGenerales.Comunidad}</p>
        <p>Grupo: {datosGenerales.Grupo}</p>
        <p>Fecha: {datosGenerales.Fecha.toDate().toLocaleDateString("es-Es")}</p>
        <p>Estado: {datosGenerales.Estado}</p>
        <p>Municipio: {datosGenerales.Municipio}</p>
        <p>Asentamiento: {datosGenerales.Asentamiento}</p>
        <p>Tipo de Asentamiento: {datosGenerales.TipoAsentamiento}</p>
        <p>Nombre de Asentamiento: {datosGenerales.NombreAsentamiento}</p>
        <p>Tipo de Vialidad: {datosGenerales.TipoVialidad}</p>
        <p>Nombre de Vialidad: {datosGenerales.NombreVialidad}</p>
        <p>No. Exterior: {datosGenerales.NoExterior}</p>
        <p>No. Interior: {datosGenerales.NoInterior}</p>
        <p>CP: {datosGenerales.CP}</p>
        <p>Entre Calles: {datosGenerales.EntreCalles}</p>
        <p>Descripción: {datosGenerales.Descripcion}</p>
        <p>Teléfono: {datosGenerales.Telefono}</p>
      </div>
    );
  };