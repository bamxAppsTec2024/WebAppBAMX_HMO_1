import './App.css';
import { router } from "./index.js";
import Formulario from './components/Formulario';
import Navbar from './components/Navbar';


export default function App() {
  return (
    <>
      <Navbar />
      <Formulario />
    </>
  );
}