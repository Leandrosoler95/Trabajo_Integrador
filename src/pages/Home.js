import { Link } from "react-router-dom";
import logo from '../Logo.png';
import productos from "../productos.js";

const Home = () => {
    return (
      <div className='home'>
       <b> <h1 className='titulo-home'>MISIOTRÓNICA</h1></b>
       <img src={logo} alt="logo" className="imagen"/>
       <Link className="link" to="/Ventas">
         <div className="coleccion">
            <div className="imagenes-coleccion">
              {productos.slice(0,8).map(p => {
                return <img className="imagen-coleccion" key={p.id} alt={p.nombre} src={p.imagen}/>
              })}
            </div>
              <h3> PRODUCTOS DESTACADOS </h3>
              <div className="imagenes-coleccion">
              {productos.slice(0,8).reverse().map(p => {
                return <img className="imagen-coleccion" key={p.id} alt={p.nombre} src={p.imagen}/>
              })}
            </div>
         </div>
       </Link>
       
      </div>
    );
  };
  
  export default Home;