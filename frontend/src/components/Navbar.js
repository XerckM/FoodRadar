import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <p1>Home</p1>
      </Link>
      <Link to="/mainpage">
        <p1>MainPage</p1>
      </Link>
      <Link to="/profile">
        <p1>Profile</p1>
      </Link>
      <nav>
        <div>
          <Link to="/login">
            <p1>Login</p1>
          </Link>
        </div>
        <div>
          <Link to="/logout">
            <p1>Logout</p1>
          </Link>
        </div>
      </nav>
    </div>
  );
};
