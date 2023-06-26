import React, { useState, useEffect } from 'react';
import dataProductos from './Db/db_calc copy';
import './Calculadora.css'; 
import { FaShoppingCart, FaArrowRight, FaArrowLeft, FaTrashAlt } from 'react-icons/fa';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';


Modal.setAppElement('#root'); // Este código es necesario para la accesibilidad

const ComponenteCalculadora = () => {
  const [carrito, setCarrito] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [categoria, setCategoria] = useState("Categoría 1");
  const [imagenActual, setImagenActual] = useState("https://www.ilumitec.es/imagenes/mini/marco-blanco-blanco-simon-82.jpg");
  const categorias = ["Categoría 1", "Categoría 2"];

  useEffect(() => {
    const primerProductoDeCategoria = dataProductos.find(producto => producto.Categoria === categoria);
    if (primerProductoDeCategoria) {
        setImagenActual(primerProductoDeCategoria.Img);
    }
  }, [categoria]);

  const añadirAlCarrito = (producto) => {
    setCarrito(prevCarrito => {
      const exists = prevCarrito.find(item => item.Id === producto.Id);

      if (exists) {
        return prevCarrito.map(item =>
          item.Id === producto.Id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      } else {
        return [...prevCarrito, { ...producto, cantidad: 1 }];
      }
    });
  };

  const cambiarCategoria = (direccion) => {
    const indexActual = categorias.indexOf(categoria);
    if (direccion === "izquierda" && indexActual > 0) {
      setCategoria(categorias[indexActual - 1]);
    } else if (direccion === "derecha" && indexActual < categorias.length - 1) {
      setCategoria(categorias[indexActual + 1]);
    }
  }

  // ...resto del código...

  return (
    <div className="container">
      <img src="	https://www.superantena.es/img/super-logo-1592402347.jpg" alt="" style={{width: '250px', height: '100px'}}/>
      <h1>Calculadora</h1>
      <div className="slider">
        <FaArrowLeft style={{color:'25afdd'}} onClick={() => cambiarCategoria("izquierda")} style={{width: '50px', height: '50px',color: '#25afdd'}} />
        <img src={imagenActual} alt="SliderImagen" style={{width: '200px', height: '200px'}} />
        <FaArrowRight style={{color:'25afdd'}} onClick={() => cambiarCategoria("derecha")} style={{width: '50px', height: '50px',color: '#25afdd'}}/>
      </div>
      
      {dataProductos.filter(producto => producto.Categoria === categoria).map(producto => (
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
    </div>
  );
};

export default ComponenteCalculadora;
