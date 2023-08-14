import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="nav-list">
        <Link className="link">QUIENES SOMOS</Link>
        <Link className="link">PREGUNTAS FRECUENTES</Link>
        <Link className="link">CONTACTO</Link>
      </ul>    
        
      <ul className="nav-center">
        <Link className="link">SUCURSALES</Link>
        <Link className="link">TERMINOS Y CONDICIONES</Link>
        <Link className="link">FORMAS DE ENVIO</Link>
      </ul> 

      <ul className="nav-right">
        <Link className="link">COMO COMPRAR</Link>
        <Link className="link">TRABAJA CON NOSOTROS</Link>
        <Link className="link">FORMAS DE PAGO</Link>
      </ul> 
    </div>
  )
};

export default Footer;