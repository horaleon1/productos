import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Productos from "./components/Productos";
import EditarProducto from "./components/EditarProducto";
import AgregarProducto from "./components/AgregarProducto";
import Producto from "./components/Producto";
import axios from "axios";

function App() {
  const [productos, guardarProductos] = useState([]);
  const [recargarProductos, guardarRecargarProductos ] = useState(true);




  useEffect(() => {
    const consultarApi = async () => {
      //consultar la api de json-server
      const resultado = await axios.get("http://localhost:4000/restaurant");

      guardarProductos(resultado.data);
    };
    consultarApi();

    //Cambiar a false la recarga de los productos
    guardarRecargarProductos(false);
  },[recargarProductos]);

  return (
    <Router>
      <Header />
      <main className="container mt-5">
        <Switch>
          <Route exact path="/productos" render = { () => (
            <Productos productos={ productos }/>
          )} />
          <Route exact path="/nuevo-producto" render={ () => (
             <AgregarProducto
             guardarRecargarProductos={guardarRecargarProductos}
            />
          )}/>
          <Route exact path="/productos/:id" component={Producto} />
          <Route
            exact
            path="/productos/editar/:id"
            component={EditarProducto}
          />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
