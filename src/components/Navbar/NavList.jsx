import { Box, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const NavList = ({ navLinks, disp }) => {
  // Variable para estilos del link activo
  let activeStyle = {
    textDecoration: "none",
    color: "red",
  };
  let noActiveStyle = {
    textDecoration: "none",
    color: "yellow",
  };

  // Botones Nav
  const navItems = navLinks.map((item) => (
    <NavLink
      key={item.titulo}
      to={item.titulo}
      style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
    >
      <ListItemButton component="a" href={item.path} key={item.titulo}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText>{item.titulo}</ListItemText>
      </ListItemButton>
    </NavLink>
  ));
  // Botones Nav

  return (
    <Box
      sx={{
        with: 250,
      }}
    >
      <nav>
        <Box sx={{ display: disp }}>{navItems}</Box>
      </nav>
    </Box>
  );
};

export default NavList;
