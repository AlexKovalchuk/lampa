import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { routes } from "../config";
import './Navigation.scss'
import Logo from "../assets/images/logo.svg";
import {connect} from "react-redux";
import {initCartFromLocalStorage} from '../pages/Cart/store/cart.actions';

const NavigationComponent = props => {
  const {cart, initCartFromLocalStorage} = props;
  useEffect(() => {
    initCartFromLocalStorage();
  },[]);

  useEffect(() => {

  }, [cart]);
  const priceIcon = cart.totalPrice ? `${cart.totalPrice}$` : null
  return (
    <div className="header-wrapper">
      <header className="header-item">
        <Link to={routes.goods} className="react-link">
          <img className="logo" src={Logo} alt="React" />
          <h2>Goods</h2>
        </Link>
        <nav>
          <ul className="site-navigation">
            <li className='cart-icon-navigation-container'>
              <Link to={routes.cart}>Cart</Link>
              <span className='price-icon-value'>{priceIcon}</span>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

const mapStateToProps = state => {
  const {cart} = state;
  return {
    cart,
  };
};

const mapDispatchToProps = {
  initCartFromLocalStorage
};

export const Navigation = connect(mapStateToProps, mapDispatchToProps)(NavigationComponent);

