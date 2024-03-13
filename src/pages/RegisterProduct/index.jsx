import { useState, useEffect } from "react";
import styles from "./RegisterProduct.module.css";
import { getFirestore } from "firebase/firestore";
import app from "../../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import Navbar from "../../components/Navbar";

export default function RegisterProduct() {
  const [dataDonativoUtil, setDataDonativoUtil] = useState([]);
  const [totalWeight, setTotalWeight] = useState(0);

  const [formData, setFormData] = useState({
    nombre: "",
    fechaIngreso: "",
    peso: "",
    cantidad: "",
    comestible: "",
    detalles: "",
    tipoCribaDonativo: "",
  });
  const db = getFirestore(app);

  const inputsArray = [
    {
      id: 0,
      label: "Nombre del Producto",
      type: "text",
      name: "nombre",
      placeholder: "Nombre del Producto",
    },
    {
      id: 2,
      label: "Fecha de Ingreso",
      type: "datetime-local",
      name: "fechaIngreso",
      placeholder: "Fecha de Ingreso",
    },
    {
      id: 3,
      label: "Peso",
      type: "number",
      name: "peso",
      placeholder: "Peso",
    },
    {
      id: 4,
      label: "Cantidad",
      type: "number",
      name: "cantidad",
      placeholder: "Cantidad",
    },
    {
      id: 1,
      label: "Comestible",
      type: "radio",
      name: "comestible",
      placeholder: "Comestible",
    },
    {
      id: 5,
      label: "Detalles",
      type: "textarea",
      name: "detalles",
      placeholder: "Detalles",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const collectionName =
      formData.tipoCribaDonativo === "Util" ? "donativoUtil" : "donativoNoUtil";
    try {
      const docRef = await addDoc(collection(db, collectionName), {
        ...formData,
        // Add other fields as needed
      });
      console.log("Document written with ID: ", docRef.id);
      // Redirect or show success message
    } catch (e) {
      console.error("Error adding document: ", e);
      // Handle error
    }
    window.location.href = "/register";
  };

  const fetchData = async (collectionName, setData) => {
    try {
      const colRef = collection(db, collectionName);
      const querySnapshot = await getDocs(colRef);
      const fetchedData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(fetchedData);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData("donativoUtil", setDataDonativoUtil);

    let weight = 0;

    //add up all the weights of the products
    dataDonativoUtil.forEach((acc, curr) => {
      weight += parseInt(acc.peso);
    });

    setTotalWeight(weight);
  }, [dataDonativoUtil]);

  //get todays date in LatinAmerican Format
  const today = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Navbar />
      <div className={styles["container"]}>
        <div className={styles["card"]}>
          <h3 className={styles["card-header"]}>Productividad</h3>
          <div className={styles["productivity-grid"]}>
            <div className={styles["card-column"]}>
              <h3 className={styles["productivity-label"]}>Progreso {today}</h3>
              <p className={styles["productivity-body"]}>{totalWeight} kgs</p>
            </div>
            <div className={styles["card-column"]}>
              <h3 className={styles["productivity-label"]}>Meta</h3>
              <p className={styles["productivity-body"]}>500 kgs</p>
            </div>
          </div>
        </div>
        <div className={styles["card"]}>
          <h1 className={styles["card-header"]}>Registro de Producto</h1>
          <p className={styles["card-body"]}>
            Ingrese los datos del producto ya filtrado
          </p>
          <form className={styles["form"]} onSubmit={onSubmit}>
            <div className={styles["grid"]}>
              {inputsArray.map((input, index) => {
                if (index === 5) return null;

                if (input.type === "radio") {
                  return (
                    <div className={styles["form-group"]}>
                      <label className={styles["label"]} htmlFor={input.name}>
                        {input.label}
                      </label>
                      <div className={styles["radio-group"]}>
                        <input
                          type={input.type}
                          id={input.name + "si"}
                          name={input.name}
                          value="true"
                          checked={formData[input.name] === "true"}
                          onChange={handleChange}
                          className={styles["radio-input"]}
                        />
                        <label
                          className={styles["radio-label"]}
                          htmlFor={input.name}
                        >
                          Sí
                        </label>
                        <input
                          type={input.type}
                          id={input.name + "no"}
                          value="false"
                          checked={formData[input.name] === "false"}
                          onChange={handleChange}
                          className={styles["radio-input"]}
                        />
                        <label
                          className={styles["radio-label"]}
                          htmlFor={input.name}
                        >
                          No
                        </label>
                      </div>
                    </div>
                  );
                }

                return (
                  <div className={styles["form-group"]}>
                    <label className={styles["label"]} htmlFor={input.name}>
                      {input.label}
                    </label>
                    <input
                      type={input.type}
                      id={input.name}
                      name={input.name}
                      value={formData[input.name]}
                      className={styles["input"]}
                      onChange={handleChange}
                      placeholder={input.placeholder}
                    />
                  </div>
                );
              })}

              <div className={styles["form-group"]}>
                <label className={styles["label"]} htmlFor="tipodecriba">
                  Tipo de Criba Donativo
                </label>
                <select
                  className={styles["select"]}
                  id="tipoCribaDonativo"
                  name="tipoCribaDonativo"
                  placeholder="tipo de Criba de Donativo"
                  value={formData.tipoCribaDonativo}
                  onChange={handleChange}
                >
                  <option value="" disabled selected>
                    -- Selecciona una Opción --
                  </option>
                  <option value="Util">Util</option>
                  <option value="No Util">No Util</option>
                </select>
              </div>
            </div>
            <div className={styles["form-group"]}>
              <label className={styles["label"]} htmlFor={inputsArray[5].name}>
                {inputsArray[5].label}
              </label>
              <textarea
                className={styles["textarea"]}
                id={inputsArray[5].name}
                name={inputsArray[5].name}
                placeholder={inputsArray[5].placeholder}
                value={formData.detalles}
                onChange={handleChange}
              />
            </div>
            <button className={styles["button"]} type="submit">
              Registrar Producto
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
