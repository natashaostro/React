import React from "react";
import CartWidget from "./CardWidget";


const NavBar = () =>{
    return(
      <div className="container fondo2 ">
      <div className="container fondo2">
       <div className="row">
        <div className="col-g-6">
        <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src={"images/descarga.png"} alt={"AGN"} width={190}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Inicio">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Investigación">Investigación</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Visita Guiada">Visita Guiada</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Acceso a Becas">Acceso a Becas</a>
        </li>
      </ul>
    </div>
  </div>
  <div classNameName="col-md-6  ">
    <CartWidget/>
</div>
</nav>
</div>
</div>
</div>
</div> 

    )
}
export default NavBar;