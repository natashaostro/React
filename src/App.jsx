import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Error404 from "./componentes/Error404";
import Footer from "./componentes/Footer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/NavBar";
import PromocionApp from "./componentes/PromocionApp";





function App (){
  return(
  <div className="container-fluid">
    <BrowserRouter>
    <NavBar/>
    <Routes> 
      <Route path={"/"} element={<ItemListContainer />} />
      <Route path={"/categoria/:id"} element={<ItemListContainer />} />
      <Route path={"/item/:id"} element= {<ItemDetailContainer />} />
      <Route path={"*"} element={<Error404/>}/>
    </Routes>
    <PromocionApp/>
    <Footer/>
    </BrowserRouter>
</div>
  );
}

export default App;
