/*
JAYMATAJI
Om Shri Ganeshaya Namah
Jai Shri Krishna
Jai Shri Ram
*/
import home from "./home.js";
import "./home.css";
import React, { Component, useState } from "react";
import {render} from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//const express = require("express");
//const bodyparser = require("body-parser");
//const app = express();
import {Link} from "react-router-dom";
import { useRef } from 'react';

const home = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();

      if(email === ""){
        console.log("Error");
      }
      
    };
    
    return (
        <div className="full-page">
       <header>
        <ul className="navmenu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Find Restaurants</a></li>
        </ul>

        <div className="nav-icon">
            <a href="#"><i class='#'></i></a>
            <div class="dropdown">
                <a href="#"><i class='#'></i></a>
                <div className="dropdown-content">
                    <a href="#">Profile Card</a>
                    <a href="#">REservation History</a>
                </div>
            </div>
            <a href="#"><i class='#'></i></a>
        </div>
       </header>

       <section className="main-home" id="main-home" style="background-color:white;">
        <div class="main-text">
            <h1>Welcome to Food Radar</h1>

            <a href="#" className="main-btn">Explore Now <i class='#'></i></a>
        </div>

        <div class="down-arrow">
            <a href="#" className="down"><i class='#'></i></a>
        </div>
    </section>

    <section className="trending-product" id="trending" style="background-color: white;">
        <div className="center-text">
            <h2>Trending <span>products</span></h2>
        </div>
        <div className="products">
                <div class="row1">
                    <img src="#" alt=""/>
                    <div className="product-text">
                        <h5>Trending</h5>
                    </div>
                    <div className="price">
                        <h4><b>Name: </b></h4>
                    </div>
                </div>
        </div>
    </section>

    <section className="contact" id="contact">
        <div className="contact-info">
            <div className="first-info">
                <h1>Lucky 7</h1>

                <p>4568 York Road,<br>Towson, MD, 21334</br></p>
                <p>(410)-123-6789</p>
                <p>lucky7@yahoo.com</p>

                <div className="social-icon">
                    <a href="#"><i class='#'></i></a>
                    <a href="#"><i class='#'></i></a>
                    <a href="#"><i class='#'></i></a>
                    <a href="#"><i class='#'></i></a>
                    <a href="#"><i class='#'></i></a>

                </div>
            </div>

            <div className="second-info">
                <h4>Support</h4>
                <p><a href="#">Logout</a></p>
                <p><a href="#">About Us</a></p>
                <p><a href="#">Privacy</a></p>

            </div>

            <div className="third-info">
                <h4>Shop</h4>
                <p><a href="#">Shop Food</a></p>
            </div>

            <div className="five">
                <h4>Subscribe</h4>
                <p>Receive Updates, Hot Deals, Discounts Sent Straight In Your Inbox Daily</p>
            </div>
        </div>
    </section>

    <div className="end-text">
        <p>Copyright @2023. All Rights Reserved. Designed by Lucky 7 Convenience Store.</p>
    </div>


       </div>
     );
  };
  
  export default home;
  