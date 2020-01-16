import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { CartItem } from './CartComponents/CartItem';
import {increaseItemCounter, removeItemFromCart } from './store/cart.actions'


import './Cart.scss';

const CartComponent = props => {
  const {cart, increaseItemCounter, removeItemFromCart} = props;
  const {totalPrice, cartData} = cart;
  useEffect(() => {

  }, [cart]);

  const renderItems = () => {
    return cartData.map((item, index) => {
      return (
        <div className='cart-item-wrapper' key={`cart-item-wrapper${index}`}>
          <CartItem item={item} handler={cartItemHandler} />
        </div>
      )
    })
  };

  const cartItemHandler = (id, newCount) => {
    if(newCount) increaseItemCounter(id, newCount);
    else removeItemFromCart(id);
  };

  return (
    <div className='cart-page__container'>
      <h1 className='cart-page__title'>Cart</h1>
      <div className='cart-page__items-and-form-wrapper'>
        <div className='cart-page__item-container'>
          {renderItems()}
        </div>
        <div className='cart-page__form-container'>
          form...
        </div>
      </div>

      <div className='cart-page__total-price-container'>
        <span>Total Price: </span>
        <span>{totalPrice}$</span>
      </div>
    </div>
  )
};

const mapStateToProps = state => {
  const {cart} = state;
  return {
    cart,
  };
};

const mapDispatchToProps = {
  increaseItemCounter,
  removeItemFromCart,
};

export const Cart = connect(mapStateToProps, mapDispatchToProps)(CartComponent);
