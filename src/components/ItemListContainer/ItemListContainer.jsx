import { Filter } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardItem from "../CardItem/CardItem";
import Categorias from "../Categorias/Categorias";

const ItemListContainer = ({ productos }) => {
  // Caegorias
  const categorias = [
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];

  const { categoria } = useParams();

  if (categoria != undefined) {
    productos = productos.filter((producto) => producto.category == categoria);
  }

  return (
    <Box sx={{ flexGrow: 1, marginTop: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          {categorias.map((categoria) => (
            <Categorias key={categoria} categoria={categoria} />
          ))}
        </Grid>

        <Grid item xs={10} sx={{}} container spacing={1}>
          {productos.map((producto) => (
            <Grid key={producto.id} item xs={3}>
              <CardItem producto={producto} productoID={producto.id} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemListContainer;
