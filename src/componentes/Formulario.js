import React from 'react';

const Formulario = () => {
    return (
        <div className="container">
            <h1>Formulario con 20 campos de texto</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="campo1" className="form-label">Campo 1</label>
                    <input type="text" className="form-control" id="campo1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="campo2" className="form-label">Campo 2</label>
                    <input type="text" className="form-control" id="campo2" />
                </div>
                {/* Repite esto para los 20 campos de texto */}
                <div className="mb-3">
                    <label htmlFor="campo20" className="form-label">Campo 20</label>
                    <input type="text" className="form-control" id="campo20" />
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
}

export default Formulario;
