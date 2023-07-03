import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import "./Producto.css";

const Producto = ({ producto }) => {
  const { nombre, precio, fechaDeEntrega, precioSinIVA, img } = producto;

  return (
    <div className="main-container">
      <div className="image-container">
        <a href="#" className="image-link">
          <img src={img} alt={nombre} className="image" />
        </a>
      </div>
      <div className="info-container">
        <h3 className="title">
          <a href="#" className="title-link">
            {nombre}
          </a>
        </h3>
      </div>
      <div className="item-container">
        <div className="item">
          <div className="item-info">
            <div className="item-details">
              <div className="item-code">
                Código de producto
                <span className="item-quantity">Cantidad de producto</span>
              </div>
              <div className="item-price-container">
                <div className="item-price">
                  <div className="item-image-container">
                    <img src={img} alt={nombre} className="item-small-image" />
                  </div>
                  <div className="item-price-info">
                    <span className="item-price-value">{precio}€</span>
                    <br className="item-price-break" />
                    <span className="item-price-vat">{precioSinIVA}€ s/iva</span>
                    <br className="item-vat-break" />
                    <span className="item-delivery-time">
                      <span className="item-delivery-icon"></span> {fechaDeEntrega}
                    </span>
                  </div>
                  <div className="item-add-to-cart-container">
                    <div className="item-quantity-container">
                      <div className="item-quantity-input-container">
                        <input
                          type="number"
                          name="cantidad"
                          maxLength="12"
                          min="1"
                          defaultValue="1"
                          title="Cantidad"
                          className="item-quantity-input"
                        />
                        <button
                          type="button"
                          title="Añadir a la Cesta"
                          className="item-add-to-cart-button"
                        >
                          <FontAwesomeIcon icon={faCartPlus} className="add-to-cart-icon" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Producto;
