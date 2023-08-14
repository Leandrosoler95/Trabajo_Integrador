import React from "react"

const Producto = ({ nombre, imagen, precio }) => {

    return (
        <div className="producto">
            <h2 className="nombre">{nombre}</h2>
            <img className="imagen" alt="imagen" src={imagen}/>
            <h3 className="precio">{precio}</h3>
        </div>
    );
};

export default Producto;