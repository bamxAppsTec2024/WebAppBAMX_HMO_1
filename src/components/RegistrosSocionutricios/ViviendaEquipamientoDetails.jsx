import styles from "./DetailsStyles.module.css";

export default function ViviendaEquipamientoDetails({ viviendaEquipamiento }) {
	return (
		<div className={styles["dataContainer"]}>
			<h3>Vivienda y Equipamiento</h3>
			<h4>Vivienda</h4>
			<p>Casa: {viviendaEquipamiento.Casa}</p>
			<p>Piso: {viviendaEquipamiento.Piso}</p>
			<p>Tenencia: {viviendaEquipamiento.Tenencia}</p>
			<p>Techo: {viviendaEquipamiento.Techo}</p>
			<p>Muros: {viviendaEquipamiento.Muros}</p>

			<h4>Características</h4>
			<p>Número de Cuartos: {viviendaEquipamiento.Caracteristicas.NoCuartos}</p>
			<p>
				Cuartos para Dormir:{" "}
				{viviendaEquipamiento.Caracteristicas.CuartosDormir}
			</p>
			<p>
				Cocina Separada: {viviendaEquipamiento.Caracteristicas.CocinaSeparada}
			</p>
			<p>
				Baño Exclusivo: {viviendaEquipamiento.Caracteristicas.BanoExclusivo}
			</p>

			<h4>Equipamiento</h4>
			<ul>
				{Object.entries(viviendaEquipamiento.Equipamiento).map(
					([itemName, itemDetails]) => (
						<li key={itemName}>
							{itemName}: Tiene - {itemDetails.Tiene}, Funciona -{" "}
							{itemDetails.Funciona}
						</li>
					)
				)}
			</ul>
		</div>
	);
}
