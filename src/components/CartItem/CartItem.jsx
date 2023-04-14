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
import ItemsCountsCart from "../ItemsCounts/ItemsCountsCart";

const CartItem = ({ item }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345, height: 400, textDecoration: "none" }}>
        <CardMedia component="img" height="140" image={item.image}></CardMedia>
        <CardContent>
          <Typography
            sx={{
              fontSize: 15,
              fontWeight: "bold",
              height: 30,
              overflow: "hidden",
            }}
            gutterBottom
            variant="h6"
            component="div"
          >
            {item.title}
          </Typography>
          <Typography gutterBottom variant="p" component="p">
            <Box>Cantidad: {item.quantity}</Box>
          </Typography>
          <Typography gutterBottom variant="p" component="p">
            <Box>Precio: {item.price}</Box>
          </Typography>
          <Typography gutterBottom variant="p" component="p">
            <Box>Total: {item.price * item.quantity} </Box>
          </Typography>
        </CardContent>
        <CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <ItemsCountsCart producto={item.id} cantidad={item.quantity} />
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default CartItem;
