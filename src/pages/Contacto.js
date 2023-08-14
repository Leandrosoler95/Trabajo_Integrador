const Contacto = () =>{
    return(
      <div className="form">
        <h1 className="titulo-contacto">CONTACTANOS</h1>
        <form className="formulario">
          <p><input className="campo-texto" id="nombre" type="text" name="nombre" placeholder="Nombre" maxLength="20" required="" /> </p>
          <p><input className="campo-texto" id="apellido" type="text" name="apellido" placeholder="Apellido" maxLength="20" required="" /> </p>
          <p><input className="campo-texto" id="numero" type="text" name="numero" placeholder="Numero de telefono" maxLength="20" required="" /> </p>
          <p><input className="campo-texto" id="email" type="email" name="email" placeholder="Su email" maxLength="50" required="" /></p>
          <p><textarea className="campo-texto" id="mensaje" rows="4" cols="30" required="" placeholder="Mensaje" /></p>
          <input type="reset" value="Limpiar" className="borrar" />
          <input type="submit" value="Enviar" className="submit" />
        </form>
      </div>
    );
  };
  

  export default Contacto;