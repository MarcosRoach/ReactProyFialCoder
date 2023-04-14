import { AppBar, Drawer, IconButton, Toolbar } from "@mui/material";
import React, { useState } from "react";
import NavList from "./NavList";
import MenuIcon from "@mui/icons-material/Menu";
import CartWidget from "./CartWidget";
import { Box } from "@mui/system";
import HomeIcon from "@mui/icons-material/Home";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NavBarLogo from "./NavBarLogo";

const Navbar = () => {
  // Lista de Botones Nav
  const navLinks = [
    {
      titulo: "Home",
      path: "home",
      icon: <HomeIcon />,
    },
    {
      titulo: "Shop",
      path: "shop",
      icon: <ShoppingCartIcon />,
    },
    {
      titulo: "Contact",
      path: "contact",
      icon: <ContactPageIcon />,
    },
  ];
  // Lista de Botones Nav

  // Estado de Boton
  const [open, setOpen] = useState(false);

  return (
    <div>
      <AppBar
        position="sticky"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "darkgray",
        }}
      >
        <Box
          sx={{
            px: 2,
            display: { xs: "none", sm: "flex" },
          }}
        >
          <NavBarLogo />
        </Box>

        <Toolbar
          sx={{
            justifyContent: "space-between",
            flexGrow: 1,
          }}
        >
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexGrow: 1,
            }}
          >
            <NavList navLinks={navLinks} disp="flex" />
          </Box>

          <CartWidget />
        </Toolbar>
      </AppBar>

      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        <NavList navLinks={navLinks} />
      </Drawer>
    </div>
  );
};

export default Navbar;
