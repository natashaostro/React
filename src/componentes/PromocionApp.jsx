import React from "react";


const PromocionApp= () =>{
  return(
    <div className="container-fluid azul">
  <div className="row">
   <div className="col-md-6 text-center">
   <p><a href="https://www.argentina.gob.ar/interior/archivo-general-de-la-nacion/encuentros-y-conversatorios" target={"_blank"} rel="noreferrer"><img src={"images/agn5.jpg"} alt={"Curso"} width={480}/> </a></p>
   <p>Presione la imagen para acceder a más información sobre</p><h2>Visitas Guiadas</h2>
   </div>

   <div className="col-md-6 text-center">
   <p ><a href="https://www.argentina.gob.ar/interior/archivo-general/estado-de-fondos" target={"_blank"} rel="noreferrer"><img src={"images/agn.jpg"} alt={"Data"} width={480}/> </a></p>
   <p>Presione la imagen para acceder a más información sobre</p><h2>Investigá con Nosotros</h2>
   </div>
  </div>
  </div>
  )
}
export default PromocionApp;