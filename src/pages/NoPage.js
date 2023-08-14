import { Link } from "react-router-dom";

const NoPage = () => {
    return (
      <div className="NoPage">
        <h1 className="title"> Esta pagina no existe </h1>
        <Link className="link" to="/"> Ir al inicio </Link>
      </div>
    );
  };
  
  export default NoPage;
  