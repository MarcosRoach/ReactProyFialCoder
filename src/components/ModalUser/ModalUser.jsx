import { useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { CartContext } from "../../context/CartContext";
import { Alert, FormControl, Input, InputAdornment } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import HomeIcon from "@mui/icons-material/Home";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalUser = () => {
  const [inputNombre, setNombre] = useState("");
  const [inputApellido, setApellido] = useState("");
  const [inputEmail, setEmail] = useState("");
  const [inputTelefono, setTelefono] = useState("");
  const [inputDireccion, setDireccion] = useState("");

  const newUsuario = {};

  //Contexto del carrito
  const { finish } = useContext(CartContext);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const finishOrder = () => {
    let newUsuario = {
      nombre: inputNombre,
      apellido: inputApellido,
      email: inputEmail,
      telefono: inputTelefono,
      direccion: inputDireccion,
    };
    finish(newUsuario);
    handleClose();
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{ marginTop: 2, marginBottom: 2, fontSize: 13 }}
        variant="outlined"
        startIcon={<ShoppingCartCheckoutIcon />}
      >
        Finalizar Compra
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Ingresar Datos Comprador
          </Typography>
          <hr />
          <Box>
            <FormControl variant="standard">
              <Input
                sx={{ paddingTop: 1, paddingBottom: 1, width: 320 }}
                nombre="input-with-icon-adornment"
                placeholder="Nombre"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
                onChange={(e) => setNombre(e.target.value)}
              />
            </FormControl>
            <FormControl variant="standard">
              <Input
                sx={{ paddingTop: 1, paddingBottom: 1, width: 320 }}
                nombre="input-with-icon-adornment"
                placeholder="Apellido"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
                onChange={(e) => setApellido(e.target.value)}
              />
            </FormControl>
            <FormControl variant="standard">
              <Input
                sx={{ paddingTop: 1, paddingBottom: 1, width: 320 }}
                nombre="input-with-icon-adornment"
                placeholder="Email"
                startAdornment={
                  <InputAdornment position="start">
                    <MailIcon />
                  </InputAdornment>
                }
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl variant="standard">
              <Input
                sx={{ paddingTop: 1, paddingBottom: 1, width: 320 }}
                nombre="input-with-icon-adornment"
                placeholder="Telefono"
                startAdornment={
                  <InputAdornment position="start">
                    <SmartphoneIcon />
                  </InputAdornment>
                }
                onChange={(e) => setTelefono(e.target.value)}
              />
            </FormControl>
            <FormControl variant="standard">
              <Input
                sx={{ paddingTop: 1, paddingBottom: 1, width: 320 }}
                nombre="input-with-icon-adornment"
                placeholder="Direccion"
                startAdornment={
                  <InputAdornment position="start">
                    <HomeIcon />
                  </InputAdornment>
                }
                onChange={(e) => setDireccion(e.target.value)}
              />
            </FormControl>
          </Box>
          <Button
            sx={{ marginTop: 2, marginBottom: 2, fontSize: 13 }}
            variant="outlined"
            startIcon={<ShoppingCartCheckoutIcon />}
            onClick={() => finishOrder()}
          >
            Finalizar Compra
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalUser;
