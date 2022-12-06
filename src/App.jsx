import React from "react";
import Footer from "./componentes/Footer";
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/NavBar";
import PromocionApp from "./componentes/PromocionApp";

function App (){
  return(
  <div className="container-fluid">
    <NavBar/>
    <ItemListContainer greeting={"Trabajamos para garantizar un acceso democrático y federal a los documentos que hacen a la historia, la memoria y los derechos del Pueblo argentino."}/>
    <PromocionApp/>
    <Footer/>
</div>
  )
}
export default App;