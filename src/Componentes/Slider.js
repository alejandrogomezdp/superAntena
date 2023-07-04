import React, { useState } from "react";
import "./Slider.css";
import Producto from "./Producto";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import productos from "../Db/db";

const Slider = () => {
  const [index, setIndex] = useState(0);
  
  const handlePrev = () => setIndex((oldIndex) => oldIndex === 0 ? productos.length - 1 : oldIndex - 1);
  const handleNext = () => setIndex((oldIndex) => oldIndex === productos.length - 1 ? 0 : oldIndex + 1);
  
  return (
    <div className="slider-container">
      <FontAwesomeIcon icon={faChevronLeft} onClick={handlePrev} className="slider-arrow-left"/>
      <Producto producto={productos[index]}/>
      <FontAwesomeIcon icon={faChevronRight} onClick={handleNext} className="slider-arrow-right"/>
    </div>
  );    
};

export default Slider;
