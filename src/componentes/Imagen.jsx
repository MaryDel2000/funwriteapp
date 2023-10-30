import React from 'react';

function Imagen(props) {
    const{imgUrl, imgAlt, imgWidth, imgMaxWidht, imgMargin, imgDisplay}=props;
  return (
    <img
    src={imgUrl} // Reemplaza con la ruta de tu imagen en grande
    alt={imgAlt}
    style={{ width: imgWidth, maxWidth: imgMaxWidht,  margin: '0 auto', display: 'block'  }}
  />
  );
}

export default Imagen;