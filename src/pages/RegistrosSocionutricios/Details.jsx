import DatosGeneralesDetails from "../../components/RegistrosSocionutricios/DatosGeneralesDetails";
import ServiciosDetails from "../../components/RegistrosSocionutricios/ServiciosDetails";
import EstructuraFamiliarDetails from "../../components/RegistrosSocionutricios/EstructuraFamiliarDetails";
import EscolaridadDetails from "../../components/RegistrosSocionutricios/EscolaridadDetails";
import SaludDetails from "../../components/RegistrosSocionutricios/SaludDetails";
import ViviendaEquipamientoDetails from "../../components/RegistrosSocionutricios/ViviendaEquipamientoDetails";
import CondicionesEconomicasDetails from "../../components/RegistrosSocionutricios/CondicionesEconomicasDetails";
import AlimentacionDetails from "../../components/RegistrosSocionutricios/AlimentacionDetails";
import ResolucionDetails from "../../components/RegistrosSocionutricios/ResolucionDetails";

import styles from "./Registros.module.css";

export default function Details({ doc, returnFunc }) {
	return (
		<div>
			<div>
			</div>
			<div className={styles["detailsContainer"]}>
				<button onClick={() => returnFunc()} className="btn btn-primary w-25">
					Regresar al listado
				</button>
				<nav>
					<div class="nav nav-tabs" id="nav-tab" role="tablist">
						<button
							class="nav-link active"
							id="nav-datos-generales-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-datos-generales"
							type="button"
							role="tab"
							aria-controls="nav-home"
							aria-selected="true"
						>
							Datos Generales
						</button>
						<button
							class="nav-link"
							id="nav-servicios-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-servicios"
							type="button"
							role="tab"
							aria-controls="nav-profile"
							aria-selected="false"
						>
							Servicios
						</button>
						<button
							class="nav-link"
							id="nav-estructura-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-estructura"
							type="button"
							role="tab"
							aria-controls="nav-profile"
							aria-selected="false"
						>
							Estructura Familiar
						</button>
						<button
							class="nav-link"
							id="nav-escolaridad-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-escolaridad"
							type="button"
							role="tab"
							aria-controls="nav-profile"
							aria-selected="false"
						>
							Escolaridad
						</button>
						<button
							class="nav-link"
							id="nav-salud-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-salud"
							type="button"
							role="tab"
							aria-controls="nav-profile"
							aria-selected="false"
						>
							Salud
						</button>
						<button
							class="nav-link"
							id="nav-vivienda-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-vivienda"
							type="button"
							role="tab"
							aria-controls="nav-profile"
							aria-selected="false"
						>
							Vivienda y Equipamiento
						</button>
						<button
							class="nav-link"
							id="nav-economicas-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-economicas"
							type="button"
							role="tab"
							aria-controls="nav-profile"
							aria-selected="false"
						>
							Condiciones Economicas
						</button>
						<button
							class="nav-link"
							id="nav-alimentacion-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-alimentacion"
							type="button"
							role="tab"
							aria-controls="nav-profile"
							aria-selected="false"
						>
							Alimentacion
						</button>
						<button
							class="nav-link"
							id="nav-resolucion-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-resolucion"
							type="button"
							role="tab"
							aria-controls="nav-profile"
							aria-selected="false"
						>
							Resolucion
						</button>
						<button
							class="nav-link"
							id="nav-observaciones-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-observaciones"
							type="button"
							role="tab"
							aria-controls="nav-profile"
							aria-selected="false"
						>
							Observaciones
						</button>
					</div>
				</nav>

				<div class="tab-content" id="nav-tabContent">
					<div
						class="tab-pane fade show active"
						id="nav-datos-generales"
						role="tabpanel"
						aria-labelledby="nav-datos-generales-tab"
						tabindex="0"
					>
						{doc.DatosGenerales !== undefined && (
							<DatosGeneralesDetails datosGenerales={doc.DatosGenerales} />
						)}
					</div>
					<div
						class="tab-pane fade"
						id="nav-servicios"
						role="tabpanel"
						aria-labelledby="nav-servicios-tab"
						tabindex="0"
					>
						{doc.Servicios !== undefined && (
							<ServiciosDetails servicios={doc.Servicios} />
						)}
					</div>
					<div
						class="tab-pane fade"
						id="nav-estructura"
						role="tabpanel"
						aria-labelledby="nav-estructura-tab"
						tabindex="0"
					>
						{doc.EstructuraFamiliar !== undefined && (
							<EstructuraFamiliarDetails
								estructuraFamiliar={doc.EstructuraFamiliar}
							/>
						)}
					</div>
					<div
						class="tab-pane fade"
						id="nav-escolaridad"
						role="tabpanel"
						aria-labelledby="nav-escolaridad-tab"
						tabindex="0"
					>
						{doc.Escolaridad !== undefined && (
							<EscolaridadDetails escolaridad={doc.Escolaridad} />
						)}
					</div>
					<div
						class="tab-pane fade"
						id="nav-salud"
						role="tabpanel"
						aria-labelledby="nav-salud-tab"
						tabindex="0"
					>
						{doc.Salud !== undefined && <SaludDetails salud={doc.Salud} />}
					</div>
					<div
						class="tab-pane fade"
						id="nav-vivienda"
						role="tabpanel"
						aria-labelledby="nav-vivienda-tab"
						tabindex="0"
					>
						{doc.ViviendaEquipamiento !== undefined && (
							<ViviendaEquipamientoDetails
								viviendaEquipamiento={doc.ViviendaEquipamiento}
							/>
						)}
					</div>
					<div
						class="tab-pane fade"
						id="nav-vivienda"
						role="tabpanel"
						aria-labelledby="nav-vivienda-tab"
						tabindex="0"
					>
						{doc.ViviendaEquipamiento !== undefined && (
							<ViviendaEquipamientoDetails
								viviendaEquipamiento={doc.ViviendaEquipamiento}
							/>
						)}
					</div>
					<div
						class="tab-pane fade"
						id="nav-economicas"
						role="tabpanel"
						aria-labelledby="nav-economicas-tab"
						tabindex="0"
					>
						{doc.CondicionesEconomicas !== undefined && (
							<CondicionesEconomicasDetails
								condicionesEconomicas={doc.CondicionesEconomicas}
							/>
						)}
					</div>
					<div
						class="tab-pane fade"
						id="nav-alimentacion"
						role="tabpanel"
						aria-labelledby="nav-alimentacion-tab"
						tabindex="0"
					>
						{doc.Alimentacion !== undefined && (
							<AlimentacionDetails alimentacion={doc.Alimentacion} />
						)}
					</div>
					<div
						class="tab-pane fade"
						id="nav-resolucion"
						role="tabpanel"
						aria-labelledby="nav-resolucion-tab"
						tabindex="0"
					>
						{doc.Resolucion !== undefined && (
							<ResolucionDetails resolucion={doc.Resolucion} />
						)}
					</div>
					<div
						class="tab-pane fade"
						id="nav-observaciones"
						role="tabpanel"
						aria-labelledby="nav-observaciones-tab"
						tabindex="0"
					>
						{doc.Observaciones !== undefined && (
							<div>
								<h1>Observaciones</h1>

								<p>{doc.Observaciones}</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
