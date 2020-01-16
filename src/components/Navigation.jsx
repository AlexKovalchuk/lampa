import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../config";
import './Navigation.scss'
import Logo from "../assets/images/logo.svg";

export const Navigation = () => (
  <div className="header-wrapper">
    <header className="header-item">
      <Link to={routes.goods} className="react-link">
        <img className="logo" src={Logo} alt="React" />
        <h2>Goods</h2>
      </Link>
      <nav>
        <ul className="site-navigation">
          <li>
            <Link to={routes.cart}>Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
);
