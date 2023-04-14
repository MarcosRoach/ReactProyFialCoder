import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const ItemCounts = ({ producto }) => {
  const [count, setCount] = useState(1);

  //Contexto del carrito
  const { addItem } = useContext(CartContext);

  return (
    <div>
      <button disabled={count <= 1} onClick={() => setCount(count - 1)}>
        -
      </button>
      <input type="number" value={count} />
      <button onClick={() => setCount(count + 1)}>+</button>

      <Button
        sx={{ marginTop: 2, marginBottom: 2 }}
        variant="contained"
        endIcon={<AddShoppingCartIcon />}
        onClick={() => addItem(producto, count)}
      >
        Agregar al Carrito
      </Button>
    </div>
  );
};

export default ItemCounts;
