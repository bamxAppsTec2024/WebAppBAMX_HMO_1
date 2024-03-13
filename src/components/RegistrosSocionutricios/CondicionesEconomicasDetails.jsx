import styles from "./DetailsStyles.module.css";


export default function CondicionesEconomicasDetails({
	condicionesEconomicas,
}) {
	return (
		<div className={styles["dataContainer"]}>
			<h3>Condiciones Económicas</h3>
			<h4>Aportación Semanal</h4>
			<p>Padre: {condicionesEconomicas.AportacionSemanal.Padre}</p>
			<p>Madre: {condicionesEconomicas.AportacionSemanal.Madre}</p>
			<p>Hijo: {condicionesEconomicas.AportacionSemanal.Hijo}</p>
			<p>PROSPERA: {condicionesEconomicas.AportacionSemanal.PROSPERA}</p>
			<p>
				Adultos Mayores PROSPERA:{" "}
				{condicionesEconomicas.AportacionSemanal.AdultosMayoresPROSPERA}
			</p>
			<p>Becas: {condicionesEconomicas.AportacionSemanal.Becas}</p>
			<p>Otros: {condicionesEconomicas.AportacionSemanal.Otros}</p>
			<p>Pensión: {condicionesEconomicas.AportacionSemanal.Pension}</p>
			<p>
				Total Semanal: {condicionesEconomicas.AportacionSemanal.TotalSemanal}
			</p>
			<p>
				Total Mensual: {condicionesEconomicas.AportacionSemanal.TotalMensual}
			</p>

			<h4>Egreso Semanal</h4>
			<p>Vivienda: {condicionesEconomicas.EgresoSemanal.Vivienda}</p>
			<p>Alimentación: {condicionesEconomicas.EgresoSemanal.Alimentacion}</p>
			<p>Luz: {condicionesEconomicas.EgresoSemanal.Luz}</p>
			<p>Gas: {condicionesEconomicas.EgresoSemanal.Gas}</p>
			<p>Agua: {condicionesEconomicas.EgresoSemanal.Agua}</p>
			<p>Teléfono: {condicionesEconomicas.EgresoSemanal.Telefono}</p>
			<p>Transporte: {condicionesEconomicas.EgresoSemanal.Transporte}</p>
			<p>
				Atención Médica: {condicionesEconomicas.EgresoSemanal.AtencionMedica}
			</p>
			<p>Otros Gastos: {condicionesEconomicas.EgresoSemanal.OtrosGastos}</p>
			<p>Celular: {condicionesEconomicas.EgresoSemanal.Celular}</p>
			<p>Educación: {condicionesEconomicas.EgresoSemanal.Educacion}</p>
			<p>Total Semanal: {condicionesEconomicas.EgresoSemanal.TotalSemanal}</p>
			<p>Total Mensual: {condicionesEconomicas.EgresoSemanal.TotalMensual}</p>

			<h4>Apoyos en Especie</h4>
			<p>Tipo de Apoyo: {condicionesEconomicas.ApoyosEspecie.TipoApoyo}</p>
			<p>
				Quién Proporciona:{" "}
				{condicionesEconomicas.ApoyosEspecie.QuienProporciona}
			</p>
			<p>
				Frecuencia de Apoyo:{" "}
				{condicionesEconomicas.ApoyosEspecie.FrecuenciaApoyo}
			</p>

			<h4>Remesas</h4>
			<p>Se Recibe: {condicionesEconomicas.Remesas.SeRecibe}</p>
			<p>
				Frecuencia de Apoyo: {condicionesEconomicas.Remesas.FrecuenciaApoyo}
			</p>

			<h4>Tarjeta de Identidad</h4>
			<p>CURP: {condicionesEconomicas.TarjetaIdentidad.CURP}</p>
			<p>
				Acta de Nacimiento:{" "}
				{condicionesEconomicas.TarjetaIdentidad.ActaNacimiento}
			</p>
			<p>
				Carta de Identidad:{" "}
				{condicionesEconomicas.TarjetaIdentidad.CartaIdentidad}
			</p>
			<p>INE: {condicionesEconomicas.TarjetaIdentidad.INE}</p>
		</div>
	);
}
