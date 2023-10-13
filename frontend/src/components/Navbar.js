import { Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";

export const Navbar = () => {
  return (
    <div>
      <Link to="/">HOME</Link>
      <Link to="/login">LOGIN</Link>
      <Link to="/profile">PROFILE</Link>
    </div>
  );
};
