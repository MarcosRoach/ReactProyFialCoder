import React, { useContext, useEffect, useState } from "react";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../context/CartContext";
import CartEmpty from "./CartEmpty";
import { Box, Button, Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModalUser from "../ModalUser/ModalUser";

const Cart = () => {
  //Contexto del carrito
  const { cart } = useContext(CartContext);
  const { clear } = useContext(CartContext);
  const { total } = useContext(CartContext);

  return (
    <div>
      <h1>Resumen de Compra</h1>

      <Box sx={{ flexGrow: 1, marginTop: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={10} sx={{}} container spacing={1}>
            {cart.length === 0 ? (
              <CartEmpty />
            ) : (
              cart.map((item) => (
                <Grid item xs={3}>
                  <CartItem key={item.id} item={item} />
                </Grid>
              ))
            )}
          </Grid>

          <Grid sx={{ paddingLeft: 1 }}>
            <h4>Resumen de la compra</h4>
            <hr />
            <h5>Total: $ {total()} </h5>

            {cart.length === 0 ? (
              <p></p>
            ) : (
              <Button
                sx={{ marginTop: 2, marginBottom: 2 }}
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={() => {
                  clear();
                }}
              >
                Vaciar Carrito
              </Button>
            )}
            <hr />
            {cart.length === 0 ? <p></p> : <ModalUser />}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Cart;
