import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar2 from './componentes/Navbar2';
import Sidebar from './componentes/Sidebar';
import Inicio from './componentes/Inicio';
import Historias from './componentes/Historias';
import AcercaDe from './componentes/AcercaDe';
import Perfiles from './componentes/Perfiles';
import Footer from './componentes/Footer';
import Login from './componentes/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [token, setToken] = useState(null);
  const [redirectPath, setRedirectPath] = useState(null);

  const handleAuthentication = (mytoken) => {
    setToken(mytoken)
    console.log(redirectPath)
  };

  return (
    <Router>
      <Navbar2 />
      <div className="container" style={{ flexGrow: 9999 }}>
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" exact element={<Inicio />} />
            <Route path="/historias" element={<Historias />} />
            <Route path="/acerca-de" element={<AcercaDe />} />
            <Route path="/perfiles" element={<Perfiles token={token} init={() => {
              setRedirectPath("/perfiles")
            }} /> } />
            <Route path="/login" element={<Login onLogin={handleAuthentication} redirectPath={redirectPath} />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
