import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ItemCounts from "../ItemsCounts/ItemCounts";

const CardItem = ({ producto, productoID }) => {
  return (
    <Link to={`/shop/${producto.id}`}>
      <Card sx={{ maxWidth: 345, height: 400, textDecoration: "none" }}>
        <CardMedia
          component="img"
          height="140"
          image={producto.image}
        ></CardMedia>
        <CardContent>
          <Typography
            sx={{ fontSize: 15, fontWeight: "bold", height: 120 }}
            gutterBottom
            variant="h6"
            component="div"
          >
            {producto.title}
          </Typography>
        </CardContent>
        <CardActionArea>
          <CardActions>
            <Typography gutterBottom variant="p" component="p">
              <Box>Precio: {producto.price}</Box>
            </Typography>
          </CardActions>
          <CardActions>
            <Button size="small" color="primary">
              Comprar
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default CardItem;
