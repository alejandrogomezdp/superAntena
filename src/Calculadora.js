import dataProductos from './Db/db_calc';
import './Calculadora.css'; 

const ComponenteCalculadora = () => {

  return (
    <div className="container">
      {dataProductos.map(product => (
        <div className="nested" key={product.Id}>
          <div className="text-right line-height">
            <div className="box">
              <div className="header-text">{product.Id}</div>
              <div className="nested">
                <div className="flex-container">
                  <div className="image-container">
                    <img className="image" src={product.Img} alt="" />
                  </div>
                  <div className="price">
                    <span className="price-big">{product.Precio}€</span>
                    <span className="price-small">{product.PrecioSinIva}€ s/iva</span>
                    <span className="delivery-info">24 horas</span>   
                  </div>
                  <div className="form">
                    <div className="table">
                      <div className="input-container">
                        <input type="number" name={`cantidad[${product.Id}]`} maxLength="12" min="1" defaultValue="1" title="Cantidad" id={`ControlID-${product.Id}`} className="quantity" />
                        <button type="button" title="Añadir a la Cesta" id={`ControlID-${product.Id + 1}`} className="button">Añadir a la Cesta</button>
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
