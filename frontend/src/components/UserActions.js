import React, { useState } from "react";
import axios from "axios";
import spinner from "../images/spinner.gif";
import { useCookies } from "react-cookie";

export const UserActions = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [, setCookies] = useCookies("access_token");

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/login",
        {
          email,
          password,
        }
      );
      setCookies("access_token", response.data.token);
      localStorage.setItem("userID", response.data.userID);
      if (response.data && response.data.token) {
        setMessage("Login Success");
        setTimeout(() => {
          onLoginSuccess();
        }, 2000); // Wait for 2 seconds before transitioning
      } else {
        setMessage("Login Failed");
        setIsLoading(false);
      }
    } catch (error) {
      setMessage("Login Failed");
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f7f7f7",
      }}
    >
      <h2>Login</h2>
      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "300px",
        }}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Login
        </button>
      </form>
      {message && (
        <div
          style={{
            marginTop: "20px",
            fontSize: "16px",
            color: message === "Login Success" ? "green" : "red",
          }}
        >
          {message}
        </div>
      )}
      {isLoading && (
        <img
          src={spinner}
          alt="Loading..."
          style={{ width: "16px", height: "16px", marginLeft: "5px" }}
        />
      )}
    </div>
  );
};
