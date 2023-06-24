import './App.css';
import './Componentes/Componente1';
import BarraDeBusqueda from './Componentes/Componente1';
import Producto from './Componentes/Componente2';
import productosData from './Db/db.js';
import menuItems from './Componentes/Compontente3';
import DropdownMenu from './Componentes/Compontente3';

const App = () => {
  return (
    <>
      <div>

        <>
          <DropdownMenu />
          <BarraDeBusqueda />
          {/* Aquí va el código JSX */}
        </>
      </div><div>
        {productosData.map((producto) => (
          <Producto
            key={producto.Id}
            id={producto['Ref.']}
            producto={producto.Producto}
            resumen={producto.Resumen}
            precio={producto.Precio} />))}
      </div>
        ););}
    </>
  );
}

export default App;
