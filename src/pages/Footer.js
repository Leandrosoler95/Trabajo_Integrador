import { Outlet, Link } from "react-router-dom";
import logo from '../Logo.png';
import imagen from '../Imagenes//Electricidad-Electronica.jpg';

const Footer = () => {
  return (
    <div className="footer">
      <ul className="nav-list">
          <lu>
            <Link className="link">QUIENES SOMOS</Link>
          </lu>
          <lu>
            <Link className="link">PREGUNTAS FRECUENTES</Link>
          </lu>
          <lu>
            <Link className="link">CONTACTO</Link>
          </lu>
      </ul>    
        
      <ul className="nav-center">
          <lu>
            <Link className="link">SUCURSALES</Link>
          </lu>
          <lu>
            <Link className="link">TERMINOS Y CONDICIONES</Link>
          </lu>
          <lu>
            <Link className="link">FORMAS DE ENVIO</Link>
          </lu>
      </ul> 

      <ul className="nav-right">
          <lu>
            <Link className="link">COMO COMPRAR</Link>
          </lu>
          <lu>
            <Link className="link">TRABAJA CON NOSOTROS</Link>
          </lu>
          <lu>
            <Link className="link">FORMAS DE PAGO</Link>
          </lu>
      </ul> 
    </div>
  )
};

export default Footer;