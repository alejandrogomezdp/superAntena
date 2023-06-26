import React from 'react';
import './Category.css';

const Category = ({ category, products }) => {
  return (
    <li className="wsmenu-list">
      <a href="#" className="navtext">{category}</a>
      <div className="wsshoptabing wsshoptabingwp clearfix">
        <ul className="wstabitem clearfix">
          {products.map((product, index) => (
            <li key={index} className="wsshoplink-active">
              <a href="#" className="wstabitem">{product}</a>
              <span className="wstitemright clearfix">
                <img src="image.jpg" alt="Product" />  {/* Aquí puedes añadir las imágenes de los productos */}
                <div className="wstitemrightbottom clearfix">
                  <h5 className="wstmenutitle">{product}</h5>
                  <h6 className="wstmenutitle">{product} Description</h6>  {/* Aquí puedes añadir las descripciones de los productos */}
                  <div className="wstmenudesc">A detailed description about {product}.</div>  {/* Aquí puedes añadir descripciones detalladas de los productos */}
                </div>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default Category;
