import React from "react";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () =>{
    const {cartTotal} = useContext(CartContext);
    return(
<Link to={"/cart"} className="btn fondoVerde position-relative">
 <img src={"images/bag-fill.svg"} alt={"Carrito"} width={22} />
 <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
</Link>
    )
}
export default CartWidget;