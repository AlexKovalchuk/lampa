import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { CartItem } from './CartComponents/CartItem';
import CartForm from './CartComponents/CartForm';
import {increaseItemCounter, removeItemFromCart, sendOrderToFirebase } from './store/cart.actions'


import './Cart.scss';

const CartComponent = props => {
  const {cart, cartForm, increaseItemCounter, removeItemFromCart, sendOrderToFirebase} = props;
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

  const orderSubmit = customer => {
    const order = {customer, cart};
    sendOrderToFirebase(order)
  };

  return (
    <div className='cart-page__container'>
      <h1 className='cart-page__title'>Cart</h1>
      <div className='cart-page__items-and-form-wrapper'>
        <div className='cart-page__item-container'>
          {renderItems()}
        </div>
        <div className='cart-page__form-container'>
          <CartForm handleSubmit={orderSubmit} cartForm={cartForm} />
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
  const {cart, form} = state;
  return {
    cart,
    cartForm: form.cartForm,
  };
};

const mapDispatchToProps = {
  increaseItemCounter,
  removeItemFromCart,
  sendOrderToFirebase,
};

const Cart = connect(mapStateToProps, mapDispatchToProps)(CartComponent);
export default Cart;