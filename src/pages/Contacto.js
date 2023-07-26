const Contacto = () =>{
    return(
      <div className="form">
        <h1 className="titulo-contacto">CONTACTANOS</h1>
        <form className="formulario">
          <p><input class="campo-texto" id="nombre" type="text" name="nombre" placeholder="Nombre" maxlength="20" required="" /> </p>
          <p><input class="campo-texto" id="apellido" type="text" name="apellido" placeholder="Apellido" maxlength="20" required="" /> </p>
          <p><input class="campo-texto" id="numero" type="text" name="numero" placeholder="Numero de telefono" maxlength="20" required="" /> </p>
          <p><input class="campo-texto" id="email" type="email" name="email" placeholder="Su email" maxlength="50" required="" /></p>
          <p><textarea class="campo-texto" id="mensaje" rows="4" cols="30" required="" placeholder="Mensaje" /></p>
          <input type="reset" value="Limpiar" class="borrar" />
          <input type="submit" value="Enviar" class="submit" />
        </form>
      </div>
    );
  };
  

  export default Contacto;