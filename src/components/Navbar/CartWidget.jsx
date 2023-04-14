import React, { useState } from "react";
import styles from "./cartWidget.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  //Contexto del carrito
  //Contexto del carrito
  const { cartNumero } = useContext(CartContext);

  return (
    <Link to="/cart">
      <div className={styles.cartWidget}>
        <Badge badgeContent={cartNumero} color="warning">
          <ShoppingCartIcon color="action" />
        </Badge>
      </div>
    </Link>
  );
};

export default CartWidget;
