import { Outlet, Link } from "react-router-dom";
import logo from '../Logo.png';

const Layout = () => {
  return (
    <div className="layout">
      <nav className="nav">
        <div className="logo">
          <img src={logo}  alt="logo" className="imagen"/>
          <h1 className="titulo">MISIOTRÓNICA</h1>
        </div> 
        <ul className="nav-list">
          
            <Link className="link" to="/">Home</Link>
 
            <Link className="link" to="/ventas">Ventas</Link>

            <Link className="link" to="/contacto">Contacto</Link>
     
            <Link className="link" to="/sobre-nosotros">Sobre Nosotros</Link>
    
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;