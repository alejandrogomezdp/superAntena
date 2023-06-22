import React from 'react';
import './Componente2.css';

function Producto({ id, img, producto, resumen, precio }) {
  return (
    <><div className="producto-card">
      <h2>
      {producto}
       (ID: {id})
       </h2>
      <div className=''>
        <p>{img}</p>
      <p>Resumen:Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s {resumen}</p>
        <button className='botonComprar'>Compra</button>
       <p>Precio: {precio}</p>
      </div>
    </div>
    </>
      );
}

      export default Producto;