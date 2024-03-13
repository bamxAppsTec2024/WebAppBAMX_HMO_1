import React, { useState, useEffect } from "react";
import styles from "./Table.module.css";
import { getFirestore } from "firebase/firestore";
import app from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "./Navbar";

const DataTable = () => {
  const [dataDonativo, setDataDonativo] = useState([]);
  const [dataDonativoUtil, setDataDonativoUtil] = useState([]);
  const [dataDonativoNoUtil, setDataDonativoNoUtil] = useState([]);
  const [loadingDonativo, setLoadingDonativo] = useState(true);
  const [loadingDonativoUtil, setLoadingDonativoUtil] = useState(true);
  const [loadingDonativoNoUtil, setLoadingDonativoNoUtil] = useState(true);
  const [errorDonativo, setErrorDonativo] = useState(null);
  const [errorDonativoUtil, setErrorDonativoUtil] = useState(null);
  const [errorDonativoNoUtil, setErrorDonativoNoUtil] = useState(null);

  const db = getFirestore(app);

  useEffect(() => {
    const fetchData = async (collectionName, setData, setLoading, setError) => {
      try {
        const colRef = collection(db, collectionName);
        const querySnapshot = await getDocs(colRef);
        const fetchedData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(fetchedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData("donativo", setDataDonativo, setLoadingDonativo, setErrorDonativo);
    fetchData("donativoUtil", setDataDonativoUtil, setLoadingDonativoUtil, setErrorDonativoUtil);
    fetchData("donativoNoUtil", setDataDonativoNoUtil, setLoadingDonativoNoUtil, setErrorDonativoNoUtil);
  }, []);

  return (
    <div className={styles.container}>
      <Navbar/>
      <div className={styles["row"]}>
        <div className="col-md-12">
          <div className={styles["card"]}>
            <div className={styles["scrollable-table"]}>
              <h1>Donativos</h1>
              {loadingDonativo ? (
                <p>Loading...</p>
              ) : errorDonativo ? (
                <p>Error: {errorDonativo}</p>
              ) : dataDonativo.length === 0 ? (
                <p>No data available</p>
              ) : (
                <table className={styles["table"]}>
                  <thead>
                    <tr>
                      <th>Conductor</th>
                      <th>Donante</th>
                      <th>Carga Ciega</th>
                      <th>Tipo de Carga</th>
                      <th>Donativo</th>
                      <th>Cantidad Carga</th>
                      <th>Hay Desperdicio</th>
                      <th>Porcentaje Desperdicio</th>
                      <th>Razón Desperdicio</th>
                      <th>Fecha</th>
                      <th>Fotografía</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataDonativo.map((item) => (
                      <tr key={item.id}>
                        <td>{item.conductor}</td>
                        <td>{item.donante}</td>
                        <td>{item.cargaCiega ? "Sí" : "No"}</td>
                        <td>{item.tipoCarga}</td>
                        <td>{item.donativo}</td>
                        <td>{item.cantidadCarga}</td>
                        <td>{item.hayDesperdicio ? "Sí" : "No"}</td>
                        <td>{item.porcentajeDesperdicio}</td>
                        <td>{item.razonDesperdicio}</td>
                        <td> {new Date(item.fecha.toDate()).toLocaleDateString()}</td>
                        <td>{item.fotografia}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles["row"]}>
        <div className="col-md-12">
          <div className={styles["card"]}>
            <div className={styles["scrollable-table"]}>
              <h1>Donativos Utiles (Filtrados)</h1>
              {loadingDonativoUtil ? (
                <p>Loading...</p>
              ) : errorDonativoUtil ? (
                <p>Error: {errorDonativo}</p>
              ) : dataDonativoUtil.length === 0 ? (
                <p>No data available</p>
              ) : (
                <table className={styles["table"]}>
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Fecha</th>
                      <th>Peso</th>
                      <th>Cantidad</th>
                      <th>Comestible</th>
                      <th>Detalles</th>
                      <th>tipo de Criba</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataDonativoUtil.map((item) => (
                      <tr key={item.id}>
                        <td>{item.nombre}</td>
                        <td>{new Date(item.fechaIngreso).toLocaleDateString()}</td>
                        <td>{item.peso}</td>
                        <td>{item.cantidad}</td>
                        <td>{item.comestible ? "Sí" : "No"}</td>
                        <td>{item.detalles}</td>
                        <td>{item.tipoCribaDonativo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles["row"]}>
        <div className="col-md-12">
          <div className={styles["card"]}>
            <div className={styles["scrollable-table"]}>
              <h1>Donativos No Utiles (Filtrados)</h1>
              {loadingDonativoNoUtil ? (
                <p>Loading...</p>
              ) : errorDonativoNoUtil ? (
                <p>Error: {errorDonativo}</p>
              ) : dataDonativoNoUtil.length === 0 ? (
                <p>No data available</p>
              ) : (
                <table className={styles["table"]}>
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Fecha</th>
                      <th>Peso</th>
                      <th>Cantidad</th>
                      <th>Comestible</th>
                      <th>Detalles</th>
                      <th>tipo de Criba</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataDonativoNoUtil.map((item) => (
                      <tr key={item.id}>
                        <td>{item.nombre}</td>
                        <td>{new Date(item.fechaIngreso).toLocaleDateString()}</td>
                        <td>{item.peso}</td>
                        <td>{item.cantidad}</td>
                        <td>{item.comestible ? "Sí" : "No"}</td>
                        <td>{item.detalles}</td>
                        <td>{item.tipoCribaDonativo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Similar structure for other collections */}
    </div>
  );
};

export default DataTable;

