import React from 'react';

function Producto({ img, producto, resumen, precio }) {
    return (
        <div style={{ margin: '20px', border: '1px solid black', padding: '10px' }}>
            <img src={img} alt={producto} style={{ width: '100px', height: '100px' }}/>
            <h2>{producto}</h2>
            <p>{resumen}</p>
            <p>{precio}</p>
        </div>
    );
}

export default Producto;
