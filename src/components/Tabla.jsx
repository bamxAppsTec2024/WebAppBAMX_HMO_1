import React, { useEffect}from "react";
import "./Table.css"; // Import the CSS stylesheet

const DataTable = () => {
  // Hardcoded data for demonstration
  const data = [
    {
      conductor: "Luis",
      donante: "Walmart",
      cargaCiega: true,
      tipoCarga: "Perecedero",
      donativo: "Manzanas",
      cantidadCarga: 10,
      hayDesperdicio: true,
      porcentajeDesperdicio: "50%",
      razonDesperdicio: "Razón 1",
      fotografia: "foto1.jpg",
    },
    {
      conductor: "Juan",
      donante: "Sams",
      cargaCiega: false,
      tipoCarga: "No Perecedero",
      donativo: "Peras",
      cantidadCarga: 20,
      hayDesperdicio: false,
      porcentajeDesperdicio: "0%",
      razonDesperdicio: "Razón 2",
      fotografia: "foto2.jpg",
    },
    // Add more hardcoded data as needed
  ];
   // Function to handle window resize event
   const handleResize = () => {
    const table = document.querySelector('.table');
    if (table) {
      table.scrollTop = 0;
      table.scrollLeft = 0;
    }
  };

  // Effect hook to add event listener on component mount
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    
    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="container">
    <div className="scrollable-table">
      <div className="card">
        <h1>Donativos</h1>
        
          {" "}
          {/* Add the scrollable-table class */}
          <table className="table">
            <thead>
              <tr>
                {/* Define table headers */}
                <th>Conductor</th>
                <th>Donante</th>
                <th>Carga Ciega</th>
                <th>Tipo de Carga</th>
                <th>Donativo</th>
                <th>Cantidad Carga</th>
                <th>Hay Desperdicio</th>
                <th>Porcentaje Desperdicio</th>
                <th>Razón Desperdicio</th>
                <th>Fotografía</th>
              </tr>
            </thead>
            <tbody>
              {/* Render hardcoded data */}
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.conductor}</td>
                  <td>{item.donante}</td>
                  <td>{item.cargaCiega ? "Sí" : "No"}</td>
                  <td>{item.tipoCarga}</td>
                  <td>{item.donativo}</td>
                  <td>{item.cantidadCarga}</td>
                  <td>{item.hayDesperdicio ? "Sí" : "No"}</td>
                  <td>{item.porcentajeDesperdicio}</td>
                  <td>{item.razonDesperdicio}</td>
                  <td>{item.fotografia}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
