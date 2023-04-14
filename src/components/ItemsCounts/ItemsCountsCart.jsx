import { Button, Input } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartContext } from "../../context/CartContext";

const ItemsCountsCart = ({ producto, cantidad }) => {
  const [count, setCount] = useState(cantidad);

  //Contexto del carrito
  const { cart } = useContext(CartContext);
  const { removeItem } = useContext(CartContext);
  const { updateQuantity } = useContext(CartContext);

  //Funcion Boton -
  function restar() {
    setCount(count - 1);
    updateQuantity(producto, -1);
  }

  //Funcion Boton +
  function sumar() {
    setCount(count + 1);
    updateQuantity(producto, 1);
  }

  return (
    <div>
      <button
        disabled={count == 1}
        onClick={() => {
          restar();
        }}
      >
        -
      </button>
      <Input
        type="number"
        value={count}
        color="primary"
        variant="soft"
        disabled
        sx={{ width: 50, marginLeft: 1, marginRight: 1 }}
      />
      <button onClick={() => sumar()}>+</button>
      <Button
        sx={{ marginTop: 2, marginBottom: 2 }}
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={() => {
          removeItem(producto, cantidad);
        }}
      >
        Eliminar
      </Button>
    </div>
  );
};

export default ItemsCountsCart;
