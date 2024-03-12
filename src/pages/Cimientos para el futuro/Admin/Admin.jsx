import { useState } from "react";
import app from "../../../firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const auth = getAuth(app);
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();

  onAuthStateChanged(auth, function (firebaseUser) {
    if (firebaseUser) {
      setUser(firebaseUser);
    } else {
      setUser(null);
    }
  });

  if (user == undefined) {
    return <h1>tuki?</h1>;
  } else if (!user) {
    navigate("/cimientosparaelfuturo/login");
  }
  return (
    <h1>TUKIIIIIIIIIIIIIIIIIIIIIIIIIIII {user.email}</h1>
  );
}
