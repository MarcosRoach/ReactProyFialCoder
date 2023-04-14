import React from "react";
import carrito_vacio from "../../assets/carrito_vacio.webp";

const CartEmpty = () => {
  return (
    <div>
      <img src={carrito_vacio} alt="Img Carrito Vacio" />
    </div>
  );
};

export default CartEmpty;
