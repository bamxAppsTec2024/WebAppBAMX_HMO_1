import * as React from "react";
import "../pages/RegisterProduct/RegisterProduct.css";

export default function Formulario () {
  const inputs1Array = [
    {
      id: 0,
      label: "Conductor",
      type: "select",
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
    {
      id: 9,
      Label: "Fotografía",
      type: "media",
      name: "photo",
      placeholder: "Foto",
    },
  ]
  
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className="container">
      <div className="card">
        <h1 class="card-header">Registro de Donativo</h1>
        <p className="card-body">Ingrese o Verifique los Datos del Donativo</p>
        <form className="form" onSubmit={onSubmit}>
          <h3>Registro de Carga / Recibimiento de Donativo</h3>
          <div className="grid">
            <div className="mb-3">
              <label htmlFor={inputs1Array.id = 0} className="label">
                Conductor
              </label>
              <select className="select" id="0">
                <option selected>Conductor</option>
                <option value="option1">Luis</option>
                <option value="option2">Juan</option>
                <option value="option3">Pedro</option>
                <option value="option4">Pablo</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="campo2" className="form-label">
                Donante
              </label>
              <select className="form-select" id="campo2">
                <option selected>Donante</option>
                <option value="option1">Walmart</option>
                <option value="option2">Sams</option>
                <option value="option3">Costco</option>
                <option value="option4">Oxxo</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">¿Carga Ciega? </label>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="respuesta"
                    id="si"
                    value="si"
                  />
                  <label className="form-check-label" htmlFor="si">
                    Sí
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="respuesta"
                    id="no"
                    value="no"
                  />
                  <label className="form-check-label" htmlFor="no">
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Tipo de Carga </label>
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="opcion"
                    id="opcion1"
                    value="opcion1"
                  />
                  <label className="form-check-label" htmlFor="opcion1">
                    Perecedero
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="opcion"
                    id="opcion2"
                    value="opcion2"
                  />
                  <label className="form-check-label" htmlFor="opcion2">
                    No Perecedero
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="opcion"
                    id="opcion3"
                    value="opcion3"
                  />
                  <label className="form-check-label" htmlFor="opcion3">
                    No Comestible
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="campo2" className="form-label">
                Donativo
              </label>
              <select className="form-select" id="campo2">
                <option selected>Donativo</option>
                <option value="option1">Manzanas</option>
                <option value="option2">Peras</option>
                <option value="option3">Naranjas</option>
                <option value="option4">Platanos</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="campo1" className="form-label">
                Cantidad Carga (toneladas)
              </label>
              <input
                type="number"
                className="form-control"
                id="campo1"
                placeholder="Cantidad Carga"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">¿Hay Desperdicio? </label>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="respuesta"
                    id="si"
                    value="si"
                  />
                  <label className="form-check-label" htmlFor="si">
                    Sí
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="respuesta"
                    id="no"
                    value="no"
                  />
                  <label className="form-check-label" htmlFor="no">
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="campo2" className="form-label">
                Porcentaje Desperdicio
              </label>
              <select className="form-select" id="campo2">
                <option selected>Porcentaje Desperdicio</option>
                <option value="option1">0%</option>
                <option value="option2">25%</option>
                <option value="option3">50%</option>
                <option value="option4">75%</option>
                <option value="option5">100%</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="campo2" className="form-label">
                Razón Desperdicio
              </label>
              <select className="form-select" id="campo2">
                <option selected>Razón Desperdicio</option>
                <option value="option1">Razón 1</option>
                <option value="option2">Razón 2</option>
                <option value="option3">Razón 3</option>
                <option value="option4">Razón 4</option>
                <option value="option5">Razón 5</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="campo2" className="form-label">
                Tomar Fotografía
              </label>
              <input
                type="text"
                className="form-control"
                id="campo2"
                placeholder="Fotografía"
              />
            </div>
          </div>
          <h3>Pesaje de Donativo</h3>
          {/* Repite esto para los 20 campos de texto */}
          <div className="mb-3">
            <label htmlFor="campo20" className="form-label">
              Peso
            </label>
            <input
              type="number"
              className="form-control"
              id="campo20"
              placeholder="Peso"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

