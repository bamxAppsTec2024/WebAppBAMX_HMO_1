import styles from "./Login.module.css";
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../../firebase";
import { useNavigate } from "react-router-dom";

function LoginComponent() {
  const auth = getAuth(app);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Handle successful login (e.g., navigate to a different page)
      navigate("/cimientosparaelfuturo/admin");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <main>
        <form onSubmit={handleLogin}>
          <legend>Iniciar sesión</legend>

          <div>
            <label for="Email" class="form-label mt-4">
              Correo electrónico
            </label>
            <input
              type="email"
              class="form-control"
              id="Email"
              aria-describedby="emailHelp"
              placeholder="ejemplo@dominio.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label for="Password" class="form-label mt-4">
              Contraseña
            </label>
            <input
              type="password"
              class="form-control"
              id="Password"
              placeholder="Contraseña"
              autocomplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className="invalid-feedback">{error}</div>}
          <button type="submit" class="btn btn-primary mt-4">
            Iniciar sesión
          </button>
        </form>
      </main>
    </div>
  );
}

export default LoginComponent;
