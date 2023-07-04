import Producto from "./Componentes/Producto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './App.css'
import './Componentes/Producto.css'
import productosData from "./Db/db.js";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  
  return (
    <>
      <div>
        {productosData.map((producto) => (
          <Producto key={producto.id} producto={producto} mensaje={"Oops, parece que la respuesta se cortó, aquí está la parte que faltaba:"} />
        ))}
      </div>
    </>
  );
};

export default App;
