function Appbar({ title }) {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Talleres
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Ayuda
              </a>
            </li>
          </ul>
          <ul className="navbar-nav d-flex">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Colaboradores
              </a>
            </li>
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