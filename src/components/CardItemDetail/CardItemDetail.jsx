import {
  Box,
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

const CardItemDetail = ({ producto }) => {
  return (
    <Link to={`/shop/${producto.id}`}>
      <Card sx={{ maxWidth: 345, textDecoration: "none" }}>
        <CardMedia
          component="img"
          height="140"
          image={producto.image}
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {producto.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {producto.description}
          </Typography>
        </CardContent>
        <CardActionArea>
          <CardActions>
            <Typography gutterBottom variant="p" component="p">
              <Box>Precio: {producto.price}</Box>
            </Typography>
          </CardActions>
          <CardActions>
            <ItemCounts producto={producto} />
          </CardActions>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default CardItemDetail;
