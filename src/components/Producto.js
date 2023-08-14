import React, { useState } from "react"

const Producto = ({ id, nombre, imagen, precio, descripcion}) => {
    const [isSelected, setIsSelected ] = useState(false);

    return (
        <div  onClick={() => setIsSelected(!isSelected)}>
            { isSelected ? (
                <div className="producto seleccionado">
                    <h3 className="title">Descripcion del producto</h3>
                    <h3 className="descripcion">{descripcion}</h3>
                </div>
            ) : (
                <div className="producto">
                    <h2 className="nombre">{nombre}</h2>
                    <img className="imagen" alt="imagen" src={imagen}/>
                    <h3 className="precio">{precio}</h3>
                </div>
            )}
        </div>
    );
};

export default Producto;