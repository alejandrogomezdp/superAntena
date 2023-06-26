import React from 'react';
import './Menu.css';

const Menu = () => {
  const menuData = [
    // {
    //   category: 'Mecanismos',
    //   subcategories: ['Mecanismos Simon', 'Simon 82', 'Simon 82 Nature', 'Simon Detail 82', 'Simon 82 Concept', 'Simon 27 Play y Neos', 'Simon 100', 'Simon 270', 'Simon 31', 'Simon 75', 'Simon 73 Loft', 'Simon 44 AQUA', 'Simon 500 CIMA', 'Mecanismos Niessen ABB', 'Niessen Zenit', 'Niessen Sky', 'Niessen SkyMoon', 'Niessen Olas', 'Niessen Arco', 'Mecanismos Schneider', 'Schneider New Unica', 'Schneider Elegance', 'Schneider D-Life', 'Schneider Mureva Styl', 'Schneider Sedna', 'Schneider Unica Top', 'Schneider UNICA Plus / Basic / Colors', 'Mecanismos Legrand', 'Legrand Niloé Step', 'Legrand Valena Next', 'Legrand Plexo', 'Legrand Niloé', 'Mecanismos Bticino', 'Bticino Living Light', 'Bticino Living Now', 'Mecanismos Jung', 'Jung LS990', 'Jung LS PLUS', 'Jung LS Design']
    // },
    // {
    //   category: 'Proteccion/Control',
    //   subcategories: ['Automáticos', 'Unipolares', 'Un Polo más Neutro', 'Bipolares', 'Tripolares', 'Tetrapolares', 'Diferenciales', 'Bipolares', 'Bipolares especiales', 'Tetrapolares', 'Tetrapolares especiales', 'Combinados Automáticos + Diferenciales', 'Automáticos + Diferenciales 1P+N', 'Relojes y Detectores', 'Detectores', 'Automáticos de Escalera', 'Interruptores Horarios', 'Contactores y Telerruptores', 'Contactores Modulares', 'Telerruptores', 'Limitador de sobretensiones', 'Limitadores combinados', 'Limitadores enchufables', 'Limitadores no enchufables', 'Fusibles y Portafusibles', 'Fusibles ZR', 'Fusibles D0', 'Fusibles AC', 'Bases Portafusibles', 'Accesorios Cuadros / Protecciones', 'Repartidores y Peines', 'Punteras y Terminales', 'Bornas y Bases de Carril']
    // },
    // {
    //   category: 'Cables',
    //   subcategories: ['Cable Unipolar 450/750 V', 'Cable Flexible Normal', 'Cable Flexible Libre Halógenos', 'Cable RZ1K 0,6/1KV', 'Cable Libre de Halógenos RZ1K 0,6/1KV', 'Manguera Libre de Halógenos RZ1-K 0,6/1KV', 'Manguera 300/500V', 'Manguera Plana 300/500V', 'Manguera Redonda 300/500V', 'Cable de Antena y Teléfono', 'Cable de Antena', 'Cable de Teléfono', 'Cables de Datos', 'Categoria 5', 'Categoria 6', 'Categoria 7', 'Fibra Óptica', 'Coaxial RG', 'Cables Especiales', 'Cables de Seguridad', 'Cables de Baja Tensión', 'Cables de Media Tensión']
    // },
    // {
    //   category: 'Iluminacion',
    //   subcategories: ['Downlights', 'Downlights LED', 'Downlights de Empotrar', 'Downlights de Superficie', 'Downlights Orientables', 'Paneles LED', 'Paneles LED Rectangulares', 'Paneles LED Cuadrados', 'Paneles LED Circulares', 'Focos y Proyectores', 'Focos de Carril', 'Proyectores Exteriores', 'Luminarias de Emergencia', 'Lámparas', 'Bombillas LED', 'Tubos LED', 'Lámparas de Descarga', 'Lámparas Fluorescentes', 'Lámparas Incandescentes', 'Lámparas de Halógenos', 'Lámparas Especiales', 'Iluminación Decorativa', 'Lámparas de Pie', 'Lámparas de Mesa', 'Lámparas de Techo', 'Lámparas de Pared', 'Apliques', 'Plafones', 'Tiras LED', 'Tiras LED 12V', 'Tiras LED 24V', 'Accesorios para Tiras LED']
    // },
    // {
    //   category: 'Climatizacion',
    //   subcategories: ['Aire Acondicionado', 'Aire Acondicionado Split', 'Aire Acondicionado Multi Split', 'Aire Acondicionado Conductos', 'Aire Acondicionado Cassette', 'Aire Acondicionado Columna', 'Aire Acondicionado Portátil', 'Accesorios Aire Acondicionado', 'Ventilación', 'Ventiladores de Techo', 'Ventiladores de Pie', 'Ventiladores de Mesa', 'Ventiladores de Torre', 'Ventiladores de Pared', 'Ventiladores de Suelo', 'Ventiladores de Sobremesa', 'Ventiladores de Caja', 'Ventiladores de Trabajo', 'Ventiladores de Columna', 'Ventiladores de Conducto', 'Ventiladores de Cocina', 'Calefacción', 'Radiadores', 'Calentadores', 'Estufas', 'Emisores Térmicos', 'Calderas', 'Termos', 'Convectores', 'Toalleros', 'Accesorios Climatización']
    // },
    // {
    //   category: 'Sonido y Video',
    //   subcategories: ['Audio', 'Altavoces', 'Microfonos', 'Auriculares', 'Reproductores MP3', 'Radios', 'Tocadiscos', 'Home Cinema', 'Barra de Sonido', 'Cadenas Hi-Fi', 'Amplificadores', 'Equipos DJ', 'Video', 'Televisores', 'Proyectores', 'Reproductores DVD', 'Reproductores Blu-Ray', 'Soportes TV', 'Soportes Proyectores', 'Cámaras de Video', 'Accesorios Audio y Video']
    // },
    // {
    //   category: 'Informatica',
    //   subcategories: ['Ordenadores', 'Portátiles', 'Sobremesa', 'All in One', 'Servidores', 'Monitores', 'Tablets', 'iPads', 'Android', 'Windows', 'Ebook Readers', 'Impresoras', 'Impresoras de Inyección de Tinta', 'Impresoras Láser', 'Impresoras 3D', 'Impresoras de Tickets', 'Impresoras de Etiquetas', 'Impresoras Fotográficas', 'Multifunción', 'Multifunción de Inyección de Tinta', 'Multifunción Láser', 'Scanners', 'Componentes', 'Procesadores', 'Placas Base', 'Memorias RAM', 'Discos Duros', 'Tarjetas Gráficas', 'Fuentes de Alimentación', 'Torres de Ordenador', 'Refrigeración', 'Periféricos', 'Teclados', 'Ratones', 'Altavoces', 'Auriculares', 'Micrófonos', 'Webcams', 'Accesorios Informática']
    // },
    // {
    //   category: 'Domotica y Seguridad',
    //   subcategories: ['Sistemas de Alarma', 'Cámaras de Seguridad', 'Sensores de Movimiento', 'Sensores de Humo', 'Sensores de Gas', 'Sensores de Agua', 'Sensores de Puerta/Ventana', 'Sirenas de Alarma', 'Controladores de Alarma', 'Cerraduras Electrónicas', 'Videoporteros', 'Interfonos', 'Timbres', 'Accesorios de Seguridad', 'Sistemas de Domótica', 'Controladores de Domótica', 'Sensores de Domótica', 'Actuadores de Domótica', 'Termostatos Inteligentes', 'Luces Inteligentes', 'Enchufes Inteligentes', 'Cerraduras Inteligentes', 'Cámaras Inteligentes', 'Altavoces Inteligentes', 'Asistentes de Voz', 'Accesorios de Domótica']
    // }
    // Puedes añadir más categorías y productos según sea necesario
  ];

  return (

    <><div className='dropdown'>
      <ul className='dropdown-content'>
      <li ><a href="https://www.ilumitec.es/mecanismos-simon">Mecanismos Simon</a></li>
      <li><a href="https://www.ilumitec.es/simon-82">Simon 82 </a></li>
      <li><a href="https://www.ilumitec.es/simon-82-nature">Simon 82 Nature </a></li>
      <li><a href="https://www.ilumitec.es/simon-detail-82">Simon Detail 82 </a></li>
      <li><a href="https://www.ilumitec.es/simon-82-concept">Simon 82 Concept </a></li>
      <li><a href="https://www.ilumitec.es/simon-27">Simon 27 Play y Neos </a></li>
      <li><a href="https://www.ilumitec.es/simon-100">Simon 100 </a></li>
      <li><a href="https://www.ilumitec.es/simon-270">Simon 270 </a></li>
      <li><a href="https://www.ilumitec.es/simon-31">Simon 31 </a></li>
      <li><a href="https://www.ilumitec.es/simon-75">Simon 75 </a></li>
      <li><a href="https://www.ilumitec.es/simon-73-loft" >Simon 73 Loft </a></li>
      <li><a href="https://www.ilumitec.es/simon-44-aqua" >Simon 44 AQUA </a></li>
      <li><a href="https://www.ilumitec.es/simon-500-cima">Simon 500 CIMA </a></li>
    </ul>
    <ul>
        <li ><a href="https://www.ilumitec.es/mecanismos-niessen-abb">Mecanismos Niessen ABB</a></li>
        <li><a href="https://www.ilumitec.es/niessen-zenit" >Niessen Zenit </a></li>
        <li><a href="https://www.ilumitec.es/niessen-sky" >Niessen Sky </a></li>
        <li><a href="https://www.ilumitec.es/niessen-skymoon" >Niessen SkyMoon </a></li>
        <li><a href="https://www.ilumitec.es/niessen-olas" >Niessen Olas </a></li>
        <li><a href="https://www.ilumitec.es/niessen-arco" >Niessen Arco </a></li>
      </ul>
      <div>
        </div>
        <ul>
        <li></li>
        <li><a href="https://www.ilumitec.es/schneider-new-unica" >Schneider New Unica </a></li>
        <li><a href="https://www.ilumitec.es/schneider-elegance" >Schneider Elegance </a></li>
        <li><a href="https://www.ilumitec.es/schneider-d-life" >Schneider D-Life </a></li>
        <li><a href="https://www.ilumitec.es/schneider-mureva-styl" >Schneider Mureva Styl </a></li>
        <li><a href="https://www.ilumitec.es/schneider-sedna" >Schneider Sedna </a></li>
        <li><a href="https://www.ilumitec.es/unica-top" >Schneider Unica Top </a></li>
        <li><a href="https://www.ilumitec.es/unica-plus" >Schneider UNICA Plus / Basic / Colors </a></li>
      </ul>
       <ul>
        <li><a href="https://www.ilumitec.es/mecanismos-legrand"></a></li >
        <li><a href="https://www.ilumitec.es/legrand-niloe-step" >Legrand Niloé Step </a></li>
        <li><a href="https://www.ilumitec.es/legrand-valena-next" >Legrand Valena Next </a></li>
        <li><a href="https://www.ilumitec.es/legrand-plexo" >Legrand Plexo </a></li>
        <li><a href="https://www.ilumitec.es/legrand-niloe" >Legrand Niloé </a></li>
      </ul >
      <div>
        </div>
        <ul>
        <li><a>Mecanismos Bticino</a></li><li><a href="https://www.ilumitec.es/bticino-living-light" >Bticino Living Light </a></li>
        <li><a href="https://www.ilumitec.es/bticino-living-now" >Bticino Living Now </a></li>
    </ul >
  <ul >
    <li></li>
        <li><a href="https://www.ilumitec.es/jung-ls990"> Jung LS990 </a></li>
        <li ><a href="https://www.ilumitec.es/jung-ls-plus" >Jung LS PLUS </a></li>
        <li ><a href="https://www.ilumitec.es/jung-ls-design" >Jung LS Design </a></li>
    </ul >
</div>
</>
  );
};

export default Menu;