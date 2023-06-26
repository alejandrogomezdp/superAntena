import './App.css';
import BarraDeBusqueda from './Componentes/Componente1';
import productosData from './Componentes/superantena_db';
import Menu from './Menu';
import Calculadora from './Calculadora.js';
import './Calculadora.css';

function App (){
  return (
    <>
      <div>
        <Calculadora />
        <BarraDeBusqueda />
      </div>
      {/* Aquí va el código JSX */}
      {/* <div className="producto-container">
        {productosData.map(producto => (
          <div key={producto.IdProducto} className="producto-card">
            <h2 className="producto-titulo">{producto.Cabecera}</h2>
            <img src={producto.IdProducto} alt={producto.Cabecera} className="producto-img" />
            <p className="producto-resumen">{producto.Resumen}</p>
            <p className="producto-precio">{producto.Precio}</p>
            <button className="botonComprar">Añadir</button>

          </div>
        ))}
      </div> */}
    </>
  );
}

export default App;

