import { Link } from "react-router-dom";
import logo from '../Logo.png';
import Producto from "../components/Producto";
import productos from "../productos.js";

const Home = () => {
    return (
      <div className='home'>
       <b> <h1 className='titulo-home'>MISIOTRÓNICA</h1></b>
       <img src={logo} className="imagen"/>
       <Link className="link" to="/Ventas">
         <div className="coleccion">
            <div className="imagenes-coleccion">
              {productos.map(p => {
                return <img className="imagen-coleccion" src={p.imagen}/>
              })}
            </div>
              <h3> PRODUCTOS DESTACADOS </h3>
              <div className="imagenes-coleccion">
              {productos.reverse().map(p => {
                return <img className="imagen-coleccion" src={p.imagen}/>
              })}
            </div>
         </div>
       </Link>
       
      </div>
    );
  };
  
  export default Home;