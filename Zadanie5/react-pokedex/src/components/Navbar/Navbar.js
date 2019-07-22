import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const { navbarWrapper, navLink } = styles;

const Navbar = () => {
  return (
    <div>
      <nav className={navbarWrapper}>
        <NavLink className={navLink} exact to="/pokedex">
          Pokedex
        </NavLink>
        <NavLink className={navLink} exact to="/favourites">
          Favourites
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
