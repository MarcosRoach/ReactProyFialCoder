import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import styles from "./navBarLogo.module.css";

const NavBarLogo = () => {
  return (
    <Link to="/home">
      <img src={logo} alt="logo" className={styles.logo} />
    </Link>
  );
};

export default NavBarLogo;
