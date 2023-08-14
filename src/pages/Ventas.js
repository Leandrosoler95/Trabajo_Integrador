import React, { useState } from "react";
import Producto from "../components/Producto";
import productos from "../productos.js";

const Ventas = () => {

  const [productosFiltrados, setProductosFiltrados] = useState(productos);
  
  const filtrarProductos = (texto) => {
    setProductosFiltrados(productos.filter(p => p.nombre.toLowerCase().includes(texto.toLowerCase())));
  }

  return (
    <div className="ventas">
      <div className="header">
        <h1 className="title">PRODUCTOS</h1>
        <input className="filter" type="text" placeholder="Buscar producto" onChange={(e) => filtrarProductos(e.target.value)}/>
      </div>
      { productosFiltrados.length > 0 ? // Pregunto si hay productos filtrados (? -> if)
        // Si hay, muestro la lista de productos
        <div className="lista-de-productos"> 
          { productosFiltrados.map(p => {
            return <Producto key={p.id} nombre={p.nombre} precio={p.precio} imagen={p.imagen}/>
          })}
        </div>
      :
        // Sino, muestro mensaje (: -> else)
        <div className="sin-producto">
          <h3 className="subtitulo"> No hay prductos</h3>
        </div>
      }
    </div>
  )
};
  
  export default Ventas;
  