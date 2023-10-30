import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Navigate } from 'react-router-dom'; // Importa Navigate

export default function Login({ onLogin, redirectPath }) {
  // Usar un solo estado para el formulario
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Estado para redireccionar
  const [redirectTo, setRedirectTo] = useState(null);

  // Función para manejar los cambios en los campos del formulario
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // Función para validar el formulario
  function validateForm() {
    return formData.username.length > 0 && formData.password.length > 0;
  }

  // Función para manejar el envío del formulario
  function handleSubmit(event) {
    event.preventDefault();
    // Aquí puedes realizar la lógica de inicio de sesión
    // Puedes acceder a los valores en formData.username y formData.password

    // Supongamos que aquí verificamos las credenciales (debes implementar la lógica real)
    if (formData.username === "usuario" && formData.password === "contrasenia") {
      onLogin("1234");
      if(redirectPath){
        setRedirectTo(redirectPath); // Actualiza el estado de redirección
      } else {
        setRedirectTo("/"); // Actualiza el estado de redirección
      }
    } else {
      alert("Credenciales incorrectas");
    }
  }

  // Verifica si debes redirigir y, si es así, realiza la redirección
  if (redirectTo) {
    return <Navigate to={redirectTo} />;
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username">
          <Form.Label>username</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}
