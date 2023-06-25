import './App.css';
import BarraDeBusqueda from './Componentes/Componente1';
import productosData from './Componentes/superantena_db';

function App (){
  return (
    <>
      <div>
        <BarraDeBusqueda />
      </div>
      {/* Aquí va el código JSX */}
      <div className="producto-container">
        {productosData.map(producto => (
          <div key={producto.IdProducto} className="producto-card">
            <img src={producto.IdProducto} alt={producto.Cabecera} className="producto-img" />
            <h2 className="producto-titulo">{producto.Cabecera}</h2>
            <p className="producto-resumen">{producto.Resumen}</p>
            <p className="producto-precio">{producto.Precio}</p>
            <button className='botonComprar'>Compra</button>

          </div>
        ))}
      </div>
    </>
  );
}

export default App;

