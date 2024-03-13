import DatosGeneralesDetails from "../../components/RegistrosSocionutricios/DatosGeneralesDetails";
import ServiciosDetails from "../../components/RegistrosSocionutricios/ServiciosDetails";
import EstructuraFamiliarDetails from "../../components/RegistrosSocionutricios/EstructuraFamiliarDetails";
import EscolaridadDetails from "../../components/RegistrosSocionutricios/EscolaridadDetails";
import SaludDetails from "../../components/RegistrosSocionutricios/SaludDetails";
import ViviendaEquipamientoDetails from "../../components/RegistrosSocionutricios/ViviendaEquipamientoDetails";
import CondicionesEconomicasDetails from "../../components/RegistrosSocionutricios/CondicionesEconomicasDetails";
import AlimentacionDetails from "../../components/RegistrosSocionutricios/AlimentacionDetails";
import ResolucionDetails from "../../components/RegistrosSocionutricios/ResolucionDetails";

import styles from "./Registros.module.css"

export default function Details({ doc, returnFunc }) {
	return (
		<div>
			<div>
				<button onClick={() => returnFunc()}>Regresar al listado</button>
			</div>
			<div className={styles["detailsContainer"]}>
				{doc.DatosGenerales !== undefined && (
					<DatosGeneralesDetails datosGenerales={doc.DatosGenerales} />
				)}
				{doc.Servicios !== undefined && (
					<ServiciosDetails servicios={doc.Servicios} />
				)}
				{doc.EstructuraFamiliar !== undefined && (
					<EstructuraFamiliarDetails
						estructuraFamiliar={doc.EstructuraFamiliar}
					/>
				)}
				{doc.Escolaridad !== undefined && (
					<EscolaridadDetails escolaridad={doc.Escolaridad} />
				)}
				{doc.Salud !== undefined && <SaludDetails salud={doc.Salud} />}
				{doc.ViviendaEquipamiento !== undefined && (
					<ViviendaEquipamientoDetails
						viviendaEquipamiento={doc.ViviendaEquipamiento}
					/>
				)}
				{doc.CondicionesEconomicas !== undefined && (
					<CondicionesEconomicasDetails
						condicionesEconomicas={doc.CondicionesEconomicas}
					/>
				)}
				{doc.Alimentacion !== undefined && (
					<AlimentacionDetails alimentacion={doc.Alimentacion} />
				)}
				{doc.Resolucion !== undefined && (
					<ResolucionDetails resolucion={doc.Resolucion} />
				)}

                {doc.Observaciones !== undefined && (
					<div>
                        <h1>Observaciones</h1>

                        <p>{doc.Observaciones}</p>
                    </div>
				)}
			</div>
		</div>
	);
}
