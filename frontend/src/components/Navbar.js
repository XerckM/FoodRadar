import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/mainpage">MAP</Link>
        </li>
        <li>
          <Link to="/profile">PROFILE</Link>
        </li>
        <li>
          <Link to="/login">LOGIN</Link>
        </li>
        <li>
          <Link to="/logout">LOGOUT</Link>
        </li>
      </ul>
    </div>
  );
};
