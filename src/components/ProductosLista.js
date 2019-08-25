import React from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import Swal from "sweetalert2";

export default function ProductosLista({ producto, guardarRecargarProductos }) {
  const eliminarProducto = id => {
    console.log("eliminando", id);
    Swal.fire({
      title: "¿Estas seguro?",
      text: "Un platillo eliminado no se puede recuperar",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar"
    }).then(async result => {
      if (result.value) {
        try {
          const url = `http://localhost:4000/restaurant/${id}`;

          const resultado = await axios.delete(url);

          if (resultado.status === 200) {
            Swal.fire("Eliminado!", "El platillo de ha eliminado.", "success");
          }
          //consultar la api nuevmaente
          guardarRecargarProductos(true);
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <li
      categoria={producto.categoria}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <p>
        {producto.nombrePlatillo}
        <span className="font-weight-bold"> ${producto.precioPlatillo}</span>
      </p>
      <div>
        <Link
          to={`/productos/editar/${producto.id}`}
          className="btn btn-success mr-2"
        >
          Editar
        </Link>

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => eliminarProducto(producto.id)}
        >
          Eliminar &times;
        </button>
      </div>
    </li>
  );
}
