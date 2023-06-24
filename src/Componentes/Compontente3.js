import React from 'react';
import './Componente3.css';

const menuItems = {
  "Mecanismos": {
    "Mecanismos_Simon": [
      "Simon_82",
      "Simon_82_Nature",
      "Simon_Detail_82",
      "Simon_82_Concept",
      "Simon_27_Play_y_Neos"
      // Agregar más aquí...
    ],
    "Mecanismos_Niessen_ABB": [
      "Niessen_Zenit",
      "Niessen_Sky",
      "Niessen_SkyMoon",
      "Niessen_Olas",
      "Niessen_Arco"
      // Agregar más aquí...
    ],
    "Mecanismos_Schneider": [
      "Schneider_New_Unica",
      "Schneider_Elegance",
      "Schneider_D_Life",
      "Schneider_Mureva_Styl",
      "Schneider_Sedna"
      // Agregar más aquí...
    ],
    // Agregar más categorías aquí...
  },
  "Proteccion/Control": {
    // Agregar elementos de submenú aquí...
  },
  "Cables": {
    // Agregar elementos de submenú aquí...
  },
  "Material_Instalación": {
    // Agregar elementos de submenú aquí...
  }
  // Agregar más categorías principales aquí...
}

const DropdownMenu = () => {
  return (
    <nav className="menu">
      <ul>
        {Object.keys(menuItems).map((category) => (
          <li className="menu-category" id={category}>
            {category.replace(/_/g, ' ')}
            <ul>
              {Object.keys(menuItems[category]).map((subcategory) => (
                <li className="menu-subcategory" id={subcategory}>
                  {subcategory.replace(/_/g, ' ')}
                  <ul>
                    {menuItems[category][subcategory].map((item) => (
                      <li className="menu-item" id={item}>{item.replace(/_/g, ' ')}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DropdownMenu;