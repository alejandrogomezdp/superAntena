import React, { useState } from 'react';
import dataProductos from './Db/db_calc';
import './Calculadora.css'; 
import { FaShoppingCart } from 'react-icons/fa';

const ComponenteCalculadora = () => {
  const [carrito, setCarrito] = useState([]);

  const añadirAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const calcularTotal = () => {
    return carrito.reduce((acc, producto) => acc + producto.Precio, 0);
  };

  return (
    <div className="container">
      
      {dataProductos.map(producto => (
        <div className="nested" key={producto.Id}>
          <div className="text-right line-height">
            <div className="box">
              <div className="header-text">{producto.Id}</div>
              <div className="nested">
                <div className="flex-container">
                  <div className="image-container">
                    <img className="image" src={producto.Img} alt=""></img>
                  </div>
                  <div className="price">
                    <span className="price-big">{producto.Precio}€</span>
                    <span className="price-small">{producto.PrecioSinIva}€ s/iva</span>
                    <span className="delivery-info">24 horas</span>
                  </div>
                  <div className="form">
                    <div className="table">
                      <div className="input-container">
                        <input type="number" name="cantidad[]" maxLength="12" min="1" defaultValue="1" title="Cantidad" className="quantity"></input>
                        <button type="button" title="Añadir a la Cesta" className="button" onClick={() => añadirAlCarrito(producto)}>Añadir a la Cesta</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="carrito">
        <FaShoppingCart size="3em" color="green" />
        <span>{carrito.length}</span>
        <span>{calcularTotal()}€</span>
      </div>
    </div>
  );
};

export default ComponenteCalculadora;
