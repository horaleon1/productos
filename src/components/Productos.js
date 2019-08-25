import React, { Fragment } from 'react';
import ProductosLista from './ProductosLista';


export default function Productos( {productos, guardarRecargarProductos} ) {
  return (
    <Fragment>
      <h1 className="text-center"> Productos </h1>
      <ul className="list-group mt-5">
          { productos.map(producto => (
             <ProductosLista 
             producto={ producto }
             key={ producto.id }
             guardarRecargarProductos={guardarRecargarProductos}
             />
          ))}
      </ul>
    </Fragment>
  )
}


