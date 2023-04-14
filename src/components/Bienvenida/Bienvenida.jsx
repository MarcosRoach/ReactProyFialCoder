import { Box, Typography } from "@mui/material";
import React from "react";

const Bienvenida = ({ saludo }) => {
  return (
    <Box sx={{ textAlign: "center", height: 600, paddingTop: 5 }}>
      <Typography component="h3" variant="h3">
        {saludo}
      </Typography>
    </Box>
  );
};

export default Bienvenida;
