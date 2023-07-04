import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import "./Producto.css";

const Producto = ({ producto }) => {
  const { nombre, precio, fechaDeEntrega, precioSinIVA, img } = producto;

  return (
    <div className="product-container">
      <div className="product-info">
        82812-32 <span className="product-item-count">1 elemento</span>
      </div>
      <div className="product-details">
        <div className="product-image-container">
          <img src={img} alt={nombre} className="product-image" />
        </div>
        <div className="product-price-container">
          <span className="product-price">{precio}€</span>
          <br className="product-price-break" />
          <span className="product-price-vat">{precioSinIVA}€ sin IVA</span>
          <br className="product-vat-break" />
          <span className="product-delivery-time">
            <span className="product-delivery-icon">
              <FontAwesomeIcon icon={faCartPlus} />
            </span>{" "}
            {fechaDeEntrega}
          </span>
        </div>
        <div className="product-add-to-cart-container">
          <div className="product-quantity-container">
            <div className="product-quantity-input-container">
              <input
                type="number"
                name="cantidad"
                maxLength="12"
                min="1"
                defaultValue="1"
                title="Cantidad"
                className="product-quantity-input"
              />
              <button
                type="button"
                title="Añadir a la Cesta"
                className="product-add-to-cart-button"
              >
                <FontAwesomeIcon icon={faCartPlus} className="add-to-cart-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Producto;
