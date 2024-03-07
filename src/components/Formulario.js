import React from "react";

const Formulario = () => {
  return (
    <div className="container">
      <h1>Registro de Donativo</h1>
      <form>
        <h3> Registro de Carga / Recibimiento de Donativo</h3>
        <div class="mb-3">
          <label for="campo1" class="form-label">
            Conductor
          </label>
          <select class="form-select" id="campo1">
            <option selected>Conductor</option>
            <option value="option1">Luis</option>
            <option value="option2">Juan</option>
            <option value="option3">Pedro</option>
            <option value="option4">Pablo</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="campo2" class="form-label">
            Donante
          </label>
          <select class="form-select" id="campo2">
            <option selected>Donante</option>
            <option value="option1">Walmart</option>
            <option value="option2">Sams</option>
            <option value="option3">Costco</option>
            <option value="option4">Oxxo</option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label">¿Carga Ciega? </label>
          <div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="respuesta"
                id="si"
                value="si"
              />
              <label class="form-check-label" for="si">
                Sí
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="respuesta"
                id="no"
                value="no"
              />
              <label class="form-check-label" for="no">
                No
              </label>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Tipo de Carga </label>
          <div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="opcion"
                id="opcion1"
                value="opcion1"
              />
              <label class="form-check-label" for="opcion1">
                Perecedero
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="opcion"
                id="opcion2"
                value="opcion2"
              />
              <label class="form-check-label" for="opcion2">
                No Perecedero
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="opcion"
                id="opcion3"
                value="opcion3"
              />
              <label class="form-check-label" for="opcion3">
                No Comestible
              </label>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="campo2" class="form-label">
            Donativo
          </label>
          <select class="form-select" id="campo2">
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
        <div class="mb-3">
          <label class="form-label">¿Hay Desperdicio? </label>
          <div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="respuesta"
                id="si"
                value="si"
              />
              <label class="form-check-label" for="si">
                Sí
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="respuesta"
                id="no"
                value="no"
              />
              <label class="form-check-label" for="no">
                No
              </label>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="campo2" class="form-label">
            Porcentaje Desperdicio
          </label>
          <select class="form-select" id="campo2">
            <option selected>Porcentaje Desperdicio</option>
            <option value="option1">0%</option>
            <option value="option2">25%</option>
            <option value="option3">50%</option>
            <option value="option4">75%</option>
            <option value="option5">100%</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="campo2" class="form-label">
            Razón Desperdicio
          </label>
          <select class="form-select" id="campo2">
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
        <h3> Pesaje de Donativo</h3>
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
        <h3> Proceso de Filtrado</h3>
        <div className="row">
          <div className="col-md-6">
          <label for="campo2" class="form-label">
            Porcentaje Producto Util
          </label>
          <div className="mb-3">
          <select class="form-select" id="campo2">
            <option selected>Porcentaje Util</option>
            <option value="option1">0%</option>
            <option value="option2">25%</option>
            <option value="option3">50%</option>
            <option value="option4">75%</option>
            <option value="option5">100%</option>
          </select>
          </div>
        </div>
        <div className="col-md-6">
          <label for="campo2" class="form-label">
            Porcentaje No Util
          </label>
          <div className="mb-3">
          <select class="form-select" id="campo2">
            <option selected>Porcentaje No Util</option>
            <option value="option1">0%</option>
            <option value="option2">25%</option>
            <option value="option3">50%</option>
            <option value="option4">75%</option>
            <option value="option5">100%</option>
          </select>
          </div>
        </div>
        </div>

        <div className="row">
          <div className="col-md-6">
          <h5> Filtrado Util</h5>
            <div className="mb-3">
              <label htmlFor="campo1" className="form-label">
                Peso
              </label>
              <input type="text" className="form-control" id="campo1" />
            </div>
            {/* Repite esto para los 20 campos de texto */}
            <div className="mb-3">
              <label htmlFor="campo20" className="form-label">
                Detalles
              </label>
              <input type="text" className="form-control" id="campo20" />
            </div>
          </div>
          <div className="col-md-6">
          <h5> Filtrado No Util</h5>
            <div className="mb-3">
              <label htmlFor="campo1" className="form-label">
                Peso
              </label>
              <input type="text" className="form-control" id="campo1" />
            </div>
            <div className="mb-3">
              <label htmlFor="campo2" className="form-label">
                Detalles
              </label>
              <input type="text" className="form-control" id="campo2" />
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
