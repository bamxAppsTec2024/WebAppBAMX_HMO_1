import * as React from "react";
import styles from "./RegisterProduct.module.css";

export default function RegisterProduct() {
  const inputsArray = [
    {
      id: 0,
      label: "Nombre del Producto",
      type: "text",
      name: "name",
      placeholder: "Nombre del Producto",
    },
    {
      id: 2,
      label: "Fecha de Ingreso",
      type: "date",
      name: "date",
      placeholder: "Fecha de Ingreso",
    },
    {
      id: 3,
      label: "Peso",
      type: "number",
      name: "weight",
      placeholder: "Peso",
    },
    {
      id: 4,
      label: "Cantidad",
      type: "number",
      name: "quantity",
      placeholder: "Cantidad",
    },
    {
      id: 1,
      label: "Comestible",
      type: "radio",
      name: "isEdible",
      placeholder: "Comestible",
    },
    {
      id: 5,
      label: "Detalles",
      type: "textarea",
      name: "details",
      placeholder: "Detalles",
    },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["card"]}>
        <h1 className={styles["card-header"]}>Registro de Producto</h1>
        <p className={styles["card-body"]}>Ingrese los datos del producto ya filtrado</p>
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
                        id={input.name}
                        name={input.name}
                        value="true"
                        className={styles["radio-input"]}
                      />
                      <label className={styles["radio-label"]} htmlFor={input.name}>
                        Sí
                      </label>
                      <input
                        type={input.type}
                        id={input.name}
                        name={input.name}
                        value="false"
                        className={styles["radio-input"]}
                      />
                      <label className={styles["radio-label"]} htmlFor={input.name}>
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
                    className={styles["input"]}
                    placeholder={input.placeholder}
                  />
                </div>
              );
            })}
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
            />
          </div>
          <button className={styles["button"]} type="submit">
            Registrar Producto
          </button>
        </form>
      </div>
    </div>
  );
}
