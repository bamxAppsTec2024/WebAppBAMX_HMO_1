import { useState, useEffect } from "react";
import styles from "../pages/RegisterProduct/RegisterProduct.module.css";
import { getFirestore } from "firebase/firestore";
import app from "../firebase";
import { collection, getDocs, doc, updateDoc, setDoc} from "firebase/firestore";
export default function Formulario() {
  const inputs1Array = [
    {
      id: 0,
      label: "Conductor",
      type: "input",
      name: "name",
      placeholder: "Conductor",
    },
    {
      id: 1,
      label: "Donante",
      type: "select",
      name: "name",
      placeholder: "Nombre del Donante",
    },
    {
      id: 2,
      label: "¿Carga Ciega?",
      type: "radio",
      name: "isEdible",
      placeholder: "¿Carga Ciega?",
    },
    {
      id: 3,
      label: "Tipo de Carga",
      type: "radio",
      name: "isEdible",
      placeholder: "Tipo de Carga",
    },
    {
      id: 4,
      label: "Donativo",
      type: "radio",
      name: "isEdible",
      placeholder: "Nombre del Donativo",
    },
    {
      id: 5,
      label: "Cantidad Carga",
      type: "number",
      name: "quantity",
      placeholder: "Cantidad Carga",
    },
    {
      id: 6,
      label: "¿Hay Desperdicio?",
      type: "radio",
      name: "isEdible",
      placeholder: "¿Hay Desperdicio?",
    },
    {
      id: 7,
      label: "Porcentaje Desperdicio",
      type: "select",
      name: "porcentage",
      placeholder: "Porcentaje Desperdicio",
    },
    {
      id: 8,
      label: "Razón Desperdicio",
      type: "select",
      name: "name",
      placeholder: "Razon Desperdicio",
    },
  ];

  const [data, setData] = useState(null);
  const [selectedDonativo, setSelectedDonativo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const db = getFirestore(app);
  const collectionName = "donativo";

  const [conductor, setConductor] = useState("");
  const [donante, setDonante] = useState("");
  const [cargaCiega, setCargaCiega] = useState("");
  const [tipoCarga, setTipoCarga] = useState("");
  const [donativo, setDonativo] = useState("");
  const [cantidadCarga, setCantidadCarga] = useState("");
  const [hayDesperdicio, setHayDesperdicio] = useState("");
  const [porcentajeDesperdicio, setPorcentajeDesperdicio] = useState("");
  const [razonDesperdicio, setRazonDesperdicio] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const colRef = collection(db, collectionName); // Reference to trainingCourses collection
        const querySnapshot = await getDocs(colRef);

        const fetchDonativos = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setData(fetchDonativos);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
        console.log(data);
      }
    };

    fetchData();
  }, []);

  const handleDonativoChange = (event) => {
    const selectedId = event.target.value;
    const selected = data.find((donativo) => donativo.id === selectedId);
    setSelectedDonativo(selected);
    if (selected) {
      setConductor(selected.conductor);
      setDonante(selected.donante);
      setCargaCiega(selected.cargaCiega);
      setTipoCarga(selected.tipoCarga);
      setDonativo(selected.donativo);
      setCantidadCarga(selected.cantidadCarga);
      setHayDesperdicio(selected.hayDesperdicio);
      setPorcentajeDesperdicio(selected.porcentajeDesperdicio);
      setRazonDesperdicio(selected.razonDesperdicio);
      // Actualiza otros estados para los campos del formulario
    } else {
      // Limpiar los estados locales si no hay donativo seleccionado
      setConductor("");
      setDonante("");
      setCargaCiega("");
      setTipoCarga("");
      setDonativo("");
      setCantidadCarga("");
      setHayDesperdicio("");
      setPorcentajeDesperdicio("");
      setRazonDesperdicio("");
      // Limpiar otros estados para los campos del formulario
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = doc(db, collectionName, selectedDonativo.id);
      await updateDoc(docRef, {
        conductor: conductor,
        donante: donante,
        cargaCiega: cargaCiega,
        tipoCarga: tipoCarga,
        donativo: donativo,
        cantidadCarga: cantidadCarga,
        hayDesperdicio: hayDesperdicio,
        porcentajeDesperdicio: porcentajeDesperdicio,
        razonDesperdicio: razonDesperdicio,
        // Update other fields as needed
      });

      // Save the value of the 'Peso' input field to a different collection
      const otherCollectionName = "peso";
      const pesoValue = document.getElementById("peso").value; // Get the value of the input field
      const otherDocData = {
        idDonativo: selectedDonativo.id,
        donativo: selectedDonativo.donativo,
        pesoTotal: pesoValue,
        // Add other fields as needed
      };
      await setDoc(doc(db, otherCollectionName, selectedDonativo.id), otherDocData);

      console.log("Document updated successfully!");
      // Redirect or perform other actions after successful update
    } catch (error) {
      console.error("Error updating document:", error);
      // Handle error, such as displaying an error message to the user
    }
    window.location.href = "/register";
  };
    
  

  return (
    <div className={styles["container"]}>
      <div className={styles["card"]}>
        <div className={styles["scrollable-container"]}>
          <h1 class={styles["card-header"]}>Registro de Donativo</h1>

          <p className={styles["card-body"]}>
            Ingrese o Verifique los Datos del Donativo
          </p>
          <form className={styles["form"]} onSubmit={onSubmit}>
            <h3>Registro de Carga / Recibimiento de Donativo</h3>

            <div className="mb-6">
              <label htmlFor="donativo" className={styles.label}>
                Info Donativo Recibido
              </label>
              <select
                className={styles.select}
                id="donativo"
                onChange={handleDonativoChange}
                value={selectedDonativo ? selectedDonativo.id : ""}
              >
                <option value="" disabled selected>
                  Seleccione un donativo
                </option>
                {data &&
                  data.map((donativo) => (
                    <option key={donativo.id} value={donativo.id}>
                      {donativo.donativo} {donativo.donante}{" "}
                      {donativo.fecha.seconds &&
                        new Date(
                          donativo.fecha.seconds * 1000
                        ).toLocaleDateString()}
                    </option>
                  ))}
              </select>
            </div>
            <div className={styles["grid"]}>
              <div className="mb-3">
                <label
                  htmlFor={(inputs1Array.id = 0)}
                  className={styles["label"]}
                >
                  Conductor
                </label>
                <input
                  type="text"
                  className={styles.input}
                  id="conductor"
                  value={conductor}
                  onChange={(e) => setConductor(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor={(inputs1Array.id = 1)}
                  className={styles["label"]}
                >
                  Donante
                </label>
                <input
                  type="text"
                  className={styles.input}
                  id="donante"
                  value={donante}
                  onChange={(e) => setDonante(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className={styles["radio-label"]}>¿Carga Ciega? </label>
                <div>
                  <div className={styles["form-check"]}>
                    <input
                      type="radio"
                      id="cargaCiegaSi"
                      name="cargaCiegaSi"
                      value={cargaCiega}
                      checked={cargaCiega === "true"}
                      onChange={(e) => setCargaCiega(e.target.value)}
                      className={styles["radio-input"]}
                    />
                    <label className={styles["label"]} htmlFor="cargaCiegaSi">
                      Sí
                    </label>
                  </div>
                  <div className={styles["form-check"]}>
                    <input
                      type="radio"
                      id="cargaCiegaNo"
                      name="cargaCiegaNo"
                      value={cargaCiega}
                      checked={cargaCiega === "false"}
                      onChange={(e) => setCargaCiega(e.target.value)}
                      className={styles["radio-input"]}
                    />
                    <label className={styles["label"]} htmlFor="cargaCiegaNo">
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label className={styles["label"]}>Tipo de Carga </label>
                <div>
                  <div className={styles["form-check"]}>
                    <input
                      className={styles["radio-input"]}
                      type="radio"
                      name="perecedero"
                      id="perecedero"
                      value={tipoCarga}
                      checked={tipoCarga === "Perecedero"}
                      onChange={(e) => setCargaCiega(e.target.value)}
                    />
                    <label className={styles["label"]} htmlFor="perecedero">
                      Perecedero
                    </label>
                  </div>
                  <div className={styles["form-check"]}>
                    <input
                      className={styles["radio-input"]}
                      type="radio"
                      name="noperecedero"
                      id="noperecedero"
                      value={tipoCarga}
                      checked={tipoCarga === "No Perecedero"}
                      onChange={(e) => setCargaCiega(e.target.value)}
                    />
                    <label className={styles["label"]} htmlFor="noperecedero">
                      No Perecedero
                    </label>
                  </div>
                  <div className={styles["form-check"]}>
                    <input
                      className={styles["radio-input"]}
                      type="radio"
                      name="nocomestible"
                      id="nocomestible"
                      value={tipoCarga}
                      checked={tipoCarga === "No Comestible"}
                      onChange={(e) => setCargaCiega(e.target.value)}
                    />
                    <label className={styles["label"]} htmlFor="nocomestible">
                      No Comestible
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="donativonombre" className={styles["label"]}>
                  Donativo
                </label>
                <input
                  type="text"
                  className={styles.input}
                  id="donativonombre"
                  value={donativo}
                  onChange={(e) => setDonativo(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cantidadcarga" className={styles["label"]}>
                  Cantidad Carga (toneladas)
                </label>
                <input
                  type="number"
                  className={styles.input}
                  id="cantidadcarga"
                  value={cantidadCarga}
                  onChange={(e) => setCantidadCarga(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className={styles["label"]}>¿Hay Desperdicio? </label>
                <div>
                  <div className={styles["radio-group"]}>
                  <input
                      type="radio"
                      id="hayDesperdicioSi"
                      name="hayDesperdicioSi"
                      value={hayDesperdicio}
                      checked={hayDesperdicio === "true"}
                      onChange={(e) => setHayDesperdicio(e.target.value)}
                      className={styles["radio-input"]}
                    />
                    <label className={styles["label"]} htmlFor="hayDesperdicioSi">
                      Sí
                    </label>
                  </div>
                  <div className={styles["radio-group"]}>
                  <input
                      type="radio"
                      id="hayDesperdicioNo"
                      name="hayDesperdicioNo"
                      value={hayDesperdicio}
                      checked={hayDesperdicio === "false"}
                      onChange={(e) => setHayDesperdicio(e.target.value)}
                      className={styles["radio-input"]}
                    />
                    <label className={styles["label"]} htmlFor="hayDesperdicioNo">
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="porcentajeDesperdicio" className={styles["label"]}>
                  Porcentaje Desperdicio
                </label>
                <input
                  type="number"
                  className={styles.input}
                  id="porcentajeDesperdicio"
                  value={porcentajeDesperdicio}
                  onChange={(e) => setPorcentajeDesperdicio(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="razonDesperdicio" className={styles["label"]}>
                  Razón Desperdicio
                </label>
                <input
                  type="text"
                  className={styles.input}
                  id="razonDesperdicio"
                  value={razonDesperdicio}
                  onChange={(e) => setRazonDesperdicio(e.target.value)}
                />
              </div>
            </div>
            <h3>Pesaje de Donativo</h3>
            {/* Repite esto para los 20 campos de texto */}
            <div className="mb-3">
              <label htmlFor="peso" className={styles["label"]}>
                Peso
              </label>
              <input
                type="number"
                className={styles["input"]}
                id="peso"
                placeholder="Peso"
              />
            </div>
            <div style={{ marginTop: "3vh" }}>
              <button className={styles["button"]} type="submit">
                Registra Donativo
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}