import React from 'react';
import Imagen from './Imagen';

function Inicio() {
  const estiloTitulo = {
    fontFamily: 'amita',
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold', //peso de la fuente
  };

  return (
    <div>
      <Imagen imgUrl="/logotipo.png" // ruta de tu imagen
        imgAlt="Logotipo FunWrite"
        imgWidth= '35%'
        imgMaxWidth= '500px'
        />
       <h1 style={estiloTitulo}>Bienvenido a nuestra aplicación</h1>
    </div>
  );
}

export default Inicio;
