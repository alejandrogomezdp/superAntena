import React, { useState, useEffect } from 'react';
import dataProductos from './Db/superantena';
import './Calculadora.css'; 
import { FaShoppingCart, FaArrowRight, FaArrowLeft, FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';

Modal.setAppElement('#root'); 

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

  const incrementarCantidad = (productoId) => {
    setCarrito(prevCarrito =>
      prevCarrito.map(item =>
        item.Id === productoId ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const decrementarCantidad = (productoId) => {
    setCarrito(prevCarrito =>
      prevCarrito.map(item =>
        item.Id === productoId && item.cantidad > 0 ? { ...item, cantidad: item.cantidad - 1 } : item
      )
    );
  };

  const eliminarDelCarrito = (productoId) => {
    setCarrito(prevCarrito => prevCarrito.filter(item => item.Id !== productoId));
  };

  const totalCarrito = () => {
    return carrito.reduce((total, item) => total + item.cantidad * item.Precio, 0);
  };

  const cambiarCategoria = (direccion) => {
    const indexActual = categorias.indexOf(categoria);
    if (direccion === "izquierda" && indexActual > 0) {
      setCategoria(categorias[indexActual - 1]);
    } else if (direccion === "derecha" && indexActual < categorias.length - 1) {
      setCategoria(categorias[indexActual + 1]);
    }
  };

  return (
    <div className="container">
      <img src="https://www.superantena.es/img/super-logo-1592402347.jpg" alt="" style={{width: '250px', height: '100px'}}/>
      <h1>Calculadora</h1>
      <div className="slider">
        <FaArrowLeft onClick={() => cambiarCategoria("izquierda")} style={{width: '50px', height: '50px',color: '#25afdd'}} />
        <img src={imagenActual} alt="SliderImagen" style={{width: '200px', height: '200px'}} />
        <FaArrowRight onClick={() => cambiarCategoria("derecha")} style={{width: '50px', height: '50px',color: '#25afdd'}} />
      </div>
      <h2>{categoria}</h2>
      <div className="productos">
        {dataProductos.filter(producto => producto.Categoria === categoria).map((producto) => (
          <div className="producto" key={producto.Id}>
            <div style={{position: 'absolute', top: '10px', left: '10px', color: 'blue'}}>{producto.Id}</div>
            <img src={producto.Img} alt={producto.Categoria} />
            <p className="price" style={{color: 'green'}}>{producto.Precio}€</p>
            <div className='plusalcarrito'>
              <button onClick={() => añadirAlCarrito(producto)}>Añadir al carrito</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{marginTop: '2em', marginBottom:'2em'}}  className="carrito">
        <Button onClick={() => setShowModal(true)}><FaShoppingCart style={{width: '25px', height: '25px'}} />Ver carrito ({carrito.length})</Button>
        <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)}>
          <h2>Carrito</h2>
          {carrito.map((item) => (
            <div key={item.Id}>
              <p>{item.Categoria} - {item.cantidad}x - {item.Precio}€</p>
              <FaMinus onClick={() => decrementarCantidad(item.Id)} />
              <FaPlus onClick={() => incrementarCantidad(item.Id)} />
              <button onClick={() => eliminarDelCarrito(item.Id)}>Eliminar <FaTrashAlt /></button>
            </div>
          ))}
          <h3>Total: {totalCarrito()}€</h3>
          <button onClick={() => setShowModal(false)}>Cerrar</button>
        </Modal>
      </div>
    </div>
  );
};

export default ComponenteCalculadora;
