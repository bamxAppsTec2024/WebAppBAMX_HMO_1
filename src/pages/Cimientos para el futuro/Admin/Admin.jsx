import { useEffect, useState } from "react";
import app from "../../../firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Appbar from "../../../components/Cimientos para el futuro/Layout/Appbar";

export default function Admin() {
  const [user, setUser] = useState(undefined);
  const auth = getAuth(app);
  const navigate = useNavigate();

  const AdminSignOut = async () => {
    await signOut(auth);
    navigate("/cimientosparaelfuturo");
  };

  onAuthStateChanged(auth, function (firebaseUser) {
    if (firebaseUser) {
      setUser(firebaseUser);
    } else {
      setUser(null);
    }
  });

  useEffect(() => {
    if (user === null) {
      console.log("tuki mal");
      navigate("/cimientosparaelfuturo/login");
    }
  }, [user]);

  if (user == undefined) {
    console.log("tuki 3");
    return (
      <>
        <Appbar title={"Cimientos para el futuro"} selected={2} />
        <h2 role="h1">Cargando...</h2>
      </>
    );
  }

  return (
    <div>
      <Appbar
        title={"Cimientos para el futuro"}
        selected={2}
        signOutFunc={AdminSignOut}
      />
      <main>
        <form className="d-flex my-2" style={{ width: "30rem" }}>
          <input
            className="form-control me-sm-2"
            type="search"
            placeholder="Nombre del curso"
            // onChange={(event) => setCourseSearch(event.target.value)}
          />
          <button className="btn btn-secondary my-2 my-sm-0" type="button">
            Buscar
          </button>
        </form>
      </main>
    </div>
  );
}
