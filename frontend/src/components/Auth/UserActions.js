import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "./index.css";

export const UserActions = () => {
  const [move, setMove] = useState(false);

  function handleMove() {
    setMove((move) => !move);
  }

  let togglePanel = move ? " right-panel-active" : "";
  return (
    <div className={`container${togglePanel}`} id="container">
      <Register />
      <Login />
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h2>Already have an account?</h2>
            <button class="ghost" onClick={handleMove} id="signIn">
              Sign In
            </button>
          </div>
          <div class="overlay-panel overlay-right">
            <h2>Don't have an account?</h2>
            <button class="ghost" onClick={handleMove} id="signUp">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/user/register", {
        firstname,
        lastname,
        email,
        mobile,
        password,
      });
      navigate("/");
    } catch (error) {
      setMessage("Signup Failed");
      console.error(error);
    }
  };

  return (
    <div class="form-container sign-up-container">
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form">
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            value={firstname}
            onChange={(event) => setFirstname(event.target.value)}
          />
        </div>
        <div className="form">
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
          />
        </div>
        <div className="form">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form">
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="text"
            id="mobile"
            value={mobile}
            onChange={(event) => setMobile(event.target.value)}
          />
        </div>
        <div className="form">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {message}
    </div>
  );
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post("http://localhost:8000/api/user/login", {
        email,
        password,
      });
      setCookies("access_token", result.data.token);
      localStorage.setItem("userID", result.data.userID);
      navigate("/mainpage");
    } catch (err) {
      alert("ERROR: Login failed");
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <div className="form">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form">
          <label htmlFor="password">Username:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};
