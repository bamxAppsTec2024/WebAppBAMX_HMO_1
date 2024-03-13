import { useState } from "react";
import app from "../../firebase";
import {
	Timestamp,
	collection,
	getDocs,
	getFirestore,
} from "firebase/firestore";
import { useEffect } from "react";
import styles from "./Registros.module.css";
import Details from "./Details";

export default function SocionutricioList() {
	const [data, setData] = useState([]);
	const [selected, setSelected] = useState(null);
	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	const example = {
		Id: "123456789",
		DatosGenerales: {
			Comunidad: "Example Community",
			Grupo: "Example Group",
			Fecha: Timestamp.fromDate(new Date("1980-01-01T00:00:00.000Z")),
			Estado: "Example State",
			Municipio: "Example Municipality",
			Asentamiento: "Example Settlement",
			TipoAsentamiento: "Example Settlement Type",
			NombreAsentamiento: "Example Settlement Name",
			TipoVialidad: "Example Road Type",
			NombreVialidad: "Example Road Name",
			NoExterior: "123",
			NoInterior: "456",
			CP: "12345",
			EntreCalles: "Example Between Streets",
			Descripcion: "Example Description",
			Telefono: "123-456-7890",
		},
		Servicios: {
			Electricidad: "Example Electricity Type",
			Drenaje: "Example Drainage Type",
			BanoExcusado: "Example Bathroom Type",
			Combustible: "Example Fuel Type",
			Agua: "Example Water Type",
		},
		EstructuraFamiliar: {
			DatosFamilia: [
				{
					Nombre: "John",
					PrimerApellido: "Doe",
					SegundoApellido: "",
					Sexo: "Male",
					FechaNacimiento: Timestamp.fromDate(
						new Date("1980-01-01T00:00:00.000Z")
					),
					EntidadNacimiento: "Example Birthplace",
					TarjetaIdentidad: "1234567890",
					EstadoCivil: "Married",
					Parentesco: "Spouse",
				},
				{
					Nombre: "Jane",
					PrimerApellido: "Doe",
					SegundoApellido: "",
					Sexo: "Female",
					FechaNacimiento: Timestamp.fromDate(
						new Date("1980-01-01T00:00:00.000Z")
					),
					EntidadNacimiento: "Example Birthplace",
					TarjetaIdentidad: "0987654321",
					EstadoCivil: "Married",
					Parentesco: "Spouse",
				},
			],
		},
		Escolaridad: {
			Escolaridades: [
				{
					Escolaridad: "Bachelor's Degree",
					Grado: "Example Grade",
					AsisteEscuela: "Yes",
					Ocupacion: "Example Occupation",
					TipoEmpleo: "Full-time",
					PrestacionesLaborales: ["Health Insurance", "Retirement Plan"],
					JubilacionPension: "Yes",
					DerechoHabiencia: "Yes",
					MotivoDerechohabiencia: "Example Reason",
				},
				{
					Escolaridad: "Bachelor's Degree",
					Grado: "Example Grade",
					AsisteEscuela: "Yes",
					Ocupacion: "Example Occupation",
					TipoEmpleo: "Full-time",
					PrestacionesLaborales: ["Health Insurance", "Retirement Plan"],
					JubilacionPension: "Yes",
					DerechoHabiencia: "Yes",
					MotivoDerechohabiencia: "Example Reason",
				},
			],
		},
		Salud: {
			SaludIntegrante: [
				{
					Discapacidades: "None",
					CondicionesSalud: "Good",
					Adicciones: "None",
					Peso: 70,
					Talla: 170,
					IMC: 24.22,
					PuebloIndigena: "No",
				},
				{
					Discapacidades: "None",
					CondicionesSalud: "Good",
					Adicciones: "None",
					Peso: 70,
					Talla: 170,
					IMC: 24.22,
					PuebloIndigena: "No",
				},
			],
		},
		ViviendaEquipamiento: {
			Casa: "Example House Type",
			Piso: "Example Floor Type",
			Tenencia: "Owned",
			Techo: "Example Roof Type",
			Muros: "Example Wall Type",
			Caracteristicas: {
				NoCuartos: 3,
				CuartosDormir: 2,
				CocinaSeparada: "Yes",
				BanoExclusivo: "Yes",
			},
			Equipamiento: {
				Refrigerador: { Tiene: "Yes", Funciona: "Yes" },
				Estufa: { Tiene: "Yes", Funciona: "Yes" },
				VideoDVDBluray: { Tiene: "No", Funciona: "N/A" },
				Lavadora: { Tiene: "Yes", Funciona: "Yes" },
				Licuadora: { Tiene: "Yes", Funciona: "Yes" },
				Television: { Tiene: "Yes", Funciona: "Yes" },
				Radio: { Tiene: "Yes", Funciona: "Yes" },
				Sala: { Tiene: "Yes", Funciona: "Yes" },
				Comedor: { Tiene: "Yes", Funciona: "Yes" },
				Automovil: { Tiene: "No", Funciona: "N/A" },
				Cama: { Tiene: "Yes", Funciona: "Yes" },
				Celular: { Tiene: "Yes", Funciona: "Yes" },
				Motocicleta: { Tiene: "No", Funciona: "N/A" },
				Computadora: { Tiene: "No", Funciona: "N/A" },
				Horno: { Tiene: "No", Funciona: "N/A" },
				Telefono: { Tiene: "Yes", Funciona: "Yes" },
				CondicionesEquipamiento: "Good",
			},
		},
		CondicionesEconomicas: {
			AportacionSemanal: {
				Padre: 200,
				Madre: 150,
				Hijo: 0,
				PROSPERA: 100,
				AdultosMayoresPROSPERA: 0,
				Becas: 50,
				Otros: 0,
				Pension: 0,
				TotalSemanal: 500,
				TotalMensual: 2000,
			},
			EgresoSemanal: {
				Vivienda: 300,
				Alimentacion: 200,
				Luz: 100,
				Gas: 50,
				Agua: 50,
				Telefono: 50,
				Transporte: 100,
				AtencionMedica: 50,
				OtrosGastos: 0,
				Celular: 30,
				Educacion: 20,
				TotalSemanal: 950,
				TotalMensual: 3800,
			},
			ApoyosEspecie: {
				TipoApoyo: "Food",
				QuienProporciona: "Local NGO",
				FrecuenciaApoyo: "Weekly",
			},
			Remesas: {
				SeRecibe: "No",
				FrecuenciaApoyo: "N/A",
			},
			TarjetaIdentidad: {
				CURP: "ABC123456DEF",
				ActaNacimiento: "Yes",
				CartaIdentidad: "Yes",
				INE: "Yes",
			},
		},
		Alimentacion: {
			PocaVariedad: "No",
			DejoComer: "No",
			ComerMenos: "No",
			SinComida: "No",
			HambreNoComio: "No",
			ComerUnaVez: "No",
			MenorPocaVariedad: "No",
			MenorComioMenos: "No",
			DisminuirCantidadMenor: "No",
			MenorConHambreNoComio: "No",
			MenorDurmioConHambre: "No",
			MenorComioUnaVez: "No",
		},
		Resolucion: {
			Evaluacion: {
				Puntaje: 85,
				InseguridadAlimentaria: 5,
				IndicadorServicioBasico: 8,
				IndicadorRezagoEducativo: 10,
				IndicadorCalidadVivienda: 9,
				IndicadorAccesoSalud: 7,
				IndicadorSeguridadSocial: 6,
				IndicadorLineaBienestar: 8,
				ClasificacionPobreza: 1,
			},
			Resolucion: "Support",
			Tipo: "Cash",
			Frecuencia: "Monthly",
			Duracion: 6,
			MayoresDoceTrabajan: null,
			PersonasTrabajanPorSuCuenta: null,
			PersonasDoceQuinceTrabajaronEsteMes: null,
			PersonasDieciseisDiesiochoTrabajaron: null,
			SistemaRecoleccionBasura: null,
		},
		Observaciones: "Ejemplo",
	};

	const FetchData = async () => {
		setData([example]);
		return;
		const db = getFirestore();

		await getDocs(collection(db, "registrosSocionutricios")).then(
			(querySnapshot) => {
				let newData = querySnapshot.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				}));

				newData = newData.sort((a, b) => {
					return (
						new Date(a.DatosGenerales.Fecha) - new Date(b.DatosGenerales.Fecha)
					);
				});

				setData(newData);
				console.log(data, newData);
			}
		);
	};

	useEffect(() => {
		FetchData();
	}, []);

	if (selected !== null) {
		return <Details doc={selected} returnFunc={() => setSelected(null)} />;
	} else {
		return (
			<main>
				<h1>Listado de registros socio nutricios</h1>
				<div className={styles["container"]}>
					{data.map((doc) => (
						<div className={"card border-secondary mb-3"}>
							<div className="card-header">ID del registro: {doc.id}</div>
							<div className="card-body">
								<h4 className="card-title">
									Fecha en la que se realizo:{" "}
									{doc.DatosGenerales.Fecha.toDate().toLocaleDateString(
										"es-Es"
									)}
								</h4>
		
								<button
									onClick={() => setSelected(doc)}
									className={"btn btn-primary"}
								>
									Details
								</button>
							</div>
						</div>

					))}
				</div>
			</main>
		);
	}
}
