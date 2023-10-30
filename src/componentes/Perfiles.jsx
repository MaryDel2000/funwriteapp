import { Navigate } from 'react-router-dom';

function Perfiles(props) {
  const { token, init } =  props
  init()
  if (!token) {
    // El usuario no está autenticado, redirigir a la página de inicio de sesión
    return <Navigate to="/login" />;
  }

  // Si el usuario está autenticado, mostrar la página de perfiles
  return (
    <div>
      <h1>Perfiles</h1>
      {/* Contenido de la página de perfiles */}
    </div>
  );
}

export default Perfiles