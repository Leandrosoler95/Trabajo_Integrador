function ordernarAZ( a, b ) {
    if ( a.nombre < b.nombre ){
      return -1;
    }
    if ( a.nombre > b.nombre ){
      return 1;
    }
    return 0;
  }
  
function ordernarZA( a, b ) {
    if ( a.nombre < b.nombre ){
      return 1;
    }
    if ( a.nombre > b.nombre ){
      return -1;
    }
    return 0;
  }
  
function ordernarMenorPrecio( a, b ) {
    if ( a.precio < b.precio ){
      return -1;
    }
    if ( a.precio > b.precio ){
      return 1;
    }
    return 0;
}
  
function ordernarMayorPrecio( a, b ) {
    if ( a.precio < b.precio ){
      return 1;
    }
    if ( a.precio > b.precio ){
      return -1;
    }
    return 0;
}

export { ordernarAZ, ordernarZA, ordernarMenorPrecio, ordernarMayorPrecio };