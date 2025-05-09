import React from 'react';
import img1 from '../images/mclaren.png';
import img2 from '../images/champions-18-19.png';
import img3 from '../images/coffee.png';

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery-item"><img src={img1} alt="Lando Norris; 2025 Australian Grand Prix" /></div>
      <div className="gallery-item"><img src={img2} alt="Norwich City; 2018/19 EFL Championship winners" /></div>
      <div className="gallery-item"><img src={img3} alt="A mug of coffee" /></div>
    </div>
  );
};

export default Gallery;