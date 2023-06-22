import './App.css';
import './Componentes/Componente1';
import BarraDeBusqueda from './Componentes/Componente1';
import Producto from './Componentes/Componente2';
import productosData from './Db/db.js';

function App() {
  return (
    <>
      <div>
        <BarraDeBusqueda />
      </div>
      {/* // Aquí va el código JSX */}
      <div>
        {productosData.map((producto) => (
          <Producto
            key={producto.Id}
            id={producto.Id}
            producto={producto.Producto}
            resumen={producto.Resumen}
            precio={producto.Precio}
          />
        ))}
      </div>
    </>
  );
}

export default App;
