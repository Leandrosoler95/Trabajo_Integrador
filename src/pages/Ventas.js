import React, { useState } from "react";
import Select from 'react-select';
import Producto from "../components/Producto";
import productos from "../productos.js";
import { ordernarAZ, ordernarZA, ordernarMayorPrecio, ordernarMenorPrecio } from "../utils/ordenamientos";

const Ventas = () => {

  const [productosFiltrados, setProductosFiltrados] = useState(productos);
  const [inputFilter, setInputFilter] = useState("");
  
  const options = [
    { value: 1, label: 'Ordenar A-Z' },
    { value: 2, label: 'Ordenar Z-A' },
    { value: 3, label: 'Mayor Precio' },
    { value: 4, label: 'Menor Precio' },
  ]; 

  const onChangeInputFilter = (texto) => {
    setInputFilter(texto)
    filtrarProductos(texto);
  };

  const filtrarProductos = (texto) => {
    setProductosFiltrados(productos.filter(p => p.nombre.toLowerCase().includes(texto.toLowerCase())));
  };

  const ordenarProductos = async (value) => {
    // Selecciono el ordenamiento deseado
    var ordenamiento;
    switch (value) {
      case 1:
        ordenamiento = ordernarAZ;
        break;
      case 2:
        ordenamiento = ordernarZA;
        break;
      case 3:
        ordenamiento = ordernarMayorPrecio;
        break;
      case 4:
        ordenamiento = ordernarMenorPrecio;
        break;
      default:
        ordenamiento = ordernarAZ;
        break;
    };
    // Ordeno segun el ordenamiento que selecione
    setProductosFiltrados(await productos.sort( ordenamiento ));
    // Vuelvo a filtrar usando el valor del test input
    filtrarProductos(inputFilter);
  }

  return (
    <div className="ventas">
      <div className="header">
        <h1 className="title">PRODUCTOS</h1>
        <div className="filters">
          <input className="filter" type="text" placeholder="Buscar producto" value={inputFilter} onChange={(e) => onChangeInputFilter(e.target.value)}/>
          <Select
            isSearchable={false}
            placeholder="Ordenar por"
            onChange={(e) => ordenarProductos(e.value)}
            options={options}
          />
        </div>
      </div>
      { productosFiltrados.length > 0 ? // Pregunto si hay productos filtrados (? -> if)
        // Si hay, muestro la lista de productos
        <div className="lista-de-productos"> 
          { productosFiltrados.map(p => {
            return <Producto id={p.id} key={p.id} nombre={p.nombre} descripcion={p.descripcion} precio={p.precio} imagen={p.imagen}/>
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
  