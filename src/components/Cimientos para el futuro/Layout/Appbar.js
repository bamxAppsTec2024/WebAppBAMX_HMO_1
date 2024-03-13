function Appbar({ title, selected, signOutFunc = null }) {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand">
          {title}
        </a>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item mx-4">
              <a
                className={`nav-link ${selected == 0 ? "active" : ""}`}
                href="#"
              >
                Talleres
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${selected == 1 ? "active" : ""}`}
                href="#"
              >
                Ayuda
              </a>
            </li>
          </ul>
          <ul className="navbar-nav d-flex">
            <li className="nav-item">
              <a
                className={`nav-link me-4 ${selected == 2 ? "active" : ""}`}
                href="/cimientosparaelfuturo/login"
              >
                Colaboradores
              </a>
            </li>
            {signOutFunc !== null && (
              <li className="nav-item">
                <a
                  role="button"
                  className={`nav-link  ${selected == 2 ? "active" : ""}`}
                  onClick={signOutFunc}
                >
                  Cerrar sesión
                </a>
              </li>
            )}
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-sm-2"
              type="search"
              placeholder="Search"
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

export default Appbar;
